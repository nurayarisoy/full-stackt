from .base import *
import os
from decouple import config

env_name = config("ENV_NAME")

print(env_name)

if env_name == "prod":

    from .prod import *

elif env_name == "dev":

    from .dev import *
