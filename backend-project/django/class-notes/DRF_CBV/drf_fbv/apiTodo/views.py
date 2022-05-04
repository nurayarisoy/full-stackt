from django.db.models.query_utils import Q
from django.http.response import HttpResponse
from django.shortcuts import get_object_or_404, render
from rest_framework import serializers

from .models import Todo
from .serializers import TodoSerializer

from rest_framework.decorators import api_view, permission_classes, action
from rest_framework.response import Response

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView, mixins, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.viewsets import ModelViewSet

# Create your views here.


def home(request):
    return HttpResponse(
        '<center><h1 style="background-color:powderblue;">Welcome to ApiTodo</h1></center>'
    )


# @api_view(["GET"])
# def todolist(request):

#     queryset = Todo.objects.all()
#     serializer = TodoSerializer(queryset, many=True)

#     return Response(serializer.data)


# @api_view(["POST"])
# def todocreate(request):

#     serializer = TodoSerializer(data=request.data)

#     if serializer.is_valid():
#         serializer.save()

#     return Response(serializer.data)


@api_view(["GET", "POST"])
def todoListCreate(request):

    if request.method == "GET":

        queryset = Todo.objects.filter(done=False)
        serializer = TodoSerializer(queryset, many=True)

        return Response(serializer.data)

    elif request.method == "POST":

        serializer = TodoSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

        return Response(serializer.data)


# @api_view(["GET"])
# def todo_detail(request, pk):

#     queryset = Todo.objects.get(id=pk)
#     serializer = TodoSerializer(queryset)

#     return Response(serializer.data)


@api_view(["GET", "PUT", "DELETE"])
def todo_detail(request, pk):

    if request.method == "GET":

        queryset = Todo.objects.get(id=pk)
        serializer = TodoSerializer(queryset)

        return Response(serializer.data)

    elif request.method == "PUT":

        queryset = Todo.objects.get(id=pk)
        serializer = TodoSerializer(instance=queryset, data=request.data)

        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)

    elif request.method == "DELETE":
        queryset = Todo.objects.get(id=pk)
        queryset.delete()
        return Response("Item deleted", status=status.HTTP_204_NO_CONTENT)


# @api_view(["DELETE"])
# def todo_delete(request, pk):
#     queryset = Todo.objects.get(id=pk)
#     queryset.delete()
#     return Response("Item deleted")


################## API View ###################

class TodoList(APIView):

    def get(self, request):
        todos = Todo.objects.all()
        serializer = TodoSerializer(todos, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TodoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TodoDetail(APIView):

    def get_obj(self, pk):
        return get_object_or_404(Todo, pk=pk)

    def get(self, request, pk):
        todo = self.get_obj(pk)
        serializer = TodoSerializer(todo)
        return Response(serializer.data)

    def put(self, request, pk):
        todo = self.get_obj(pk)
        serializer = TodoSerializer(instance=todo, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        todo = self.get_obj(pk)
        todo.delete()
        data = {
            "message": "Todo succesfully deleted."
        }
        return Response(data, status=status.HTTP_204_NO_CONTENT)


######################## Genericapı View #############################


class TodoListCreate(mixins.ListModelMixin, GenericAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    # def post(self, request, *args, **kwargs):
    #     return self.create(request, *args, **kwargs)


###################### generics Views ###########################


class TodoGenListCreate(ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class TodoGenGetUpdateDelete(RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


################## ViewSets ####################

class TodoMVS(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    @action(methods=["GET"], detail=False)
    def todo_count(self, request):
        todo_count = Todo.objects.filter(done=False).count()
        count = {
            'undo-todos': todo_count
        }
        return Response(count)
