from sqlalchemy import text

from server.database.generate import connect_engine

def delete_os_by_uuid(
    uuid: str
):
    try:
        engine = connect_engine()
        with engine.connect() as conn:
            query = text(
                f"""DELETE FROM `orders` WHERE `uuid` = '{uuid}'""")
            conn.execute(query)
            conn.commit()
    except Exception as e:
        print('\n[While delete] Some error with the database, check connection.\n')
        print(repr(e), '\n')
        return False