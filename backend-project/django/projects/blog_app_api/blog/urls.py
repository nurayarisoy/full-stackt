from django.urls import path
from .views import PostList, PostCreateApi, PostDetail, PostUpdate, PostDelete, CreateCommentAPI, CreateLikeAPI
# UserPostList

urlpatterns = [
    path("list/", PostList.as_view(), name="list"),
    # path("postlist/", UserPostList.as_view(), name="user-list"),
    # path("create/", post_create_api, name="create"),
    path("create/", PostCreateApi.as_view(), name="create"),
    # path("<str:slug>/", post_detail_api, name="detail"),
    path("<str:slug>/", PostDetail.as_view(), name="detail"),
    # path("update/<str:slug>/", post_update, name="update"),
    path("update/<str:slug>/", PostUpdate.as_view(), name="update"),
    # path("delete/<str:slug>/", delete_post, name="delete"),
    path("delete/<str:slug>/", PostDelete.as_view(), name="delete"),
    # path("comment/<str:slug>/", comment_create, name="comment"),
    path("comment/<str:slug>/", CreateCommentAPI.as_view(), name="comment"),
    # path("like/<str:slug>/", create_like, name="like"),
    path("like/<str:slug>/", CreateLikeAPI.as_view(), name="like"),
]