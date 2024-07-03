from config import DB_HOST, DB_NAME, DB_USER, DB_PASSWORD
from sqlalchemy import create_engine, text


def start_database() -> bool:
    result = []
    try:
        engine = create_engine(f'mysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}',
                           echo=True)
        with engine.connect() as conn:
            with open("./server/database/create_database.sql") as script_sql:
                query = text(script_sql.read())
                conn.execute(query)
        with engine.connect() as conn:
            query = text('SELECT * FROM users')
            result = conn.execute(query)
    except Exception as e:
        print('\nSome error with the database, check connection.\n')
        print(repr(e), '\n')
        return False
    
    list = []
    for item in result:
        list.append(item)

    if len(list) > 0:
        print('\n-> Database OK\n')
        return True
    else:
        print('\n-> Database hasn\'t retrieved users.\n')
        return False
