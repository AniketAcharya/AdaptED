import React, { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/signup", {
      username,
      email,
      password,
    })
      .then((response) => {
        if (response.data.status) {
          const username = response.data.username;
          navigate("/questions", { state: { username } });
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
          <h2>Sign Up</h2>
          <label htmlFor="username" style={{ marginTop: "40px" }}>
            Username:
          </label>
          <input
            className="auth"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="email">Email:</label>
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
            Sign Up
          </button>
          <p style={{ marginTop: "20px" }}>
            Have an Account?{" "}
            <Link to="/login" style={{ color: "white" }}>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
