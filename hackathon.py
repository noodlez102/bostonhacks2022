from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)

CORS(app)

@app.route("/")

def test():
    return "Hello Bostonhacks"

if __name__ =='__main_':
    app.run(debug=True)