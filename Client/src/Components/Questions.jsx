import { useNavigate, useLocation } from "react-router-dom";
import React, { useState } from "react";
import Axios from "axios";
import "../assets/Questions.css";

function Questions() {
  const location = useLocation();
  const { username } = location.state || {};
  const navigate = useNavigate();
  const [age, setAge] = useState("");
  const [edu, setEdu] = useState("");
  const [exp, setExp] = useState("");
  const [interest, setInterest] = useState("");
  const [rating, setRating] = useState("");
  const [consume, setConsume] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");
  const [freq, setFreq] = useState("");
  const [device, setDevice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/questions", {
      username,
      age,
      edu,
      exp,
      interest,
      rating,
      consume,
      time,
      duration,
      freq,
      device,
    })
      .then((response) => {
        if (response.data.status) {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="question-container">
      <form className="question-form" onSubmit={handleSubmit}>
        <h2>Please Answer these Questions</h2>
        <div className="sapat">
          <label htmlFor="username">Username: {username}</label>

          <label htmlFor="age">What is your age category</label>
          <div className="sapat1">
            <input
              className="question"
              type="radio"
              name="age"
              onChange={(e) => setAge(e.target.value)}
            />
            <label>Under 18</label>
          </div>
          <div className="sapat1">
            <input
              className="question"
              type="radio"
              name="age"
              onChange={(e) => setAge(e.target.value)}
            />
            <label>18-24</label>
          </div>

          <div className="sapat1">
            <input
              className="question"
              type="radio"
              name="age"
              onChange={(e) => setAge(e.target.value)}
            />
            <label>25-34</label>
          </div>

          <div className="sapat1">
            <input
              className="question"
              type="radio"
              name="age"
              onChange={(e) => setAge(e.target.value)}
            />
            <label>35 and above</label>
          </div>
        </div>

        <button type="submit">Submit Answers</button>
      </form>
    </div>
  );
}

export default Questions;
