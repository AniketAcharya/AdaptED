import axios from "axios";

const API_KEY = "AIzaSyCPusDsLxcTUZq6qSKxY0ekRJlk-MjpXVw";
const SEARCH_ENGINE_ID = "071b969f938164262";

const searchQuery = "javascript classes devdocs";
const url = "https://www.googleapis.com/customsearch/v1";

const params = {
  q: searchQuery,
  key: API_KEY,
  cx: SEARCH_ENGINE_ID,
  exactTerms: "classes",
};

axios
  .get(url, { params })
  .then((response) => {
    const results = response.data;

    if (results.items) {
      //   results.items.forEach((elements) => {
      //     console.log(elements.displayLink);
      //   });
      console.log(results.items);
    }
  })
  .catch((error) => {
    console.error("Error during API call", error);
  });
