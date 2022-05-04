from django.db import models

# Create your models here.


class Todo(models.Model):
    task = models.CharField(max_length=50)
    description = models.TextField(blank=True)
    TITLE = {
        ("H", "High"),
        ("M", "Medium"),
        ("L", "Low"),
    }
    priority = models.CharField(max_length=50, choices=TITLE)
    done = models.BooleanField(default=False)

    updatedDate = models.DateTimeField(auto_now=True)
    createdDate = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.task
