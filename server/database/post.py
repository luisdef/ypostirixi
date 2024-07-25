from sqlalchemy import text

from server.database.generate import connect_engine

def insert_new_os(
    nome: str,
    telefone: str,
    email: str,
    setor: str,
    problema: str,
    descricao: str,
    prioridade: str
):
    try:
        engine = connect_engine()
        with engine.connect() as conn:
            query = text(
                f"""
                INSERT INTO `orders`
                (`uuid`, `name`, `email`, `phone`, `sector`, `problem`, `description`, `priority`)
                VALUES 
                (uuid(),'{nome}','{email}','{telefone}','{setor}','{problema}','{descricao}','{prioridade}');
                """
            )
            conn.execute(query)
            conn.commit()
    except Exception as e:
        print('\n[While insert] Some error with the database, check connection.\n')
        print(repr(e), '\n')
        return False