from flask import Flask
from flask import request

app = Flask(__name__)

@app.route("/")
def hello_world() -> None:
    return f"""
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>ypostirixi Server</title>
        </head>
        <body>
            <h1 style='font-family:sans-serif'>
                Olá mundo!
            </h1>
            <p style='font-family:sans-serif'>
                Rota padrão ativada.
                Mensagem enviada do servidor do <i>Flask</i> 
                (<a href='{request.base_url}'>{request.base_url}</a>).
                Para usar essa aplicação utilize os respectivos
                <i>end-points</i>.
            </p>
        </body>
        </html>
    """


@app.errorhandler(404)
def page_not_found(err):
    print(err)
    return f"""
        <p style='font-family:sans-serif'>
            Página não encontrada. <a href='http://{request.host}'>Home</a>.
        </p>
    """
