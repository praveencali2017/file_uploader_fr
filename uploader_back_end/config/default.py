"""
App defaults
"""
import os

"""
Paths
"""
ROOT_DIR=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
UPLOAD_DIR=os.path.join(ROOT_DIR,'static','uploads')

"""
Server and Database Configuration
"""
HOST='0.0.0.0'
PORT=8000
DEBUG=True
DB_HOST = "sqlite:///words_bag.db"

"""
App Secret Key
"""
SECRET_KEY ='testing123'

"""
Create upload folder at start
"""

if not os.path.exists(UPLOAD_DIR):
    os.makedirs(UPLOAD_DIR)