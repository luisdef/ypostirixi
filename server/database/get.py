from config import DB_HOST, DB_NAME, DB_USER, DB_PASSWORD
from sqlalchemy import text

from server.database.generate import connect_engine

def select_user_by_email(email: str):
    result = []
    try:
        engine = connect_engine()
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
        print('\n[While select] Some error with the database, check connection.\n')
        print(repr(e), '\n')
        return False


def select_all_oss():
    try:
        engine = connect_engine()
        with engine.connect() as conn:
            query = text(f'select * from orders order by updated_at desc')
            results = conn.execute(query).fetchall()
            
            oss = []
            for res in results:
                os = {
                    "uuid": res[0],
                    "nome": res[1],
                    "email": res[2],
                    "fone": res[3],
                    "setor": res[4],
                    "problema": res[5],
                    "descricao": res[6],
                    "prioridade": res[7],
                    "descricaoTec": str(res[8]) if res[8] else '',
                    "status": res[9],
                    "created_at": res[10].strftime("%Y/%m/%d %H:%m"),
                    "updated_at": res[11].strftime("%Y/%m/%d %H:%m")
                }
                oss.append(os)
            
            return oss
    except Exception as e:
        print('\n[While select] Some error with the database, check connection.\n')
        print(repr(e), '\n')
        return False


def select_os_by_uuid(uuid: str):
    result = []
    try:
        engine = connect_engine()
        with engine.connect() as conn:
            query = text(f'select * from orders where uuid = \'{uuid}\'')
            result = conn.execute(query).fetchone()

            return {
                'uuid': result[0],
                'nome': result[1],
                'email': result[2],
                'fone': result[3],
                'setor': result[4],
                'problema': result[5],
                'descricao': result[6],
                'prioridade': result[7],
                'descricaoTec': str(result[8]) if result[8] else '',
                'status': result[9],
                'created_at': result[10].strftime("%Y/%m/%d %H:%m"),
                'updated_at': result[11].strftime("%Y/%m/%d %H:%m")
            }
    except Exception as e:
        print('\n[While select] Some error with the database, check connection.\n')
        print(repr(e), '\n')
        return False

