from django.shortcuts import render, redirect, HttpResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from .forms import UserForm
from django.contrib.auth.forms import  AuthenticationForm
# Create your views here.

def home(request):
    return render(request, 'users/home.html')

def register(request):
    form = UserForm()
    if request.method == "POST":
        form = UserForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            # username = form.cleaned_data["username"]
            email = form.cleaned_data["email"]
            password = form.cleaned_data["password1"]
            # veya
            # username = form.cleaned_data.get('username')
            user = authenticate(email=email, password=password)
            login(request, user)
            return redirect("home")
    context = {
        "form_user" : form
    }
    return render(request, "users/register.html", context)


def user_logout(request):
    messages.success(request, "You Logout!")
    logout(request)
    return redirect('home')


def user_login(request):
    form = AuthenticationForm(request, data=request.POST)
    if form.is_valid():
        user = form.get_user()
        if user:
            messages.success(request, "Login successfull")
            login(request, user)
            return redirect('home')
    return render(request, 'users/user_login.html', {"form": form})