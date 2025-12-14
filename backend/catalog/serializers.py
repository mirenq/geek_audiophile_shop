from rest_framework import serializers
from .models import Category, Brand, Product, ProductImage

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ['id', 'image', 'alt_text', 'order']


class CategorySerializer(serializers.ModelSerializer):
    products_count = serializers.IntegerField(read_only=True)

    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'description', 'products_count']


class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ['id', 'name', 'slug', 'website']


class ProductListSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()
    brand = BrandSerializer()
    images = ProductImageSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = [
            'id', 'sku', 'name', 'slug', 'short_description', 'price', 'old_price',
            'brand', 'category', 'images', 'stock'
        ]


class ProductDetailSerializer(serializers.ModelSerializer):
    brand = BrandSerializer()
    category = CategorySerializer()
    images = ProductImageSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = [
            'id', 'sku', 'name', 'slug', 'description', 'short_description',
            'price', 'old_price', 'brand', 'category', 'images', 'stock', 'specifications'
        ]
