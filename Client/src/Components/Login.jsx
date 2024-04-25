import React, { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import "../assets/Style/Signup.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/login", {
      email,
      password,
    })
      .then((response) => {
        if (response.data.status) {
          console.log(response);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="whole">
      <div className="sign-up-container">
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <h2>LogIn</h2>

          <label htmlFor="email" style={{ marginTop: "40px" }}>
            Email:
          </label>
          <input
            className="auth"
            type="email"
            autoComplete="off"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            className="auth"
            type="password"
            placeholder="******"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="sign_btn">
            Login
          </button>
          <p style={{ marginTop: "20px" }}>
            Don't Have Account?{" "}
            <Link to="/signup" style={{ color: "white" }}>
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
