from rest_framework import generics, filters
from django.db.models import Count
from .models import Category, Product, Brand
from .serializers import (
    CategorySerializer, ProductListSerializer, ProductDetailSerializer, BrandSerializer
)
from .filters import ProductFilter
from rest_framework.response import Response
from drf_spectacular.utils import extend_schema

# backend_site/views.py
from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
from django.contrib.auth import get_user_model

User = get_user_model()

index_view = never_cache(TemplateView.as_view(template_name='index.html'))

# Categories
class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.annotate(products_count=Count('products')).all()
    serializer_class = CategorySerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name', 'description']
    ordering_fields = ['name']


class CategoryDetailView(generics.RetrieveAPIView):
    queryset = Category.objects.annotate(products_count=Count('products')).all()
    serializer_class = CategorySerializer
    lookup_field = 'slug'

from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to my Django site!")


# Brands
class BrandListView(generics.ListAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name']


# Products - list with filtering & search
class ProductListView(generics.ListAPIView):
    queryset = Product.objects.filter(is_active=True).select_related('brand', 'category').prefetch_related('images')
    serializer_class = ProductListSerializer
    filterset_class = ProductFilter
    search_fields = ['name', 'description', 'short_description']
    ordering_fields = ['price', 'created_at', 'name']

    @extend_schema(
        description="List products; supports filters: category (slug), brand (slug), price_min, price_max, in_stock, search, ordering, page."
    )
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)


class ProductDetailView(generics.RetrieveAPIView):
    queryset = Product.objects.filter(is_active=True).select_related('brand', 'category').prefetch_related('images')
    serializer_class = ProductDetailSerializer
    lookup_field = 'slug'

    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

    @extend_schema(
        responses=ProductDetailSerializer,
        description="Retrieve a single product by slug. Returns product details and images."
    )
    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)


# Related products: same category, exclude itself, limit N
class RelatedProductsView(generics.ListAPIView):
    serializer_class = ProductListSerializer

    def get_queryset(self):
        slug = self.kwargs.get('slug')
        try:
            product = Product.objects.get(slug=slug)
        except Product.DoesNotExist:
            return Product.objects.none()
        qs = Product.objects.filter(category=product.category, is_active=True).exclude(pk=product.pk)
        return qs.select_related('brand', 'category').prefetch_related('images')[:8]