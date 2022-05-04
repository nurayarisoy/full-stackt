# Django Project Name:
Pizza App

### Nice to have VSCode Extentions:
- Djaneiro - Django Snippets
- SQLite
- Pylance
- DB Browser on your local.

### Create the project
- Create a working directory, cd to new directory, the name of the directory is not important.
- Create virtual environment as a best practice:
```py
pip3 install virtualenv  # pip install virtualenv
python3 -m venv env  # python -m venv env   # for Windows
virtualenv env  # for MAC
```
- Activate virtual environment:
```bash
.\env\Scripts\activate  # for Windows, you may need to switch powershell
source env/bin/activate  # for MAC
```
- Install django:
```bash
pip install django
```
- Create project:
```py
django-admin startproject nandiasgarden
```
- Various files has been created!
- Change the name of the project main directory to distinguish from subfolder with the same name!
```bash
mv nandiasgarden nandiasgarden-project
```
- Go to the same level with manage.py file:
```bash
cd nandiasgarden-project
```
- Run our project:
```py
python manage.py runserver
```
- Go to http://localhost:8000 in your browser, and you should see the Django rocket.
- Quit the server with CTRL-BREAK or CTRL-C.

### Create the app
- Lets create our application, name it as "pizza":
```py
python manage.py startapp pizza  # or;
django-admin startapp pizza  # for MAC
```

### Create home page and order page
- We need to have a home page and an ordering page. So we need to start with urls.py to apply for those.
- Add this lines:
```py
from pizza import views  # The templates will be rendered from pizza app views.py

urlpatterns = [
    path('', views.home, name='home'),  # This is for home page
    path('order/', views.order, name='order'),  # This is for ordering page
]
```
- Go to settings.py and add 'pizza.apps.PizzaConfig', under INSTALLED_APPS, don't forget to put comma after.
```py
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'pizza.apps.PizzaConfig',
]
```
- Go to views.py in pizza app and create first views by adding:
```py
def home(request):
    return render(request, 'pizza/home.html')

def order(request):
    return render(request, 'pizza/order.html')
```
- We have already show the views result, now it's time to create home.html and order.html templates.
- Create templates/pizza recursive directory under pizza. Then, create home.html:
```html
<h1>Nadia's Garden</h1>
<a href="{% url 'order' %}">Order a pizza</a>
```
- Create order.html:
```html
<h1>Order a pizza</h1>
```
- Save all and see what is the result from http://localhost:8000/  If you didn't run server again:
```py
python manage.py runserver
```

### Add features to order.html
- Modify order.html, add our own forms, this will help us to understand the magic of Django forms later!
```html
<form>
    <label for="topping1">Topping 1: </label>
    <input id="topping1" type="text" name="topping1">
    <label for="topping2">Topping 2: </label>
    <input id="topping2" type="text" name="topping2">
    <label for="size">Size: </label>
    <select name="size" id="size">
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
    </select>
</form>
```
- Added a simple form for selecting toppings and size. Lets add an order button.
```html
<input type="submit" value="Order Pizza">
```
- When you click "Order Pizza" button some interesting text show up here in the top.
- Add action to form to specify where to send these form.
```html
<form action="{% url 'order' %}" method="GET">
```
- When its a get request the change can be seen on url.
- POST method is more appropiate for us.
```html
<form action="{% url 'order' %}" method="POST">
```
- Enter some selections and click order pizza, and it gives error: CSRF verification failed. Request aborted.
- Get rid of this by adding the firs line of our form:
```html
{% csrf_token %}
```
- Final version of our order.html is:
```html
<h1>Order a pizza</h1>

<!-- <form> -->
<!-- <form action="{% url 'order' %}" method="GET"> -->
<form action="{% url 'order' %}" method="POST">
    {% csrf_token %}
    <label for="topping1">Topping 1: </label>
    <input id="topping1" type="text" name="topping1">

    <label for="topping2">Topping 2: </label>
    <input id="topping2" type="text" name="topping2">

    <label for="size">Size: </label>
    <select name="size" id="size">
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
    </select>

<input type="submit" value="Order Pizza">

</form>
```

### Adding forms:
- There is better and siple way to create order page. Add forms to the project. Create forms.py under pizza dir.
```py
from django import forms

class PizzaForm(forms.Form):
    topping1 = forms.CharField(label='Topping 1', max_length=100)
    topping2 = forms.CharField(label='Topping 2', max_length=100)
    size = forms.ChoiceField(label='Size', choices=[('Small', 'Small'), ('Medium', 'Medium'), ('Large', 'Large')])
```
- Now we have new class PizzaForm, return to views.py and modify the order function.
```py
from .forms import PizzaForm
def order(request):
    form = PizzaForm()
    return render(request, 'pizza/order.html', {'pizzaform':form})
```
- No we don't need manually created labels and selections inside order.html, comment out this part. Just add {{ pizzaform }} to place our PizzaForm class form here:
```html
{{ pizzaform }}
<!-- <label for="topping1">Topping 1: </label>
<input id="topping1" type="text" name="topping1">
<label for="topping2">Topping 2: </label>
<input id="topping2" type="text" name="topping2">
<label for="size">Size: </label>
<select name="sizse" id="size">
    <option value="Small">Small</option>
    <option value="Medium">Medium</option>
    <option value="Large">Large</option>
</select> -->
```
- Result is more clean code!
- The final version of order.html is:
```html
<h1>Order a pizza</h1>
<form action="{% url 'order' %}" method="POST">
    {% csrf_token %}
    {{ pizzaform }}
<input type="submit" value="Order Pizza">
</form>
```

### Capture the order
- In the views.py we can modify order function to distinguish bw get and post requests.
```py
from django.shortcuts import render
from .forms import PizzaForm  # referring to newly created forms.py and our new PizzaForm

def home(request):
    return render(request, 'pizza/home.html')

def order(request):
    if request.method == 'POST':
        filled_form = PizzaForm(request.POST)
        if filled_form.is_valid():
            note = 'Thanks for ordering! Your %s, %s and %s pizza is on its way!' %(filled_form.cleaned_data['size'], 
            filled_form.cleaned_data['topping1'], filled_form.cleaned_data['topping2'],)
            new_form = PizzaForm()
            return render(request, 'pizza/order.html', {'pizzaform':new_form, 'note':note})
    else:
        form = PizzaForm()
        return render(request, 'pizza/order.html', {'pizzaform':form})
```
- Need to modify order.html accordingly, to see the thanks note in the page, add the script below:
```html
<h2>{{ note }}</h2>
```
- The final version of order.html is:
```html
<h1>Order a pizza</h1>
<h2>{{ note }}</h2>
<form action="{% url 'order' %}" method="POST">
    {% csrf_token %}
    {{ pizzaform }}
<input type="submit" value="Order Pizza">
</form>
```

## Need to create a model to keep order info
- We must save customer input to our database. So, first open models.py.
- Create classes for size of the pizza, toppings, and make some relation to Size and others:
```py
class Size(models.Model):
    title = models.CharField(max_length=100)
    
    def __str__(self):
        return self.title  # This is for good visual experimentation!

class Pizza(models.Model):
    topping1 = models.CharField(max_length=100)
    topping2 = models.CharField(max_length=100)
    size = models.ForeignKey(Size, on_delete=models.CASCADE)  # This is for correlation to the Size class
```
- We want these two newly created class to be shown on admin panel. So, modify the admin.py:
```py
from .models import Pizza, Size

admin.site.register(Pizza)
admin.site.register(Size)
```
- After these modifications, need to migrate them!
```py
python manage.py makemigrations
python manage.py migrate
```
- Need a superuser to enter admin page:
```py
python manage.py createsuperuser
```
- Run the server and go to admin page.
- Create sizes; Small, Medium, Large. User can't do that, admin must create the sizes.

### Modify forms according to models
- Since we have new models, lets update forms accordingly, things will be easier. Add model form to forms.py:
```py
from django import forms
from .models import Pizza

# class PizzaForm(forms.Form):
#     topping1 = forms.CharField(label='Topping 1', max_length=100)
#     topping2 = forms.CharField(label='Topping 2', max_length=100)
#     size = forms.ChoiceField(label='Size', choices=[('Small', 'Small'), ('Medium', 'Medium'), ('Large', 'Large')])

class PizzaForm(forms.ModelForm):
    class Meta:
        model = Pizza
        fields = ['topping1', 'topping2', 'size']
```
- Look at the order page and you'll see the exact same page! With very simple code.
- We can add labels to our form to see better text on the page:
```py
labels = {'topping1':'Topping 1', 'topping2':'Topping 2'}
```

### Add widgets to regular form (optional)
- You can do any specific change, dive deep into forms! Use widgets!
- Bring back the first version of the forms:
```py
topping1 = forms.CharField(label='Topping 1', max_length=100, widget=forms.Textarea)
```
- With Textarea we can see a bigger box.
```py
topping1 = forms.CharField(label='Topping 1', max_length=100, widget=forms.PasswordInput)
```
- With PasswordInput the text user typed will be hidden.
- Also we can get rid of toppings and make a multiple choice toppings list can be selected:
```py
# This is the third version:
class PizzaForm(forms.Form):
    # topping1 = forms.CharField(label='Topping 1', max_length=100, widget=forms.PasswordInput)
    # topping2 = forms.CharField(label='Topping 2', max_length=100)
    toppings = forms.MultipleChoiceField(choices=[('pep', 'Pepperoni'), ('cheese', 'Cheese'), ('olives', 'Olives')])
    size = forms.ChoiceField(label='Size', choices=[('Small', 'Small'), ('Medium', 'Medium'), ('Large', 'Large')])
```
- This is cool but user cant select multiple bcoz they cant know Ctrl + click to select. So need to add something extra:
```py
toppings = forms.MultipleChoiceField(choices=[('pep', 'Pepperoni'), ('cheese', 'Cheese'), ('olives', 'Olives')], widget=forms.CheckboxSelectMultiple)
```

### Add widgets to ModelForm
- Widget can be added not only regular form but also can be used with model form:
```py
# This is the fourth version:
class PizzaForm(forms.ModelForm):
    class Meta:
        model = Pizza
        fields = ['topping1', 'topping2', 'size']
        labels = {'topping1':'Topping 1', 'topping2':'Topping 2'}
        widgets = {'topping1':forms.Textarea, 'size':forms.CheckboxSelectMultiple}
```
- With Textarea widget, we can see a bigger box. And select multiple choice size.
```py
from django import forms
from .models import Pizza, Size

# This is the fifth version:
class PizzaForm(forms.ModelForm):
    
    # This is our change, dont wanna empty label, good to see multiple choice check box widget
    size = forms.ModelChoiceField(queryset=Size.objects, empty_label=None, widget=forms.CheckboxSelectMultiple)
    
    class Meta:
        model = Pizza
        fields = ['topping1', 'topping2', 'size']
        labels = {'topping1':'Topping 1', 'topping2':'Topping 2'}
```
- Need modification because dont want customer to select more than one size on one order!
```py
size = forms.ModelChoiceField(queryset=Size.objects, empty_label=None, widget=forms.RadioSelect)
```

### Accept files from user (optional)
- Accepting files from users is possible using forms. Go to order.html, modify form element and add enctype.
- NOTE: When the value of the method attribute is post, enctype is the MIME type of content that is used to submit the form to the server. Possible values are:
    * application/x-www-form-urlencoded: The default value if the attribute is not specified.
    * multipart/form-data: The value used for an <input> element with the type attribute set to "file".
    * text/plain: (HTML5)
This value can be overridden by a form enctype:
```html
<form enctype="multipart/form-data" action="{% url 'order' %}" method="POST">
```
- Need to install pillow to get objects from users.
```py
pip install pillow
```
- Run the server.
- Modify forms.py, replace below code line with size line:
```py
image = forms.ImageField()
```
- Go to the order page and see the image option. But;
- We are not ready to accept files. Need to modify views.py:
```py
filled_form = PizzaForm(request.POST, request.FILES)
```
- We didnt save the files but ready to do that.
- First go back to normal, erase request.FILES from views, and image = forms.ImageField() from forms.py, and enctype="multipart/form-data" from order.html. We turned back to normal.

### Adding From Sets
- Repeat one form again and again with form sets. Customer wants to order multiple pizzas at once.
- Modify order.html, add after the first form element the secong multiple form:
```html
<br><br>

Want more than one pizza?

<form action="{% url 'pizzas' %}", method="GET">
    {{ multiple_form }}
    <input type="submit" value="Get Pizzas">
</form>
```
- Add an url path named 'pizzas':
```py
path('pizzas', views.pizzas, name='pizzas'),
```
- Go to the forms.py and create a new class:
```py
class MultiplePizzaForm(forms.Form):
    number = forms.IntegerField(min_value=2, max_value=6)
```
- Than switch to views.py and import MultiplePizzaForm, then modify the order function with:
```py
multiple_form = MultiplePizzaForm()
return render(request, 'pizza/order.html', {'pizzaform':new_form, 'note':note, 'multiple_form':multiple_form})
return render(request, 'pizza/order.html', {'pizzaform':form, 'multiple_form':multiple_form})
```
- Next step create a function for the pizza view:
```py
from django.forms import formset_factory
def pizzas(request):
    number_of_pizzas = 2
    filled_multiple_pizza_form = MultiplePizzaForm(request.GET)
    if filled_multiple_pizza_form.is_valid():
        number_of_pizzas = filled_multiple_pizza_form.cleaned_data['number']
    PizzaFormSet = formset_factory(PizzaForm, extra=number_of_pizzas)
    formset = PizzaFormSet()
    if request.method == "POST":
        filled_formset = PizzaFormSet(request.POST)
        if(filled_formset.is_valid()):
            for form in filled_formset:
                print(form.cleaned_data['topping1'])
            note = 'Pizzas have been ordered!'
        else:
            note = 'Order was not created, please try again'

        return render(request, 'pizza/pizzas.html', {'note':note, 'formset':formset})
    else:
        return render(request, 'pizza/pizzas.html', {'formset':formset})
```
- Now we need a new template of pizza.html
```html
<h1>Order Pizzas</h1>

<h2>{{ note }}</h2>

<form action="{% url 'pizzas' %}" method="POST">
  {% csrf_token %}
    {{ formset.management_form }}

    {% for form in formset %}
      {{ form }}
      <br><br>
    {% endfor %}
    <input type="submit" value="Order Pizzas" />
  </form>
```
- Now we have a multiple pizza order page. 

### Save the orders to the Database
- Add a small piece of code to views.py. If the order filled form is valid, save this form:
```py
filled_form.save()
```
- Check if its saving the order or not by typing an order and looking to the admin panel.

### Add order edit
- User may need to edit the order.
- Go to the urls.py and add a new path for editing the order:
```py
path('order/<int:pk>', views.edit_order, name='edit_order'),
```
- Time to edit views.py and add a new function for editing the order.
```py
from .models import Pizza

# If someone order a pizza, lets save it to a variable.
created_pizza = filled_form.save()
created_pizza_pk = created_pizza.id

return render(request, 'pizza/order.html', {'created_pizza_pk':created_pizza_pk, 'pizzaform':new_form, 'note':note, 'multiple_form':multiple_form})

# Define a new function for editting the order:
def edit_order(request, pk):
    pizza = Pizza.objects.get(pk=pk)
    form = PizzaForm(instance=pizza)
    if request.method == 'POST':
        filled_form = PizzaForm(request.POST,instance=pizza)
        if filled_form.is_valid():
            filled_form.save()
            form = filled_form
    return render(request, 'pizza/edit_order.html', {'pizzaform':form,'pizza':pizza})
```
- Now lets modify the order.html so that user can edit the order:
```html
<h2>{{ note }}</h2>
    {% if created_pizza_pk %}
    <h2><a href="{% url 'edit_order' created_pizza_pk %}">Edit Your Order</a></h2>
    {% endif %}
```
- And create edit_order.html:
```html
<h1>Edit Order</h1>

<h2>{{ note }}</h2>

<form action="{% url 'edit_order' pizza.id %}" method="post">
    {% csrf_token %}
    {{ pizzaform }}
    <input type="submit" value="Edit Order">
</form>
```
- Customers want to know if they are modified the order or not. So add a note by adding views.py:
```py
note = 'Order has been updated.'
return render(request, 'pizza/edit_order.html', {'note':note, 'pizzaform':form,'pizza':pizza})
```

## Local validation (optional)
- Create an email and url validation. Go to forms.py and add:
```py
email = forms.EmailField()
url = forms.URLField()
```
- Customer need to enter valid email or url. If you dont wanna local validation to to order.html and add to form:
```html
<form action="{% url 'order' %}" method="POST" novalidate>
```
- Novalidate boolean attribute indicates that the form is not to be validated when submitted. If this attribute is not specified (and therefore the form is validated), this default setting can be overridden by a form novalidate attribute on a \<button> or \<input> element belonging to the form.

### Server side errors
- If the customer make a post request and this is not valid there must be some feedback:
```py
    # new_form = PizzaForm()
    filled_form = PizzaForm()
    # return render(request, 'pizza/order.html', {'created_pizza_pk':created_pizza_pk, 'pizzaform':new_form, 'note':note, 'multiple_form':multiple_form})
        else:
            created_pizza_pk = None
            note = 'Pizza order failded, try again!'
        return render(request, 'pizza/order.html', {'created_pizza_pk':created_pizza_pk, 'pizzaform':filled_form, 'note':note, 'multiple_form':multiple_form})
```
- Too see that, we must set novalidate on order.html:
```html
<form action="{% url 'order' %}" method="POST" novalidate>
```
- Now you may enter empty or above 100 char data to the fields, and see the results.

### Form Rendering (optional)
- Sometimes you may want to change the view of the original form.
- Go to order.html and add:
```html
{{ pizzaform.as_p }}
```
- as_p makes it paragraph looking.
- try as_table:
```html
<table>{{ pizzaform.as_table }}</table>
```
- or try as_ul:
```html
<ul>{{ pizzaform.as_ul }}</ul>
```
- Now lets turn back to normal and continue the project.

### Customizing Forms (optional)
- You can customize field by field, for example lets modify topping1 on order.html:
```html
{{ pizzaform.topping1.label_tag }}
{{ pizzaform.topping1 }}
{{ pizzaform.topping1.errors }}
{{ pizzaform.topping2.label_tag }}
{{ pizzaform.topping2 }}
{{ pizzaform.topping2.errors }}
<label for="{{ pizzaform.size.id_for_label }}">Size:</label>
{{ pizzaform.size }}
{{ pizzaform.size.errors }}
```
- This shows we can customize the forms. Lets go back to normal and keep things simple.

### Spicing up forms with CSS (optional)
- Use bootstrap to shine our site.
- Need to install someting, turn back to terminal, stop server and instal:
```py
pip install django-widget-tweaks
python manage.py runserver
```
- Add widget-tweaks to the installed apps on settings.py
- Go to https://getbootstrap.com/ and click get started button, scroll down and copy starter template.
- Go to order.html, paste starter template at the top, copy existing code to the body.
- Our order.html before this operation:
```html
<h1>Order a pizza</h1>

<h2>{{ note }}</h2>
{% if created_pizza_pk %}
    <h2><a href="{% url 'edit_order' created_pizza_pk %}">Edit Your Order</a></h2>
{% endif %}

<!-- <form action="{% url 'order' %}" method="POST"> -->
<!-- <form enctype="multipart/form-data" action="{% url 'order' %}" method="POST"> -->

<form action="{% url 'order' %}" method="POST">
<!-- <form action="{% url 'order' %}" method="POST" novalidate> -->

    {% csrf_token %}

    {{ pizzaform }}
    <!-- {{ pizzaform.as_p }} -->
    <!-- <table>{{ pizzaform.as_table }}</table> -->
    <!-- <ul>{{ pizzaform.as_ul }}</ul> -->

<input type="submit" value="Order Pizza">

</form>

<br><br>

Want more than one pizza?

<form action="{% url 'pizzas' %}", method="GET">
    {{ multiple_form }}
    <input type="submit" value="Get Pizzas">
</form>
```
- Copy and paste our former html code in place of Hello World inside the body.
- Change meta title to Nandia's Garden
- Add to body before former code:
```html
{% load widget_tweaks %}
```
- Customize pizzaform and add to a for loop
- Add fields and divs
- Final code will be:
```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">

    <title>Nandia's Garden</title>
  </head>
  <body>

    {% load widget_tweaks %}

<div class="container">

    <h1>Order a pizza</h1>

<h2>{{ note }}</h2>
{% if created_pizza_pk %}
    <h2><a href="{% url 'edit_order' created_pizza_pk %}">Edit Your Order</a></h2>
{% endif %}

<!-- <form action="{% url 'order' %}" method="POST"> -->
<!-- <form enctype="multipart/form-data" action="{% url 'order' %}" method="POST"> -->

<form action="{% url 'order' %}" method="POST">
<!-- <form action="{% url 'order' %}" method="POST" novalidate> -->

    {% csrf_token %}

    {% for field in pizzaform %}
    <div class="form-group">
        {{ field.errors }}
        {{ field.label_tag }}
        {% render_field field class="form-control" %}
    </div>
    {% endfor %}
    
    <!-- {{ pizzaform }} -->
    <!-- {{ pizzaform.as_p }} -->
    <!-- <table>{{ pizzaform.as_table }}</table> -->
    <!-- <ul>{{ pizzaform.as_ul }}</ul> -->

<input type="submit" value="Order Pizza">

</form>

<br><br>

Want more than one pizza?

<form action="{% url 'pizzas' %}", method="GET">
    {{ multiple_form }}
    <input type="submit" value="Get Pizzas">
</form>
</div>
    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
    -->
  </body>
</html>
```
- Run the server and see the changes.
- Its also looks good for the mobile.

### Creating a base.html as a template (optional)
- We would like to implement styling to every page. So lets create a base.html page under templates/pizza.
```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">

    <title>Nandia's Garden</title>
  </head>
  <body>

    {% block 'body' %}
    {% endblock %}

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
    -->
  </body>
</html>
```
- Simply we copied the framework and paste here, added body block, and added navbar
```html
<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #238a44">
  <div class="container">
    <a class="navbar-brand" href="{% url 'home' %}">Nandia's Garden</a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="{% url 'order' %}">Order Pizza</a>
        </li>
      </ul>
    </div>
  </div>
</nav> 
```
- To make it effective for other pages, add each of them:
{% extends 'pizza/base.html' %}
{% block 'body' %}
- to the top and:
{% endblock %}
to the bottom

### Add an image to the home page
- Add home page:
```html
<div class="text-center">
    <img src="" class="img-fluid" alt="Nandia's Garden">
</div>
```
- Add static root:
```py
STATIC_ROOT = BASE_DIR / 'static'
```
- Create pizza/static folder and add home image under that folder.
```py
python manage.py collectstatic
```
- Add loadstatic block to the home page.
- Final code for home page.
```html
{% extends 'pizza/base.html' %}
{% block 'body' %}

{% load static %}

<div class="text-center">
    <img src="{% static 'nandiasgarden.jpg' %}" class="img-fluid" alt="Nandia's Garden">
</div>

{% endblock %}
```
- Rerun the server.
- Continue to add the base template block to every page of our website!
- Add div containers to order page also.
