from flask import Flask, render_template, request, jsonify
from uploader_back_end.config.default import SECRET_KEY, UPLOAD_DIR, HOST, PORT
from uploader_back_end.utils import validate
from werkzeug.utils import secure_filename
from uploader_back_end.utils.data_constructor import build_data_to_insert
from uploader_back_end.utils.db_helper import select_result

import os
app = Flask(__name__)
app.secret_key =SECRET_KEY
app.config['UPLOAD_FOLDER'] = UPLOAD_DIR

"""
Index page
"""
@app.route('/')
def index_upload():
    return render_template('index.html')


"""
Serves file upload
"""
@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    """
    Uploads file to the system and stores the data into the db, later deletes the file on success
    :return: JSON response
    """
    if request.method=='POST':
        file = request.files['file']
        if file and validate.check_file(file.filename):
            file_name = secure_filename(file.filename)
            path=os.path.join(app.config['UPLOAD_FOLDER'], file_name)
            file.save(path)
            is_success=build_data_to_insert(path)
            if is_success:
               os.remove(path)
               return jsonify({"msg":"File Uploaded!!!"}), 200
            else:
               return jsonify({"msg": "Upload Failed!!! Unable to store"}), 500
        else:
            return jsonify({"msg":"Upload Failed!!! check file type (only csv file types are supported)"}), 500
    return 


"""
Serves search functionality
"""
@app.route('/search', methods=['GET', 'POST'])
def search_key():
    """
    Extracts key (input) from query string and finds the relevant value from the db, id any.
    :return: JSON response
    """
    if request.method == 'GET':
        key=request.args.get('key_txt')
        if key:
            result=select_result(key)
            return jsonify({"result":result}), 200
    return jsonify({"result":[]}), 200


"""
Main Block
"""
if __name__ =='__main__':
    app.run(HOST,PORT)
