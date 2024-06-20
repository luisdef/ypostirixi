from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world() -> None:
    return "<p>Hello, World!</p>"