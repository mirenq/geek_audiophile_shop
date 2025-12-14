from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView, SpectacularRedocView

urlpatterns = [
    # Django Admin (must be FIRST)
    path("admin/", admin.site.urls),

    # API routes
    path("api/v1/", include("catalog.urls")),
    path("api/auth/", include("accounts.urls")),
    path("api/v1/accounts/", include("accounts.urls")),
    path("api/v1/", include("cart.urls")),
    path("api/v1/", include("orders.urls")),
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),  # raw OpenAPI schema
    path('api/schema/swagger-ui/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('api/schema/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
    # Your app URLs
]

# React SPA — must ALWAYS be last
urlpatterns += [
    re_path(r"^(?!api/).*", TemplateView.as_view(template_name="index.html")),
]
