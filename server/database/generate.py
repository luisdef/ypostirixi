from config import DB_HOST, DB_NAME, DB_USER, DB_PASSWORD
from sqlalchemy import create_engine, text, Engine
import json

def connect_engine() -> Engine | None:
    try:
        return create_engine(f'mysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}',
                             echo=True)
    except Exception as e:
        print(repr(e))
        return None


def start_database() -> bool:
    engine = connect_engine()
    if engine != None:
        try:
            with engine.connect() as conn:
                with open("./server/database/create_database.sql") as script_sql:
                    query = text(script_sql.read())
                    conn.execute(query)
            with engine.connect() as conn:
                query = text('SELECT * FROM users')
                result = conn.execute(query)
                list = []
            for item in result:
                list.append(item)

            if len(list) > 0:
                print('\n-> Database OK\n')
                return True
            else:
                print('\n-> Database hasn\'t retrieved users.\n')
                return False
        except Exception as e:
            print('\nSome error with the database, check connection.\n')
            return False
    else:
        return False


def get_sectors():
    engine = connect_engine()
    try:
        with engine.connect() as conn:
            query = text('SELECT * FROM sectors')
            result = conn.execute(query)
            list = []
            for item in result:
                d = {"id": item[0], "name": item[1]}
                list.append(d)
            return json.dumps(list)
    except Exception as e:
        return json.dump({"error": "Database connection error."})


def get_priorities():
    engine = connect_engine()
    try:
        with engine.connect() as conn:
            query = text('SELECT * FROM priority')
            result = conn.execute(query)
            list = []
            for item in result:
                d = {"id": item[0], "name": item[1]}
                list.append(d)
            return json.dumps(list)
    except Exception as e:
        return json.dump({"error": "Database connection error."})