import { useState, useEffect } from "react";
import VideoDetails from "./VideoDetails";
import { useLocation } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useQuizData } from "../Store/QuizData";

function HtmlTagList() {
  const [videoIds, setVideoIds] = useState([]);
  const location = useLocation();
  // const value = location.state?.value;
  const [isLoading, setIsLoading] = useState(false);

  const { topicName: value } = useQuizData();

  useEffect(() => {
    console.log("this is value : ", value);
    setIsLoading(true);
    loadClient();
  }, []);

  function loadClient() {
    gapi.load("client", function () {
      gapi.client.setApiKey("AIzaSyDn_23hUmG9-loG9z0AqqOWoAkVzOADClE");
      gapi.client.load("youtube", "v3", function () {
        searchVideos();
      });
    });
  }

  function searchVideos() {
    var request = gapi.client.youtube.search.list({
      part: "snippet",
      type: "video",
      // videoDuration: "long", // Filter for videos less than 4 minutes long
      maxResults: 10,
      q: value,
      videoCaption: "closedCaption",
    });

    request.execute(function (response) {
      var results = response.result;
      if (results.items) {
        let ids = [];
        for (var i = 0; i < results.items.length; i++) {
          var video = results.items[i];
          ids.push(video.id.videoId);
        }
        setVideoIds(ids);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        console.log("No results found.");
      }
    });
  }

  return (
    <>
      {isLoading ? (
        <Shimmer />
      ) : (
        <div className="list-container">
          {videoIds.map((videoId) => (
            <VideoDetails key={videoId} videoId={videoId} />
          ))}
        </div>
      )}
    </>
  );
}

export default HtmlTagList;
