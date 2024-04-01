import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Body() {
  const [name, setName] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/user")
      .then((res) => {
        if (res.data.status) {
          setName(res.data.username);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <section className="section_Heading">
        <div className="section_container">
          <h1>Welcome {name}</h1>
          <p style={{ marginBottom: "10px" }}>What do you want to learn</p>
          <div className="section_Heading_search">
            <input type="text" placeholder="Search our tutorial, e.g. HTML" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </section>
      <section className="courses_card_container">
        <div className="courses_bigCard">
          <div className="bg-pink">
            <h2>HTML</h2>
            <p>The language for building web pages</p>
            <Link to={"/html"}>
              <button className="bg-black btn">Learn HTML</button>
            </Link>
          </div>
          <div className="bg-yellow">
            <h2>CSS</h2>
            <p>The language for styling web pages</p>
            <Link to={"/css"}>
              <button className="bg-black btn">Learn CSS</button>
            </Link>
          </div>
          <div className="bg-white">
            <h2>JavaScript</h2>
            <p>A scripting language for programming web pages</p>
            <Link to={"/js"}>
              <button className="bg-black btn">Learn JavaScript</button>
            </Link>
          </div>
          <div className="bg-blue">
            <h2>ReactJS</h2>
            <p>A JS library for developing frontend of web pages</p>
            <Link to={"/react"}>
              <button className="bg-black btn">Learn ReactJS</button>
            </Link>
          </div>
          <div className="bg-blue">
            <h2>NodeJS</h2>
            <p>An Enviroment to run JavaScript on the server.</p>
            <Link to={"/node"}>
              <button className="bg-black btn">Learn NodeJS</button>
            </Link>
          </div>
          <div className="bg-white">
            <h2>MongoDB</h2>
            <p>A NoSQL Database</p>
            <Link to={"/mongo"}>
              <button className="bg-black btn">Learn MongoDB</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Body;
