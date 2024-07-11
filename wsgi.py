from flask import Flask
from server.database.generate import start_database, get_sectors, get_priorities

app = Flask(__name__)

try:
    start_database()
except Exception as e:
    print(repr(e))


@app.get("/")
@app.get("/hello")
def hello():
    return "<h1>Hello from ypostirixi server!<h1>"


@app.get("/sectors")
def sectors():
    return get_sectors()


@app.get("/priorities")
def priorities():
    return get_priorities()


@app.errorhandler(404)
def page_not_found(err) -> str:
    print(err)
    return "Error 404."
