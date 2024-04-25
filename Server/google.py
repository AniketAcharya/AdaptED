import requests

API_KEY='AIzaSyCPusDsLxcTUZq6qSKxY0ekRJlk-MjpXVw'
SEARCH_ENGINE_ID="071b969f938164262"

search_query= 'html attributes documentation'
url = 'https://www.googleapis.com/customsearch/v1'
params = {
    'q': search_query,
    'key': API_KEY,
    'cx': SEARCH_ENGINE_ID
}

response = requests.get(url, params=params)
results = response.json()
# print(results)
i=0
if 'items' in results:
    print(results['items'][i]['displayLink'])
    i=i+1
