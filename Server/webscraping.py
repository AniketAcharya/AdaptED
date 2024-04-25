import requests
from bs4 import BeautifulSoup

def extract_text_from_website(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")
    text = soup.get_text()
    return text
