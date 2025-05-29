from flask import Flask, request, jsonify
from textblob import TextBlob
from flask_cors import CORS

app = Flask(__name__)
CORS(app) #Allow requests from Java backend or frontend

@app.route('/analyze', methods = ['POST'])
def analyze_sentiment():
    data = request.get_json()
    message = data.get("message", "")

    blob = TextBlob(message)
    polarity = blob.sentiment.polarity

    if polarity > 0:
        sentiment = "positive"
    elif polarity < 0:
        sentiment = "negative"
    else:
        sentiment = "neutral"

    return jsonify({
        "sentiment": sentiment,
        "polarity": polarity
    })

if __name__ =='__main__':
    app.run(debug=True, port=5000)