from django.shortcuts import get_object_or_404
from blog.models import Post, Like, PostView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import LikeSerializer, PostCreateUpdateSerializer, PostListSerializer, PostDetailSerializer, CommentCreateSerializer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from .permissions import IsOwner
from .pagination import PostPageNumberPagination





""" @api_view(["GET"])
def post_list_api(request):
    if request.method == "GET":
        students = Post.objects.all()
        serializer = PostListSerializer(students, many=True)
        return Response(serializer.data)
 """

class PostList(generics.ListAPIView):

    permission_classes = [AllowAny]
    pagination_class = PostPageNumberPagination
    serializer_class = PostListSerializer
    queryset = Post.objects.filter(status="p")


""" class UserPostList(generics.ListAPIView):
    serializer_class = PostListSerializer
    pagination_class = PostPageNumberPagination
    permission_classes = [IsAuthenticated, IsOwner]
    # queryset = Post.objects.filter(author=request.user)

    def get_queryset(self):
        queryset = Post.objects.filter(author=self.request.user)
        return queryset
 """

""" @api_view(["POST"])
def post_create_api(request):

    if request.method == "POST":
        serializer = PostCreateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(author=request.user)
            data = {
                'message': 'Post created.'
            }
            return Response(data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) """

class PostCreateApi(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Post.objects.all()
    serializer_class = PostCreateUpdateSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


""" @api_view(["GET"])
def post_detail_api(request, slug):
    post = get_object_or_404(Post, slug=slug)
    serializer = PostDetailSerializer(post)
    return Response(serializer.data) """

class PostDetail(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Post.objects.all()
    serializer_class = PostDetailSerializer
    lookup_field = "slug"

    def get_object(self):
        obj = super().get_object()
        PostView.objects.get_or_create(user=self.request.user, post=obj)
        return obj

""" @api_view(["PUT"])
def post_update(request, slug):
    post = get_object_or_404(Post, slug=slug)
    if request.method == "PUT":
        serializer = PostCreateUpdateSerializer(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            data = {
                "messages": "Post updated succesfully!"
            }
            return Response(data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) """


class PostUpdate(generics.RetrieveUpdateAPIView):
    # permission_classes = [IsAuthenticated, IsOwner]
    queryset = Post.objects.all()
    serializer_class = PostCreateUpdateSerializer
    lookup_field = "slug"

    def perform_update(self, serializer):
        serializer.save(user=self.request.user)

    # def partial_update(self, request, *args, **kwargs):
    #     kwargs['partial'] = True
    #     return self.partial_update(request, *args, **kwargs)

    # def create(self, request, *args, **kwargs):
    #     response = super().create(request, *args, **kwargs)
    #     response.data = {'messages': "Post updated Succesfully!"}
    #     return response


""" @api_view(["DELETE"])
def delete_post(request, slug):
    post = get_object_or_404(Post, slug=slug)
    if request.method == "DELETE":
        post.delete()
        data = {
            "messages": "Post deleted succesfully!"
        }
        return Response(data)
    return Response(status=status.HTTP_204_NO_CONTENT) """


class PostDelete(generics.DestroyAPIView):
    # permission_classes = [IsAuthenticated, IsOwner]
    queryset = Post.objects.all()
    serializer_class = PostDetailSerializer
    lookup_field = "slug"


""" @api_view(["POST"])
def comment_create(request, slug):
    if request.method == "POST":
        post = get_object_or_404(Post, slug=slug)
        serializer = CommentCreateSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user, post=post)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) """


class CreateCommentAPI(APIView):
    """
    post:
        Create a comment instnace. Returns created comment data
        parameters: [slug, body]
    """
    permission_classes = [IsAuthenticated]
    serializer_class = CommentCreateSerializer
    # permission_classes = [IsAuthenticated]

    def post(self, request, slug):
        post = get_object_or_404(Post, slug=slug)
        serializer = CommentCreateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user, post=post)
            return Response(serializer.data, status=200)
        else:
            return Response({"errors": serializer.errors}, status=400)


""" @api_view(["POST"])
def create_like(request, slug):
    if request.method == "POST":
        obj = get_object_or_404(Post, slug=slug)
        like_qs = Like.objects.filter(user=request.user, post=obj)
        if like_qs.exists():
            like_qs[0].delete()
        else:
            Like.objects.create(user=request.user, post=obj)

        data = {
            "messages": "like"
        }
        return Response(data) """


class CreateLikeAPI(APIView):

    # serializer_class = CommentCreateSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request, slug):
        obj = get_object_or_404(Post, slug=slug)
        like_qs = Like.objects.filter(user=request.user, post=obj)
        if like_qs.exists():
            like_qs[0].delete()
        else:
            Like.objects.create(user=request.user, post=obj)

        data = {
            "messages": "like"
        }
        return Response(data)
