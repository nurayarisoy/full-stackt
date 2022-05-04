# Django Assignment Name
Pizza App

### Summary of the project
Create a web application allows people order pizza;
  1. Two toppings and size of the pizza can be selected
  1. Size of the pizza can be Medium, Large, and Small
  1. Homepage contains a nice background image
  1. Order of the pizza can be editted
  1. Inform customer after ordering, editting the order etc.
  1. Multiple orders can be made (2-6 pizzas)

### Purpose of the Assignment
This assignment is created for students to learn Django Forms by getting their hands dirty.

### Nice to have VSCode Extentions
- Djaneiro - Django Snippets
- SQLite
- Pylance
- DB Browser on your local.

## Steps of the Assignment

### Create the project
- Create a working directory, cd to new directory, the name of the directory is not important
- Create virtual environment as a best practice
- Activate virtual environment
- Install django
- Create project with the name "nandiasgarden"
- Change the name of the project main directory to distinguish from subfolder with the same name! (optional)
- Go to the same level with manage.py file
- Run the project
- Go to http://localhost:8000 in your browser, and you should see the Django rocket
- Quit the server with CTRL-BREAK or CTRL-C

### Create the app
- Create the application, name it as "pizza"

### Create home page and order page
- We need to have a home page and an ordering page. So start with adding urlpatterns to urls.py
- Add installed app to settings.py
- Create first views in views.py for home and order pages
- Create home.html and order.html templates
- Create templates/pizza recursive directory under pizza
- Create home.html
- Create order.html

### Adding forms:
- Add forms to the project. Create forms.py under "pizza" directory
- Create new class "PizzaForm", return to views.py and modify the order function
- Add "PizzaForm" class form to order.html

### Save the order
- In the views.py, modify order function to distinguish between get and post requests
- Need to modify order.html accordingly

### Create a model to keep order info
- We must save customer input to our database
- Create classes for size of the pizza, toppings, and make some relation to Size and others on models.py
- We want these two newly created class to be shown on admin panel. So, modify the admin.py
- After these modifications, migrate them
- Create a superuser to login admin page
- Run the server and go to admin page
- Create sizes; Small, Medium, Large

### Add widgets to ModelForm
- Add a widget to model form so customer cam't select more than one size on one order!

### Adding From Sets
- Customer wants to order multiple pizzas at once.
- Modify order.html, add multiple form
- Add an url path named 'pizzas'
- Go to the forms.py and create a new class named "MultiplePizzaForm"
- Create a function for the pizza view
- Create pizza.html

### Add Edit Order page
- User may need to edit the order.
- Add a new path to urls.py for editing the order.
- Edit views.py and add a new function for editing the order.
- Modify the order.html so that user can edit the order.
- Customers want to know if they are modified the order or not. So add a note by adding views.py.

### Add an image to the home page 
- Add given nandiasgarden.jpg img to the home.html
- Add static root to settings.py
- Create pizza/static folder and add home image under that folder
- Add loadstatic block to the home page

### Form Rendering (optional)
- Sometimes you may want to change the view of the original form.
- Go to order.html and try as_p option.

### Spicing up forms with CSS (optional)
- Use bootstrap to shine our site.
- Install django-widget-tweaks
- Add widget-tweaks to the installed apps on settings.py
- Go to https://getbootstrap.com/ and click get started button, scroll down and copy starter template.
- Go to order.html, paste starter template at the top, copy existing code to the body.
- Copy and paste our html code in place of "Hello World" inside the body.
- Change meta title to Nandia's Garden
- Add load widget_tweaks to body before former code
- Customize pizzaform and add to a for loop
- Add fields and divs

### Creating a base.html as a template (optional, navbar is given)
- We would like to implement styling to every page. So create a base.html page under templates/pizza. Use bootstrap starter template same as above. Source: https://getbootstrap.com/docs/5.0/getting-started/introduction/

- Add a navbar:
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
- To make it effective for other pages, add "extends" and "block" to them.