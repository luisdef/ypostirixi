from sqlalchemy import text

from server.database.generate import connect_engine

def update_os_by_uuid(
    uuid: str,
    nome: str,
    fone: str,
    email: str,
    setor: str,
    problema: str,
    descricao: str,
    prioridade: str,
    descricaoTec: str,
    status: int
):
    try:
        engine = connect_engine()
        with engine.connect() as conn:
            query = text(
                f"""
                UPDATE `orders` 
                SET `name`='{nome}',
                    `email`='{email}',
                    `phone`='{fone}',
                    `sector`='{setor}',
                    `problem`='{problema}',
                    `description`='{descricao}',
                    `priority`='{prioridade}',
                    `technician_report`='{descricaoTec}',
                    `status`= {status}

                WHERE `uuid`='{uuid}'
                """
            )
            conn.execute(query)
            conn.commit()
    except Exception as e:
        print('\n[While put] Some error with the database, check connection.\n')
        print(repr(e), '\n')
        return False