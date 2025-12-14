from rest_framework import serializers
from .models import Order, OrderItem
class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model=OrderItem; fields=['product_id','quantity']
class OrderSerializer(serializers.ModelSerializer):
    items=OrderItemSerializer(many=True)
    class Meta:
        model=Order; fields=['id','created','shipping_address','status','items']
    def create(self, validated_data):
        items_data=validated_data.pop('items', [])
        order=Order.objects.create(**validated_data)
        for it in items_data:
            OrderItem.objects.create(order=order, **it)
        return order
