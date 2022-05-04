
from django.shortcuts import render
from fscohort.models import Student, Course
from .serializers import StudentSerializer, CourseSerializer
from rest_framework import generics
from rest_framework.pagination import LimitOffsetPagination, PageNumberPagination
from .pagination import SmallPageNumberPagination, LargePageNumberPagination, MycursorPagination
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter

class StudentListCreateAPIView(generics.ListCreateAPIView):
    
    queryset = Student.objects.all().order_by('id')
    serializer_class = StudentSerializer
    # pagination_class = MycursorPagination
    # filter_backends = [SearchFilter, OrderingFilter]
    # filterset_fields = ['first_name',]
    # search_fields = ['first_name','last_name' ]
    # ordering_fields = ['first_name', ]
    
    def get_queryset(self):
        queryset = Student.objects.all()
        first_name = self.request.query_params.get('first_name')
        if first_name is not None:
            # mycourse = Course.objects.get(title=course)
            queryset = queryset.filter(first_name__contains=first_name)
        return queryset
    
class StudentDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    lookup_field="id"

class CourseListCreateAPIView(generics.ListCreateAPIView):
    
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    # pagination_class = SmallPageNumberPagination
