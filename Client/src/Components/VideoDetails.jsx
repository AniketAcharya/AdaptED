import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";

const VideoDetails = ({ videoId }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 1,
    });
  }, []);

  const [videoDetails, setVideoDetails] = useState({});
  const [channelIcon, setChannelIcon] = useState("");
  const navigate = useNavigate();

  function goTo() {
    navigate("/embed", { state: { videoId: videoId } });
  }

  useEffect(() => {
    const fetchVideoDetails = async () => {
      const apiKey = "AIzaSyBTPf8dd_DxJqpVINrbNxm29NxeHuzadY4";
      const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${videoId}&key=${apiKey}`;

      try {
        const response = await axios.get(url);
        console.log(response);
        setVideoDetails(response.data.items[0]);

        const channelId = response.data.items[0].snippet.channelId;
        const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${apiKey}`;
        const channelResponse = await axios.get(channelUrl);

        const channelIconUrl =
          channelResponse.data.items[0].snippet.thumbnails.default.url;
        setChannelIcon(channelIconUrl);
      } catch (error) {
        console.error("Error fetching video details:", error);
      }
    };

    fetchVideoDetails();
  }, [videoId]);

  function formatDuration(duration) {
    if (typeof duration !== "string") {
      return "Invalid duration format";
    }

    const durationRegex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
    const match = duration.match(durationRegex);

    if (match) {
      const hours = match[1] || "0";
      const minutes = match[2] || "0";
      const seconds = match[3] || "0";
      if (hours == "0") return `${minutes}:${seconds}`;
      return `${hours}:${minutes}:${seconds}`;
    } else {
      return "Invalid format";
    }
  }

  return (
    <div ref={tiltRef} className="tilt-card">
      <img
        src={videoDetails.snippet?.thumbnails?.medium?.url}
        style={{ borderRadius: "15px" }}
        alt="Video Thumbnail"
        className="thumbnail"
        onClick={goTo}
      />

      <div className="flex-div">
        <img
          src={channelIcon}
          style={{ borderRadius: "100px" }}
          alt="Channel Icon"
          className="test"
        />
        <div className="vid-info">
          <h5>{videoDetails.snippet?.title}</h5>
          <p>{videoDetails.snippet?.channelTitle}</p>
          <p>
            Duration: {formatDuration(videoDetails.contentDetails?.duration)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
