from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .models import Order
from .serializers import OrderSerializer
from cart.models import Cart, CartItem
class OrderCreateView(generics.GenericAPIView):
    permission_classes=[permissions.IsAuthenticated]
    serializer_class=OrderSerializer
    def post(self, request):
        # allow creating from provided items OR from user's cart
        data=request.data.copy()
        if not data.get('items'):
            # build from cart
            cart, _ = Cart.objects.get_or_create(user=request.user)
            items=[{'product_id':it.product_id,'quantity':it.quantity} for it in cart.items.all()]
            data['items']=items
        data['user']=request.user.id
        serializer=self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
        # clear cart after order creation
        cart, _ = Cart.objects.get_or_create(user=request.user)
        cart.items.all().delete()
        return Response(serializer.data, status=201)
class OrderListView(generics.ListAPIView):
    permission_classes=[permissions.IsAuthenticated]
    serializer_class=OrderSerializer
    def get_queryset(self):
        return Order.objects.filter(user=self.request.user).order_by('-created')
class OrderDetailView(generics.RetrieveAPIView):
    permission_classes=[permissions.IsAuthenticated]
    serializer_class=OrderSerializer
    queryset=Order.objects.all()
