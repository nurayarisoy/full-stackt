# Django Project Name:
ToDo App

### Nice to have VSCode Extentions:
- Djaneiro - Django Snippets
- Pylance
- SQLite
- and may install DB Browser to your local.

## Create The Project:
- Create a working directory, cd to new directory
- Create virtual environment as a best practice:
```py
pip3 install virtualenv  # pip install virtualenv
python3 -m venv env  # python -m venv env   # for Windows
virtualenv env  # for MAC
```
- Activate scripts:
```bash
.\env\Scripts\activate  # for Windows, you may need to switch powershell
source env/bin/activate  # for MAC
```
- Install django:
```bash
pip install django
```
- See installed packages:
```sh
pip freeze
```
- Create requirement.txt same level with working directory, send your installed packages to this file, requirements file must be up to date:
```py
pip freeze > requirements.txt
```
- Create project:
```py
django-admin startproject todo_proj
```
- Various files has been created!
- Change the name of the project main directory as src to distinguish from subfolder with the same name!
```bash
mv todo_proj src
```
- cd to the src folder. Run the server and check the django installation from browser.
```py
cd src
python manage.py runserver
```

### Securing Secret Key using Decouple (Optional)
- To use python decouple in this project, first install it:
```py
pip install python-decouple
```
- For more information: https://pypi.org/project/python-decouple/
- Add python-decouple to requirements.txt:
```py
pip freeze > requirements.txt
```
- Create .env file. We will collect our variables in this file. Put the secret key here without quotes.
```py
SECRET_KEY = o5o9...
```
- Retrieve the configuration parameters in settings.py:
```py
SECRET_KEY = config('SECRET_KEY')
```
- Import the config object on settings.py file:
```py
from decouple import config
```
- May need to select interpreter with virtual environment. In VSCode CTRL + Shift + P


### Create The App
- Let's create first application:
- Go to the same level with manage.py file:
```bash
cd .\src\
```
- Start app
```py
python manage.py startapp todo
django-admin startapp todo  # for MAC
```
- Go to settings.py and add under INSTALLED_APPS add newly created app:
```py
'todo'  # or better:
'todo.apps.TodoConfig'
```

### Login Admin Site:
- We need to create db, apply some table to database. 
- First we need to migrate before creationg superuser.
- Go to manage.py level directory:
```py
python manage.py migrate
```
- In order to login, we need to create a user who can login to the admin site. Run the following command:
```py
python manage.py createsuperuser
```
- Enter your desired username, email adress, password.
- Run the server:
```py
python manage.py runserver
```
- Go to http://127.0.0.1:8000/admin/ You should see the admin's login screen.
- After you login, you should see a few types of editable content: groups and users. They are provided by django.contrib.auth, the authentication framework shipped by Django.

### Creating Templates
- Create a path under todo folder named "templates/todo".
- Alternatively, if we want to create a base template for project, instead of only one app, need to create another directory under src, name it "templates", and add this path to settings.py TEMPLATES.DIRS:
```py
TEMPLATES = [
    {
        'DIRS': [BASE_DIR, "templates"],  # BASE_DIR points to src folder.
            ],
        },
    },
]
```
- Create base.html file under "src/templates" folder. This will be our html template for the whole project which can be imported by any application.
- Add the base html in this file
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo</title>
</head>
<body>
    
    {% block content %}
        
    {% endblock content %}
        
</body>
</html>
```

### Creating Home View
- Go to views.py in todo directory
- Create first view by adding:
```py
def home(request):
    return render(request, "todo/home.html")
```
- Create home.html under templates/todo.
- We may extend from base.html from proect templates.
```html
{% extends 'base.html' %}
```
- We may add content inside the block.
```html
{% block content %}
    <h1>Todo App</h1>
{% endblock content %}
```

### Adding URL path for home view
- Must adjust URL path, go to urls.py and import "include":
```py
from django.urls import include
```
- Add our new path to urls.py file under todo directory.
```py
path("", include("todo.urls"))
```
- Need to create todo.urls.py
- Add new path to here:
```py
from django.urls import path
from .views import home

urlpatterns = [
    path("", home, name="home")
]
```
- Run our project:
```py
python manage.py runserver
```
- Go to http://localhost:8000 in your browser, and you should see the text “Todo App”, which you defined in the index view.

## Creating Model
- Add models.py under todo app folder Todo class:
```py
class Todo(models.Model):
    title = models.CharField(max_length=200)  # Title for the todo task
    created_date = models.DateTimeField(auto_now_add=True)  # Date will be added auto
    complated = models.BooleanField(default=False)  # When we finished the task, it will be overlined
    
    class Meta:
        ordering = ['-created_date',]  # display the last created on top
    
    def __str__(self):        # Better visualisation on admin site
        return self.title
```
- To execute model changes:
```py
python manage.py makemigrations
```
- To implement changes to db table:
```py
python manage.py migrate
```
- To add our model to admin panel, go to admin.py under todo add:
```py
from .models import Todo

admin.site.register(Todo)  # To see Todo list on admin dashboard
```
- Turn back to admin page and refresh, the Todos table/model will be seen.
- Click Todos and add some tasks here.


### Creating todo_list view
- Our second view will be "todo_list".
- Go to views.py in todo directory
- Import Todo from models.
```py
from .models import Todo
```
- Create todo_list view by adding:
```py
def todo_list(request):
    todos = Todo.objects.all()
    context = {
        'todos': todos
    }
    return render(request, 'todo/todo_list.html', context)
```
- Create todo_list.html under templates/todo.
- We may extend from base.html from proect templates.
```html
{% extends 'base.html' %}
```
- We may add content inside the block.
```html
{% block content %}
<ul>
    {% for todo in todos %}
        <li>{{ todo }}</li>
    {% endfor %}
</ul>        
{% endblock content %}
```

### Adding URL path for todo_list view
- Go to todo/urls.py and add new path:
```py
from django.urls import path
from .views import home, todo_list

urlpatterns = [
    path("", home, name="home"),
    path("list/", todo_list, name="todo-list")
]
```
- Run our project:
```py
python manage.py runserver
```
- Go to http://localhost:8000/list in your browser, and you should see the text “Todo App”, which you defined in the index view. May need to create first todo using the admin dashboard.


### Adding Create View and Creating Forms
- Create forms.py file under todo app.
- Like models, form structure is very similar:
```py
from django import forms
from .models import Todo

class TodoAddForm(forms.ModelForm):
    class Meta:
        model = Todo
        fields = ('title',)  # This is a tuple
```
- After created form, we want to display it, so modify the views.py:
```py
from .forms import TodoAddForm
from django.shortcuts import redirect, render

def todo_create(request):
    form = TodoAddForm()
    if request.method == 'POST':
        form = TodoAddForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('todo-list') 
    context = {
        'form': form
    }
    return render(request, 'todo/todo_create.html', context)
```
- After added todo_create view, we should add path on todo/urls.py:
```py
from django.urls import path
from .views import home, todo_list, todo_create

urlpatterns = [
    path("", home, name="home"),
    path("list/", todo_list, name="todo-list"),
    path("create/", todo_create, name="todo-create"),
]
```
- Create todo_create.html under templates/todo directory:
```html
{% extends 'base.html' %}

{% block content %}

<form action="", method="POST">
    
    <!-- Using post method we must add csrf token. -->
    {% csrf_token %}  
    {{ form }}
    <input type="submit", value="Add">

</form>

{% endblock content %}
```
- Rerun the server, go to /create page and check if it is creating new task, displayed on admin dashboard, and returning to the home page.

### Adding Update Form
- Lets create update form. Go to the forms.py and add update form:
```py
class TodoUpdateForm(forms.ModelForm):
    class Meta:
        model = Todo
        fields = ('title', 'complated',)
        # exclude = ('created_date',)
```
- Add to the views.py
```py
def todo_update(request, id):
    todo = get_object_or_404(Todo, id=id)
    form = TodoUpdateForm(instance=todo)  # fills the form
    if request.method == 'POST':
        form = TodoAddForm(request.POST, instance=todo)
        if form.is_valid():
            form.save()
            return redirect('todo-list')
    context = {
        'form': form
    }
    return render(request, 'todo/todo_update.html', context)
```
- Add todo_update path to urls.py
```py
path('<int:id>/update', todo_update, name='todo-update'),
```
- Create todo_update.html
```html
{% extends 'base.html' %}

{% block content %}

<form action="", method="POST">
    
    {% csrf_token %}
    {{ form.as_p }}
    <input type="submit", value="Update">

</form>

{% endblock content %}
```

### Adding Delete Form
- Lets create delete form. Go to the forms.py and add delete form:
```py
class TodoDeleteForm(forms.ModelForm):
    class Meta:
        model = Todo
        fields = ('title', 'complated',)
```
- Add to the views.py
```py
def todo_delete(request, id):
    todo = get_object_or_404(Todo, id=id)    
    if request.method == 'POST':
        todo.delete()
        return redirect('todo-list')
    context = {
        'todo': todo
    }
    return render(request, 'todo/todo_delete.html', context)
```
- Add todo_delete path to urls.py
```py
path('<int:id>/delete', todo_delete, name='todo-delete'),
```
- Create todo_update.html
```html
{% extends 'base.html' %}

{% block content %}

<form action="", method="POST">
    
    {% csrf_token %}
    {{ todo }}
    <p>Sure to delete?
    <input type="submit", value="Delete">
    </p>
    <a href="{% url 'todo-list' %}"><button>Cancel</button></a>
</form>

{% endblock content %}
```

### Feature-1 Strike a line through completed task (optional)
- Customer wants to see completed task as striked a line through it. To do so, modify the todo-list page, and add an condition if the task is completed show the line between "<del>"
```html
{% extends 'base.html' %}

{% block content %}
<div>
    <h3>Todo List</h3>
<ul>
    {% for todo in todos %}
    
    {% if todo.complated %}
        <del><li>{{ todo }}</li></del>
    {% else %}
        <li>{{ todo }}</li>
    {% endif %}
        
    {% endfor %}
</ul>        
</div>
{% endblock content %}
```

### Feature-2 Add Delete button on Update page
- Add an anchor tag on todo_update.html
```html
<a href="{% url 'todo-delete' todo.id %}"><button>Delete</button></a>
<!-- There is an issue here. Trying to solve. -->
```

### Add link for update to list page for every todo item
- Add an anchor to update on todo_list.html
```html
{% extends 'base.html' %}

{% block content %}
<div>
    <h3>Todo List</h3>
<ul>
    {% for todo in todos %}
    <a href="{% url 'todo-update' todo.id %}">
    {% if todo.complated %}
        <del><li>{{ todo }}</li></del>
    {% else %}
        <li>{{ todo }}</li>
    {% endif %}
    </a>    
    {% endfor %}
</ul>        
</div>
{% endblock content %}
```
### Nice to have 
- Links to change pages