from django import forms
from .models import Contact

class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = "__all__"
        widgets = {
            "name": forms.TextInput(attrs={'placeholder':'Name'}),
            "phone_number": forms.TextInput(attrs={'placeholder':'Phone_number'}),
            "email": forms.TextInput(attrs={'placeholder':'Email'}),
            "message": forms.TextInput(attrs={'placeholder':'Message'}),
        }
        
        
        
        
