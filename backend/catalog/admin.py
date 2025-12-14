from django.contrib import admin
from .models import Category, Brand, Product, ProductImage

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ('name',)


@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'website')
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ('name',)


class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'sku', 'brand', 'category', 'price', 'stock', 'is_active', 'created_at')
    list_filter = ('is_active', 'brand', 'category')
    search_fields = ('name', 'sku')
    inlines = [ProductImageInline]
    prepopulated_fields = {'slug': ('name',)}
