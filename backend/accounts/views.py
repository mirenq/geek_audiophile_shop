from rest_framework import generics, status, permissions
from rest_framework.response import Response
from django.contrib.auth import authenticate, get_user_model
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenRefreshView
from .serializers import RegisterSerializer, UserSerializer
User=get_user_model()
class RegisterView(generics.CreateAPIView):
    serializer_class=RegisterSerializer
class LoginView(generics.GenericAPIView):
    permission_classes=[permissions.AllowAny]
    def post(self, request):
        username=request.data.get('username')
        password=request.data.get('password')
        user=authenticate(request, username=username, password=password)
        if not user:
            return Response({'detail':'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)
        refresh=RefreshToken.for_user(user)
        return Response({'refresh':str(refresh),'access':str(refresh.access_token),'user':UserSerializer(user).data})
class LogoutView(generics.GenericAPIView):
    permission_classes=[permissions.IsAuthenticated]
    def post(self, request):
        # expects: { "refresh": "<token>" }
        refresh_token=request.data.get('refresh')
        if not refresh_token:
            return Response({'detail':'Refresh token required'}, status=status.HTTP_400_BAD_REQUEST)
        try:
            token=RefreshToken(refresh_token)
            token.blacklist()
        except Exception as e:
            return Response({'detail':'Invalid token or already blacklisted'}, status=status.HTTP_400_BAD_REQUEST)
        return Response({'detail':'Logged out'})
class RefreshView(TokenRefreshView):
    pass
