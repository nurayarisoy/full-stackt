from distutils.command.upload import upload
from django.db import models

# Create your models here.

class Student(models.Model):
    YEAR_IN_SCHOOL_CHOICES = [
    ('FR', 'Freshman'),
    ('SO', 'Sophomore'),
    ('JR', 'Junior'),
    ('SR', 'Senior'),
    ('GR', 'Graduate'),
]
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    number = models.IntegerField()
    about_me = models.TextField(blank=True, null=True)
    avatar = models.ImageField(blank=True, upload_to='media/')
    register_date = models.DateTimeField(auto_now_add=True)
    last_updated_date= models.DateTimeField(auto_now=True)
    year_in_school = models.CharField(max_length=2, choices=YEAR_IN_SCHOOL_CHOICES, default="FR")
    
    
    def __str__(self):
        return f"{self.first_name} - {self.last_name}"

    class Meta:
        ordering = ["number"]
        verbose_name_plural = "Student_List"
        db_table = "Student_Table" 
        
    