from youtube_transcript_api import YouTubeTranscriptApi
import urllib.parse as urlparse
import re

def extract_transcript_from_youtube_url(youtube_url):

    parsed_url = urlparse.urlparse(youtube_url)
    video_id = urlparse.parse_qs(parsed_url.query).get('v')

    if video_id:
        video_id = video_id[0]

        try:
            transcript = YouTubeTranscriptApi.get_transcript(video_id)
            text_transcript = ""

            for entry in transcript:
                text_transcript += entry['text'] + " "

            text_transcript = re.sub(r'\s+', ' ', text_transcript).strip()

            return text_transcript

        except Exception as e:
            print(f"Error extracting transcript: {e}")
            return None
    else:
        print("Invalid YouTube URL.")
        return None