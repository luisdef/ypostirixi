from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
import bcrypt
import json

from server.database.generate import start_database
from server.database.get import select_user_by_email, select_all_oss, select_os_by_uuid
from server.database.post import insert_new_os
from server.database.put import update_os_by_uuid
from server.database.delete import delete_os_by_uuid

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


@app.route('/all', methods=['GET'])
def all():
    return json.dumps(select_all_oss())


@app.route('/os', methods=['GET'])
def get_os_by_uuid():
    if len(request.args.get('uuid')) == 36:
        return json.dumps(select_os_by_uuid(request.args.get('uuid')))
    else: return jsonify({"msg": "Not a valid uuid"}), 400

@app.route('/new', methods=['POST'])
def new_os():
    data = request.json
    
    nome = data.get('nome')
    fone = data.get('fone')
    email = data.get('email')
    setor = data.get('setor')
    problema = data.get('problema')
    descricao = data.get('descricao')
    prioridade = data.get('prioridade')
    
    try:
        insert_new_os(
            nome,fone,email,setor,problema,descricao,prioridade
        )
        return jsonify({"msg": "Successfully inserted new OS"}), 201
    except Exception as e:
        print(e)
        return jsonify({"msg": "Error while saving"}), 500


@app.route('/update', methods=['PUT'])
@jwt_required()
def update_os():
    identity = get_jwt_identity()
    
    if len(request.args.get('uuid')) == 36:
        data = request.json
        try:
            update_os_by_uuid(
                request.args.get('uuid'),
                nome=data.get('nome'),
                fone=data.get('fone'),
                email=data.get('email'),
                setor=data.get('setor'),
                problema=data.get('problema'),
                descricao=data.get('descricao'),
                prioridade=data.get('prioridade'),
                descricaoTec=data.get('descricaoTec'),
                status=data.get('status')
            )
            return jsonify({"msg": "Updated"}), 200
        except Exception as e:
            print(e)
            return jsonify({"msg": "Error while updating"}), 500
    return jsonify({ "msg": "Error in uuid informed"}), 500


@app.route('/delete', methods=['DELETE'])
@jwt_required()
def delete_os():
    identity = get_jwt_identity()
    
    if len(request.args.get('uuid')) == 36:
        try:
            delete_os_by_uuid(request.args.get('uuid'))
            return jsonify({"msg": "Deleted"}), 202
        except Exception as e:
            print(e)
            return jsonify({"msg": "Error while updating"}), 500
    return jsonify({ "msg": "Error in uuid informed"}), 500


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
    return "Error 404.", 404


if __name__ == '__main__':  
   app.run()
