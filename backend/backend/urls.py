from django.contrib import admin
from django.urls import path, include
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from catalog.views import home

urlpatterns = [
    path('admin/', admin.site.urls),

    # Catalog (Developer A)
    path('api/v1/catalog/', include('catalog.urls')),

    # Auth, cart, orders (Developer B)
    path('api/v1/auth/', include('accounts.urls')),
    path('api/v1/cart/', include('cart.urls')),
    path('api/v1/orders/', include('orders.urls')),

    # Schema + Swagger
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/schema/swagger-ui/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),

    # Root homepage
    path('', home),
]
