from flask import Flask, request, jsonify
from transcript import extract_transcript_from_youtube_url
from webscraping import extract_text_from_website
from flask_pymongo import PyMongo
from final import execute

app = Flask(__name__)

app.config['MONGO_URI'] = 'mongodb://127.0.0.1:27017/authentication'
mongo = PyMongo(app)

@app.route('/get_transcript', methods=['POST'])
def get_transcript():
    video_id = request.json.get('videoId')
    if video_id:
        youtube_url = f'https://www.youtube.com/watch?v={video_id}'
        transcript = extract_transcript_from_youtube_url(youtube_url)
        return jsonify({'transcript': transcript})
    else:
        return jsonify({'error': 'No video ID provided'}), 400
    
@app.route('/get_scrape', methods=['POST'])
def get_scrape():
    url = request.json.get('url')
    if url:
        scrape = extract_text_from_website(url)
        return jsonify({'scrape': scrape})
    else:
        return jsonify({'error': 'No url provided'}), 400
    
@app.route('/send_to_model', methods=['POST'])
def send_to_model():
    username=request.json.get('username')
    age=request.json.get('age')
    edu=request.json.get('edu')
    exp=request.json.get('exp')
    rating=request.json.get('rating')
    consume=request.json.get('consume')
    time=request.json.get('time')
    device=request.json.get('device')
    res=execute(age,edu,exp,rating,consume,time,device)

    mongo.db.users.update_one(
        {"username": username},
        {"$set": {"interest": res}}
    )

    return jsonify({'answer':res}), 200

if __name__ == '__main__':
    app.run(debug=True)
