from django.urls import path
from rest_framework.authtoken import views
from .views import RegisterView, log_out

urlpatterns = [
    path('login/', views.obtain_auth_token, name='login'),
    path('register/', RegisterView.as_view(), name='register'),
    path('logout/', log_out, name='logout'),
]