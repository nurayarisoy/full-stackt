from django.contrib import admin
from .models import Post, PostView, Like, Comment


class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'status', 'author')
    search_fields = ('title',)
    list_display_links = ('title', 'author')
    # prepopulated_fields = {
    #     "slug": ("title",),
    # }


class CommentAdmin(admin.ModelAdmin):
    list_display = ('user', 'time_stamp')


admin.site.register(Post, PostAdmin)
# admin.site.register(Category)
admin.site.register(PostView)
admin.site.register(Like)
admin.site.register(Comment, CommentAdmin)

# Register your models here.
