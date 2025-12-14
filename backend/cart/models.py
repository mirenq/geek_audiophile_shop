from django.db import models
from django.conf import settings
class Cart(models.Model):
    user=models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    updated=models.DateTimeField(auto_now=True)
    def __str__(self): return f"Cart({self.user})"
class CartItem(models.Model):
    cart=models.ForeignKey(Cart, on_delete=models.CASCADE, related_name='items')
    product_id=models.IntegerField()
    quantity=models.IntegerField(default=1)
    added=models.DateTimeField(auto_now_add=True)
    class Meta:
        unique_together=(('cart','product_id'),)
