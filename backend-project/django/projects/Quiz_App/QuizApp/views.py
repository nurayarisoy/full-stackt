from django.shortcuts import render
from rest_framework import generics
from .models import Category, Quiz, Question
from .serializers import CategorySerializer, CategoryDetailSerializer, QuestionSerializer
from rest_framework.permissions import IsAuthenticated , AllowAny



class CategoryList(generics.ListAPIView):
    serializer_class= CategorySerializer
    queryset = Category.objects.all()
    permission_classes = [AllowAny]
    
    
class CategoryDetail(generics.ListAPIView):
    serializer_class = CategoryDetailSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        queryset = Quiz.objects.all()
        category = self.kwargs["category"]  #backend, frontend
        queryset = queryset.filter(category__name=category) # 2 underscore ile parent modelin fieldlarına ulaşabiliyoruz(quiz tablosunda category id ler ile kayıtlı olduğu için - foreignkey)
        return queryset


class QuizDetail(generics.ListAPIView):
    serializer_class = QuestionSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        queryset = Question.objects.all()
        title = self.kwargs["title"]
        queryset = queryset.filter(quiz__title=title) 
        return queryset
