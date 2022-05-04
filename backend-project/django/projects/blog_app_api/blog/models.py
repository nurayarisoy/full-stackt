from django.db import models
from django.contrib.auth.models import User


# class NewManager(models.Manager):

#     def get_queryset(self):
#         return super().get_queryset().filter(status='published')


# class Category(models.Model):
#     name = models.CharField(max_length=50)

#     def __str__(self):
#         return self.name

#     class Meta:
#         verbose_name_plural = "Categories"


class Post(models.Model):
    options = (
        ('d', 'Draft'),
        ('p', 'Published')
    )
    title = models.CharField(max_length=100)
    content = models.TextField()
    image = models.URLField(max_length=5000, blank=True)
    # category = models.ForeignKey(Category, on_delete=models.PROTECT, default=1)
    published_date = models.DateTimeField(auto_now_add=True)
    last_updated = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    status = models.CharField(max_length=10, choices=options, default='draft')
    slug = models.SlugField(blank=True, unique=True)
    # objects = models.Manager()
    # newmanager = NewManager()

    def __str__(self):
        return self.title

    # @property
    # def published(self):
    #     if self.status == 'published':
    #         return True
    #     return False
    @property
    def comments(self):
        return self.comment_set.all()

    @property
    def get_comment_count(self):
        return self.comment_set.count()

    @property
    def get_view_count(self):
        return self.postview_set.count()

    @property
    def get_like_count(self):
        return self.like.count()


class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    time_stamp = models.DateTimeField(auto_now_add=True)
    content = models.TextField()

    def __str__(self):
        return self.user.username


class PostView(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    time_stamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username


class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(
        Post, on_delete=models.CASCADE, related_name="like")

    def __str__(self):
        return self.user.username




