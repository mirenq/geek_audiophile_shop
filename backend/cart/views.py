from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .models import Cart, CartItem
from .serializers import CartItemSerializer
from django.shortcuts import get_object_or_404
class CartView(generics.GenericAPIView):
    permission_classes=[permissions.IsAuthenticated]
    serializer_class=CartItemSerializer
    def get_cart(self, user):
        cart, _ = Cart.objects.get_or_create(user=user)
        return cart
    def get(self, request):
        cart=self.get_cart(request.user)
        items=cart.items.all()
        return Response(CartItemSerializer(items, many=True).data)
class CartAddView(generics.CreateAPIView):
    permission_classes=[permissions.IsAuthenticated]
    serializer_class=CartItemSerializer
    def perform_create(self, serializer):
        cart, _ = Cart.objects.get_or_create(user=self.request.user)
        product_id=serializer.validated_data['product_id']
        quantity=serializer.validated_data.get('quantity',1)
        obj, created = CartItem.objects.update_or_create(cart=cart, product_id=product_id, defaults={'quantity':quantity})
        self.instance=obj
    def create(self, request, *args, **kwargs):
        serializer=self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(CartItemSerializer(self.instance).data, status=201)
class CartUpdateView(generics.GenericAPIView):
    permission_classes=[permissions.IsAuthenticated]
    serializer_class=CartItemSerializer
    def patch(self, request):
        cart, _ = Cart.objects.get_or_create(user=request.user)
        item_id=request.data.get('id')
        if not item_id:
            return Response({'detail':'id required'}, status=status.HTTP_400_BAD_REQUEST)
        item=get_object_or_404(CartItem, id=item_id, cart=cart)
        qty=request.data.get('quantity')
        if qty is None:
            return Response({'detail':'quantity required'}, status=status.HTTP_400_BAD_REQUEST)
        item.quantity=int(qty)
        item.save()
        return Response(CartItemSerializer(item).data)
class CartRemoveView(generics.GenericAPIView):
    permission_classes=[permissions.IsAuthenticated]
    def delete(self, request):
        cart, _ = Cart.objects.get_or_create(user=request.user)
        item_id=request.data.get('id')
        if not item_id:
            return Response({'detail':'id required'}, status=status.HTTP_400_BAD_REQUEST)
        item=CartItem.objects.filter(id=item_id, cart=cart).first()
        if not item:
            return Response({'detail':'Not found'}, status=status.HTTP_404_NOT_FOUND)
        item.delete()
        return Response({'detail':'removed'})
class CartClearView(generics.GenericAPIView):
    permission_classes=[permissions.IsAuthenticated]
    def delete(self, request):
        cart, _ = Cart.objects.get_or_create(user=request.user)
        cart.items.all().delete()
        return Response({'detail':'cleared'})
