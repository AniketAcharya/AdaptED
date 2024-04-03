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
        <h2 className="raj">Please Answer these Questions</h2>
        <div className="sapat">
          <div className="question-container">
            <label htmlFor="age">What is your age category</label>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="age"
                value="Under 18"
                required
                onChange={(e) => setAge(e.target.value)}
              />
              <label>Under 18</label>
            </div>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="age"
                value="18-24"
                onChange={(e) => setAge(e.target.value)}
              />
              <label>18-24</label>
            </div>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="age"
                value="25-34"
                onChange={(e) => setAge(e.target.value)}
              />
              <label>25-34</label>
            </div>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="age"
                value="35 and above"
                onChange={(e) => setAge(e.target.value)}
              />
              <label>35 and above</label>
            </div>
          </div>

          <div className="question-container">
            <label>What is your Educational status</label>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="edu"
                value="High School"
                required
                onChange={(e) => setEdu(e.target.value)}
              />
              <label>High School</label>
            </div>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="edu"
                value="Bachelors"
                onChange={(e) => setEdu(e.target.value)}
              />
              <label>Bachelors</label>
            </div>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="edu"
                value="Masters"
                onChange={(e) => setEdu(e.target.value)}
              />
              <label>Masters</label>
            </div>
          </div>

          <div className="question-container">
            <label>Previous Online Learning Experience</label>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="exp"
                value="Yes"
                required
                onChange={(e) => setExp(e.target.value)}
              />
              <label>Yes</label>
            </div>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="exp"
                value="No"
                onChange={(e) => setEdu(e.target.value)}
              />
              <label>No</label>
            </div>
          </div>

          {/* <div className="question-container">
            <label>
              If Yes, what format did you find most engaging. If no enter NA
            </label>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="interest"
                value="Videos"
                required
                onChange={(e) => setInterest(e.target.value)}
              />
              <label>Videos</label>
            </div>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="interest"
                value="Articles"
                onChange={(e) => setInterest(e.target.value)}
              />
              <label>Articles</label>
            </div>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="interest"
                value="NA"
                onChange={(e) => setInterest(e.target.value)}
              />
              <label>NA</label>
            </div>
          </div> */}

          <div className="question-container">
            <label>How effective is your current learning method</label>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="rating"
                value="1"
                required
                onChange={(e) => setRating(Number(e.target.value))}
              />
              <label>1</label>
            </div>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="rating"
                value="2"
                onChange={(e) => setRating(Number(e.target.value))}
              />
              <label>2</label>
            </div>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="rating"
                value="3"
                onChange={(e) => setRating(Number(e.target.value))}
              />
              <label>3</label>
            </div>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="rating"
                value="4"
                onChange={(e) => setRating(Number(e.target.value))}
              />
              <label>4</label>
            </div>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="rating"
                value="5"
                onChange={(e) => setRating(Number(e.target.value))}
              />
              <label>5</label>
            </div>
          </div>

          <div className="question-container">
            <label>
              Do you see time consumption as a big factor while learning
            </label>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="comsume"
                value="Yes"
                required
                onChange={(e) => setConsume(e.target.value)}
              />
              <label>Yes</label>
            </div>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="comsume"
                value="No"
                onChange={(e) => setConsume(e.target.value)}
              />
              <label>No</label>
            </div>
          </div>

          <div className="question-container">
            <label>Time of the day preferred for learning</label>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="time"
                value="Morning"
                required
                onChange={(e) => setTime(e.target.value)}
              />
              <label>Morning</label>
            </div>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="time"
                value="Afternoon"
                onChange={(e) => setTime(e.target.value)}
              />
              <label>Afternoon</label>
            </div>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="time"
                value="Evening"
                onChange={(e) => setTime(e.target.value)}
              />
              <label>Evening</label>
            </div>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="time"
                value="Night"
                onChange={(e) => setTime(e.target.value)}
              />
              <label>Night</label>
            </div>
          </div>

          <div className="question-container">
            <label>Preferred Video Length (in minutes)</label>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="duration"
                value="Less than 4"
                required
                onChange={(e) => setDuration(e.target.value)}
              />
              <label>Less than 4</label>
            </div>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="duration"
                value="Between 4 and 20"
                onChange={(e) => setDuration(e.target.value)}
              />
              <label>Between 4 and 20</label>
            </div>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="duration"
                value="More thab 20"
                onChange={(e) => setDuration(e.target.value)}
              />
              <label>More than 20</label>
            </div>
          </div>

          <div className="question-container">
            <label>Frequency of studying (in days within a week)</label>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="freq"
                value="1"
                required
                onChange={(e) => setFreq(Number(e.target.value))}
              />
              <label>1</label>
            </div>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="freq"
                value="2"
                onChange={(e) => setFreq(Number(e.target.value))}
              />
              <label>2</label>
            </div>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="freq"
                value="3"
                onChange={(e) => setFreq(Number(e.target.value))}
              />
              <label>3</label>
            </div>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="freq"
                value="4"
                onChange={(e) => setFreq(Number(e.target.value))}
              />
              <label>4</label>
            </div>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="freq"
                value="5"
                onChange={(e) => setFreq(Number(e.target.value))}
              />
              <label>5</label>
            </div>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="freq"
                value="6"
                onChange={(e) => setFreq(Number(e.target.value))}
              />
              <label>6</label>
            </div>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="freq"
                value="7"
                onChange={(e) => setFreq(Number(e.target.value))}
              />
              <label>7</label>
            </div>
          </div>

          <div className="question-container">
            <label>Device mostly used for learning</label>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="device"
                value="Mobile"
                required
                onChange={(e) => setDevice(e.target.value)}
              />
              <label>Mobile</label>
            </div>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="device"
                value="Tablet"
                onChange={(e) => setDevice(e.target.value)}
              />
              <label>Tablet</label>
            </div>
            <div className="sapat1">
              <input
                className="question"
                type="radio"
                name="device"
                value="Laptop"
                onChange={(e) => setDevice(e.target.value)}
              />
              <label>Laptop</label>
            </div>
          </div>
        </div>

        <button type="submit" className="sapat2">
          Submit Answers
        </button>
      </form>
    </div>
  );
}

export default Questions;
