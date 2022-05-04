# Python Anywhere Deployment

This class note explains briefly how to deploy your project to pythonanywhere platform.

## Setup the environment

First we need to prepare our environment. Skip first steps if you already have an account.

- Open [link](https://www.pythonanywhere.com/)
- Sign up
- Create a beginner (free) account
- Confirm your e-mail
- Create a bash console on "New Console" section
- Clone one of your github django project (a working one :) !)
- If your repo is private, you need to enter username and password
- cd into the project folder
- You are ready to go!

## Spin up the project

Now it is time to spin up our cloned project:

```py
# Create virtual env:
python3 -m venv env
# Activate env:
source env/bin/activate
# Install dependencies:
pip install -r requirements.txt
```

- Add .env file (if it is needed) to your project folder, add lines like SECRET_KEY into .env file.

## Add app to Dashboard
- Return dashboard
- Click web
- Add a new web app
- Click next on domain name
- Click manual config
- Select Python 3.9
- Click next on config
- Return to the console

## Connect project
- Get source code and working dir and change on dashboard:
  - pwd on manage.py level and copy path
  - Paste the path to "source code" section on dashboard
  - Do the same for "working directory"
- WSGI configuration
  - Click wsgi config
  - Uncomment django section, do not uncomment comment lines, the code will be like:

```py
import os
import sys

# assuming your django settings file is at '/home/StefanoRafeDjango/mysite/mysite/settings.py'
# and your manage.py is is at '/home/StefanoRafeDjango/mysite/manage.py'
path = '/home/StefanoRafeDjango/weatherAPI-Django-Project'
if path not in sys.path:
    sys.path.append(path)

os.environ['DJANGO_SETTINGS_MODULE'] = 'weather.settings'

# then:
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
```
  - You can erase all the rest if you want
  - Change path line on above wsgi settings, with the same as "source code"
  - Find folder name consisting settings.py file, this is your proj folder name
  - Change proj folder name on the "os.environ" line, above it is "weather"

- Virtual env configuration:
  - Find path of venv 
  - Change virtual env name on dashboard

- Save the changes on the dashboard

## Reload
- Add your domain name to "allowed hosts" line in "settings.py", it is like "stefanorafedjango.pythonanywhere.com"
- Change DEBUG to False in "settings.py". We don't want anyone see our debug info anymore, because now we are open to world!
- Reload on dashboard and open link again

Happy Coding!