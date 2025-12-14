from django.urls import path
from .views import CartView, CartAddView, CartUpdateView, CartRemoveView, CartClearView
urlpatterns=[
    path('', CartView.as_view(), name='cart-list'),
    path('add/', CartAddView.as_view(), name='cart-add'),
    path('update/', CartUpdateView.as_view(), name='cart-update'),
    path('remove/', CartRemoveView.as_view(), name='cart-remove'),
    path('clear/', CartClearView.as_view(), name='cart-clear'),
]
