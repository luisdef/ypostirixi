from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
import bcrypt

from server.database.generate import start_database
from server.database.get import select_user_by_email

from config import JWT_SECRET


app = Flask(__name__)
CORS(app)

app.config['JWT_SECRET_KEY'] = JWT_SECRET
jwt = JWTManager(app)

try:
    start_database()
except Exception as e:
    print(repr(e))


@app.get("/")
@app.get("/hello")
def hello():
    return "<h1>Hello from ypostirixi server!<h1>"


@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    user = select_user_by_email(email=email)

    if user and bcrypt.checkpw(password.encode('utf-8'), user['password'].encode('utf-8')):
        access_token = create_access_token(identity={'email': email, 'role': user['role']})
        print('Sucessfully authenticated')
        return jsonify(access_token=access_token), 200
    else:
        return jsonify({"msg": "Invalid credentials"}), 401


@app.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    identity = get_jwt_identity()
    return jsonify(logged_in_as=identity), 200


@app.errorhandler(404)
def page_not_found(err) -> str:
    print(err)
    return "Error 404."
