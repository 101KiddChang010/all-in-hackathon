from flask import Flask,jsonify,request,jsonify
from mainApp import generateJSONQuiz,generateText
app = Flask(__name__)

@app.route("/getQuiz",methods=["POST"])
def Generate():
    req_JSON = request.json
    group = req_JSON["group"]
    topic = req_JSON["topic"]
    subtopic= req_JSON["subTopic"]
    return jsonify({
        "text": generateText(group,topic,subtopic),
        "questions": generateJSONQuiz("backend/data")
    })

if __name__ == "__main__":
    app.run(debug=True,port = 5000)