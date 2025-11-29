from django.db import models
from django.conf import settings
class Order(models.Model):
    user=models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    created=models.DateTimeField(auto_now_add=True)
    shipping_address=models.TextField(blank=True, default='')
    status=models.CharField(max_length=30, default='created')
    def __str__(self): return f"Order({self.id}) by {self.user}"
class OrderItem(models.Model):
    order=models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')
    product_id=models.IntegerField()
    quantity=models.IntegerField(default=1)
