from django.urls import path
from . import views

app_name = 'catalog'

urlpatterns = [
    path('categories/', views.CategoryListView.as_view(), name='category-list'),
    path('categories/<slug:slug>/', views.CategoryDetailView.as_view(), name='category-detail'),

    path('brands/', views.BrandListView.as_view(), name='brand-list'),

    path('products/', views.ProductListView.as_view(), name='product-list'),
    path('products/<slug:slug>/', views.ProductDetailView.as_view(), name='product-detail'),
    path('products/<slug:slug>/related/', views.RelatedProductsView.as_view(), name='product-related'),
]
