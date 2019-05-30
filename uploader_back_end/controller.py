from flask import Flask, render_template, request, url_for, flash, redirect, jsonify
from config.default import *
from utils import validate
from utils.search import search
from werkzeug.utils import secure_filename
import json
app = Flask(__name__)
app.secret_key =SECRET_KEY
app.config['UPLOAD_FOLDER'] = UPLOAD_DIR


@app.route('/')
def index_upload():
    return render_template('index.html')

@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if request.method=='POST':
        file = request.files['file']
        if file and validate.check_file(file.filename):
            file_name = secure_filename(file.filename)
            path=os.path.join(app.config['UPLOAD_FOLDER'], file_name)
            file.save(path)
            return jsonify({"msg":"File Uploaded!!!"}), 200
        else:
            return jsonify({"msg":"Upload Failed!!! check file type (only csv file types are supported)"}), 500
    return 

@app.route('/search', methods=['GET', 'POST'])
def search_key():
    if request.method == 'GET':
        key=request.args.get('key_txt')
        if key:
            result=search(key)
            if result:
                return jsonify({"result":result}), 200
            else:
                return
    return


if __name__ =='__main__':
    app.run(HOST,PORT)
