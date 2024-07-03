from flask import Flask
from server.database.generate import start_database

app = Flask(__name__)

try:
    start_database()
except Exception as e:
    print(repr(e))


@app.get("/")
@app.get("/hello")
def hello():
    return "<h1>Hello from ypostirixi server!<h1>"


@app.post("/")


@app.errorhandler(404)
def page_not_found(err) -> str:
    print(err)
    return "Error 404."
