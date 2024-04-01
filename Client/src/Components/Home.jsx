import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate, Outlet } from "react-router-dom";
import React, { useRef, useEffect } from "react";

function Home() {
  const footerRef = useRef(null);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/verify")
      .then((res) => {
        if (res.data.status) {
          navigate("/");
        } else {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Header footerRef={footerRef}></Header>
      <Outlet />
      <Footer ref={footerRef}></Footer>
    </div>
  );
}
export default Home;
