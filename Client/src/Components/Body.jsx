import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useQuizData } from "../Store/QuizData";
import VanillaTilt from "vanilla-tilt";

function Body() {
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 1,
    });
  }, []);

  const [name, setName] = useState(null);
  const [interest, setInterest] = useState(null);
  const { setCurrentInterest, setCurrentName } = useQuizData();
  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/user")
      .then((res) => {
        if (res.data.status) {
          setName(res.data.username);
          setInterest(res.data.interest);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (interest) setCurrentInterest(interest);
  }, [interest]);

  useEffect(() => {
    if (name) setCurrentName(name);
  }, [name]);

  return (
    <>
      <section className="section_Heading">
        <div className="section_container">
          <h1 style={{ fontSize: "6em" }}>Welcome {name}</h1>
          <h2 style={{ color: "white", marginBottom: "10px" }}>
            According to your current data, the most suited way of learning for
            you is {interest}
          </h2>
          <p style={{ marginBottom: "10px" }}>What do you want to learn</p>
          <div className="section_Heading_search">
            <input type="text" placeholder="Search our tutorial, e.g. HTML" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </section>

      <div className="courses_card_container">
        <div ref={tiltRef} className="tilt-card">
          <div className="aniket">
            <div className="come-in">
              <h2>HTML</h2>
            </div>
            <div className="come-out">
              <h2>HTML</h2>
              <p>The language for building web pages</p>
              <Link to={"/html"}>
                <button className="bg-black btn">Learn HTML</button>
              </Link>
            </div>
          </div>
        </div>

        <div ref={tiltRef} className="tilt-card">
          <div className="aniket">
            <div className="come-in">
              <h2>CSS</h2>
            </div>
            <div className="come-out">
              <h2>CSS</h2>
              <p>The language for styling web pages</p>
              <Link to={"/css"}>
                <button className="bg-black btn">Learn CSS</button>
              </Link>
            </div>
          </div>
        </div>

        <div ref={tiltRef} className="tilt-card">
          <div className="aniket">
            <div className="come-in">
              <h2>JavaScript</h2>
            </div>
            <div className="come-out">
              <h2>JavaScript</h2>
              <p>A scripting language for programming web pages</p>
              <Link to={"/js"}>
                <button className="bg-black btn">Learn JavaScript</button>
              </Link>
            </div>
          </div>
        </div>

        <div ref={tiltRef} className="tilt-card">
          <div className="aniket">
            <div className="come-in">
              <h2>ReactJS</h2>
            </div>
            <div className="come-out">
              <h2>ReactJS</h2>
              <p>A JS library for developing frontend of web pages</p>
              <Link to={"/react"}>
                <button className="bg-black btn">Learn ReactJS</button>
              </Link>
            </div>
          </div>
        </div>

        <div ref={tiltRef} className="tilt-card">
          <div className="aniket">
            <div className="come-in">
              <h2>NodeJS</h2>
            </div>
            <div className="come-out">
              <h2>NodeJS</h2>
              <p>An Enviroment to run JavaScript on the server.</p>
              <Link to={"/node"}>
                <button className="bg-black btn">Learn NodeJS</button>
              </Link>
            </div>
          </div>
        </div>

        <div ref={tiltRef} className="tilt-card">
          <div className="aniket">
            <div className="come-in">
              <h2>MongoDB</h2>
            </div>
            <div className="come-out">
              <h2>MongoDB</h2>
              <p>A NoSQL Database</p>
              <Link to={"/mongo"}>
                <button className="bg-black btn">Learn MongoDB</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
