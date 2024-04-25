import { Link } from "react-router-dom";
import { useQuizData } from "../Store/QuizData";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

function Html() {
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 1,
    });
  }, []);

  const { interest, setTopicName, topicName } = useQuizData();

  function setName(name) {
    if (topicName === "") {
      setTopicName(name);
    } else {
      setTopicName("");
    }
  }
  const navigate = useNavigate();
  const url =
    interest === "Articles"
      ? "/html/htmlAttributes/articles"
      : "/html/htmlTagList/videos";
  return (
    <div className="topic_page">
      <Link
        ref={tiltRef}
        className="tilt-card"
        onClick={(e) => {
          e.preventDefault();
          setName("HTML Tags");
          navigate(url, { state: { value: "HTML Tags" } });
        }}
        style={{ textDecoration: "none" }}
      >
        <div className="aniket">
          <h2>HTML Tag List</h2>
        </div>
      </Link>

      <Link
        ref={tiltRef}
        className="tilt-card"
        onClick={(e) => {
          e.preventDefault();
          navigate(url, { state: { value: "HTML Attributes" } });
        }}
        style={{ textDecoration: "none" }}
      >
        <div className="aniket">
          <h2>HTML Attributes</h2>
        </div>
      </Link>

      <Link
        ref={tiltRef}
        className="tilt-card"
        onClick={(e) => {
          e.preventDefault();
          navigate(url, { state: { value: "HTML Lists" } });
        }}
        style={{ textDecoration: "none" }}
      >
        <div className="aniket">
          <h2>HTML Lists</h2>
        </div>
      </Link>

      <Link
        ref={tiltRef}
        className="tilt-card"
        onClick={(e) => {
          e.preventDefault();
          navigate(url, { state: { value: "HTML Forms" } });
        }}
        style={{ textDecoration: "none" }}
      >
        <div className="aniket">
          <h2>HTML Forms</h2>
        </div>
      </Link>

      <Link
        ref={tiltRef}
        className="tilt-card"
        onClick={(e) => {
          e.preventDefault();
          navigate(url, { state: { value: "HTML Tables" } });
        }}
        style={{ textDecoration: "none" }}
      >
        <div className="aniket">
          <h2>HTML Tables</h2>
        </div>
      </Link>

      <Link
        ref={tiltRef}
        className="tilt-card"
        onClick={(e) => {
          e.preventDefault();
          navigate(url, { state: { value: "HTML Images and Media" } });
        }}
        style={{ textDecoration: "none" }}
      >
        <div className="aniket">
          <h2>HTML Images and Media</h2>
        </div>
      </Link>

      <Link
        ref={tiltRef}
        className="tilt-card"
        onClick={(e) => {
          e.preventDefault();
          navigate(url, { state: { value: "HTML Links and Anchors" } });
        }}
        style={{ textDecoration: "none" }}
      >
        <div className="aniket">
          <h2>HTML Links and Anchors</h2>
        </div>
      </Link>

      <Link
        ref={tiltRef}
        className="tilt-card"
        onClick={(e) => {
          e.preventDefault();
          navigate(url, { state: { value: "HTML Styles" } });
        }}
        style={{ textDecoration: "none" }}
      >
        <div className="aniket">
          <h2>HTML Styles</h2>
        </div>
      </Link>

      <Link
        ref={tiltRef}
        className="tilt-card"
        onClick={(e) => {
          e.preventDefault();
          navigate(url, { state: { value: "HTML Iframes" } });
        }}
        style={{ textDecoration: "none" }}
      >
        <div className="aniket">
          <h2>HTML Iframes</h2>
        </div>
      </Link>

      <Link
        ref={tiltRef}
        className="tilt-card"
        onClick={(e) => {
          e.preventDefault();
          navigate(url, { state: { value: "HTML SVG" } });
        }}
        style={{ textDecoration: "none" }}
      >
        <div className="aniket">
          <h2>HTML SVG</h2>
        </div>
      </Link>

      <Link
        ref={tiltRef}
        className="tilt-card"
        onClick={(e) => {
          e.preventDefault();
          navigate(url, { state: { value: "HTML Canvas" } });
        }}
        style={{ textDecoration: "none" }}
      >
        <div className="aniket">
          <h2>HTML Canvas</h2>
        </div>
      </Link>

      <Link
        ref={tiltRef}
        className="tilt-card"
        onClick={(e) => {
          e.preventDefault();
          navigate(url, { state: { value: "HTML Events" } });
        }}
        style={{ textDecoration: "none" }}
      >
        <div className="aniket">
          <h2>HTML Events</h2>
        </div>
      </Link>
    </div>
  );
}

export default Html;
