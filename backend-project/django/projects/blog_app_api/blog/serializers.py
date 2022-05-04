from django.db.models import fields
from django.http import request
from rest_framework import serializers
# from users.models import Profile
from blog.models import Post, Comment, Like
from django.db.models import Q


class CommentSeializer(serializers.ModelSerializer):
    # status = serializers.ChoiceField(choices=Post.options)
    user = serializers.StringRelatedField()
    post = serializers.StringRelatedField()

    class Meta:
        model = Comment
        fields = (
            'id',
            'user',
            'post',
            'time_stamp',
            'content',
        )


class CommentCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ("content",)


""" class LikeSerializer(serializers.ModelSerializer):
    liked = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Like
        fields = [
            "liked"
        ]

    def get_liked(self, obj):
        request = self.context['request']
        if request.user.is_authenticated:
            if Like.objects.filter(user=request.user).exists():
                return True
            return False """


class PostDetailSerializer(serializers.ModelSerializer):
    status = serializers.ChoiceField(choices=Post.options)
    author = serializers.SerializerMethodField()
    has_liked = serializers.SerializerMethodField()
    comments = CommentSeializer(many=True)
    # like = LikeSerializer(many=True)
    owner = serializers.SerializerMethodField(read_only=True)
    update_url = serializers.HyperlinkedIdentityField(
        view_name='update',
        lookup_field='slug'
    )
    like_url = serializers.HyperlinkedIdentityField(
        view_name='like',
        lookup_field='slug'
    )
    delete_url = serializers.HyperlinkedIdentityField(
        view_name='delete',
        lookup_field='slug'
    )
    comment_url = serializers.HyperlinkedIdentityField(
        view_name='comment',
        lookup_field='slug'
    )

    class Meta:
        model = Post
        fields = (
            'like_url',
            'update_url',
            'delete_url',
            'comment_url',
            'id',
            'title',
            'content',
            'image',
            'status',
            'published_date',
            'last_updated',
            'author',
            'comments',
            'slug',
            'get_comment_count',
            'get_view_count',
            'get_like_count',
            'owner',       # boolean
            "has_liked"    # boolean
        )

    def get_author(self, obj):
        return obj.author.username

    def get_owner(self, obj):
        request = self.context['request']
        if request.user.is_authenticated:
            if obj.author == request.user:
                return True
            return False

    def get_has_liked(self, obj):
        request = self.context['request']
        if request.user.is_authenticated:
            if Post.objects.filter(Q(like__user=request.user) & Q(like__post=obj)).exists():
                return True
            return False


class PostListSerializer(serializers.ModelSerializer):
    author = serializers.SerializerMethodField()
    detail_url = serializers.HyperlinkedIdentityField(
        view_name='detail',
        lookup_field='slug'
    )

    class Meta:
        model = Post
        fields = (
            'detail_url',
            'title',
            'content',
            'image',
            'status',
            'published_date',
            'author',
            'slug',
            'get_comment_count',
            'get_view_count',
            'get_like_count'
        )

    def get_author(self, obj):
        return obj.author.username


class PostCreateUpdateSerializer(serializers.ModelSerializer):
    # status = serializers.ChoiceField(choices=Post.options)
    owner = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Post
        fields = (
            'id',
            'title',
            'content',
            'image',
            'status',
            'owner',
        )

    def get_owner(self, obj):
        request = self.context['request']
        if request.user.is_authenticated:
            if obj.author == request.user:
                return True
            return False
    

class LikeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Like
        fields = [
            "user",
            "post"
        ]
