from django import forms
from .models import Student


# class StudentForm(forms.Form):
#     first_name = forms.CharField(max_length=50)
#     last_name = forms.CharField(max_length=50)
#     number = forms.IntegerField(required=False)
#     profile_image = forms.ImageField(required=False)


class StudentForm(forms.ModelForm):
    first_name = forms.CharField(max_length=30, error_messages={
                                 'required': 'Please, enter your first name.'})

    class Meta:
        model = Student
        fields = ["first_name", "last_name", "number", "profile_pic"]
        # exclude = ['first_name']
        labels = {"last_name": "SirName"}
