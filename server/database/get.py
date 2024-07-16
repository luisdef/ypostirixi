from config import DB_HOST, DB_NAME, DB_USER, DB_PASSWORD
from sqlalchemy import create_engine, text

def select_user_by_email(email: str):
    result = []
    try:
        engine = create_engine(f'mysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}',
                           echo=True)
        with engine.connect() as conn:
            query = text(f'SELECT * FROM users WHERE email = \'{email}\'')
            result = conn.execute(query).fetchone()
            return {
                'id': result[0],
                'name': result[1],
                'email': result[2],
                'password': result[3],
                'role': result[4]
            }
    except Exception as e:
        print('\nSome error with the database, check connection.\n')
        print(repr(e), '\n')
        return False