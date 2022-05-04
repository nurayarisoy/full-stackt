from django.db import models

# Create your models here.
class Todo(models.Model):
    title = models.CharField(max_length=200)  # Title for the todo task
    created_date = models.DateTimeField(auto_now_add=True)  # Date will be added auto
    completed = models.BooleanField(default=False)  # When we finished the task, it will be overlined
    
    class Meta:
        ordering = ['-created_date']  # display the last created on top
    
    def __str__(self):        # Better visualisation on admin site
        return self.title