from django.urls import path, include
from .views import (
    # home,
    # todolist,
    # todocreate,
    todoListCreate,
    todo_detail,
    # todo_detail,
    # todo_update,
    # todo_delete,
    TodoList,
    TodoDetail,
    TodoListCreate,
    TodoGenListCreate,
    TodoGenGetUpdateDelete,
    TodoMVS
)

from rest_framework import routers

router = routers.DefaultRouter()
router.register('todos', TodoMVS)

urlpatterns = [
    # path("", home),
    # path("todolist/", todolist),
    # path("todocreate/", todocreate),
    # path("todoListCreate/", todoListCreate),
    # path("todo-list/", TodoList.as_view()),
    # path("todo-list/", TodoListCreate.as_view()),
    # path("todo-list/", TodoGenListCreate.as_view()),
    # path("todo_detail/<int:pk>/", todo_detail),
    # path("todo_update/<int:pk>/", todo_update),
    # path("todo_delete/<int:pk>/", todo_delete),
    # path("todo_detail/<int:pk>/", todo_detail),
    # path("todo-detail/<int:pk>/", TodoDetail.as_view()),
    # path("todo-detail/<int:pk>/", TodoGenGetUpdateDelete.as_view()),
    path('', include(router.urls))
]
