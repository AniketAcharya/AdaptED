import GFG from "../assets/gfg.jpg";
import MDN from "../assets/mdn.jpg";
import DD from "../assets/devdocs.png";
import W3 from "../assets/w3.jpg";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useQuizData } from "../Store/QuizData";

function Articles() {
  const tiltRef = useRef(null);
  const { setTopicName, topicName } = useQuizData();

  useEffect(() => {
    topicName.length > 0 && console.log(topicName);
    VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 1,
    });
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const value = location.state?.value;

  function gfg() {
    // setName("HTML Tags");
    navigate("/articlepage", {
      state: { link: "https://www.geeksforgeeks.org/html-tags-a-to-z-list/" },
    });
  }
  function mdn() {
    navigate("/articlepage", {
      state: {
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element",
      },
    });
  }
  function dd() {
    navigate("/articlepage", {
      state: { link: "https://devdocs.io/html-elements/" },
    });
  }
  function w3() {
    navigate("/articlepage", {
      state: {
        link: "https://www.w3schools.com/tags/default.asp",
      },
    });
  }
  return (
    <>
      <h1 style={{ alignSelf: "center", marginTop: "20px", color: "white" }}>
        Here are some of the best articles available online on the selected
        topic
      </h1>
      <div className="list-container-doc">
        <div ref={tiltRef} className="tilt-card" onClick={gfg}>
          <img src={GFG} style={{ borderRadius: "15px" }} className="come-in" />
          <div className="come-out">
            <h2>GFG</h2>
            <p>Read the documention available on GFG</p>
          </div>
        </div>
        <div ref={tiltRef} className="tilt-card" onClick={mdn}>
          <img src={MDN} style={{ borderRadius: "15px" }} className="come-in" />
          <div className="come-out">
            <h2>MDN</h2>
            <p>Read the documention available on MDN</p>
          </div>
        </div>
        <div ref={tiltRef} className="tilt-card" onClick={dd}>
          <img src={DD} style={{ borderRadius: "15px" }} className="come-in" />
          <div className="come-out">
            <h2>DevDocs</h2>
            <p>Read the documention available on DevDocs</p>
          </div>
        </div>
        <div ref={tiltRef} className="tilt-card" onClick={w3}>
          <img src={W3} style={{ borderRadius: "15px" }} className="come-in" />
          <div className="come-out">
            <h2>W3</h2>
            <p>Read the documention available on W3 Schools</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Articles;
