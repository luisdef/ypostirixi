from config import DB_HOST, DB_NAME, DB_USER, DB_PASSWORD
from sqlalchemy import create_engine

engine = create_engine(f'mysql+mysqlconnector://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}')

connection = engine.connect()

list_of_users = connection.execute("SELECT * FROM users")
