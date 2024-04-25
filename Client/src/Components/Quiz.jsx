import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuizData } from "../Store/QuizData";
import Axios from "axios";

// import { data } from "../assets/data";

function Quiz() {
  const location = useLocation();
  const data = location.state?.data;
  const navigate = useNavigate();
  const {
    current,
    setCurrentScore,
    currentScore,
    setQuizCount,
    quizCount,
    interest,
    name,
    topicName,
  } = useQuizData();

  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(0);
  const url =
    interest !== "Articles"
      ? "/html/htmlAttributes/articles"
      : "/html/htmlTagList/videos";

  useEffect(() => {
    if (result) {
      setCurrentScore(current, score);
      setQuizCount(quizCount + 1);
    }
  }, [result]);

  useEffect(() => {
    console.log(currentScore);
  }, [currentScore]);

  useEffect(() => {
    if (quizCount === 2) {
      const newInterest = getBest();
      Axios.post("http://localhost:3000/auth/update", {
        name,
        newInterest,
      });
    }
  }, [quizCount]);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);
  let option_array = [Option1, Option2, Option3, Option4];

  const checkAns = (e, ans) => {
    if (lock == false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  const getBest = () => {
    if (currentScore.article > currentScore.video) return "Articles";
    else if (currentScore.article < currentScore.video) return "Videos";
    else return interest;
  };

  const next = () => {
    if (lock === true) {
      if (index === data.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(data[index]);
      setLock(false);
      option_array.map((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      });
    }
  };

  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
    navigate("/");
  };
  console.log(url);
  const tryNew = () => {
    // console.log(topicName);
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
    navigate(url);
  };

  return (
    <>
      <div className="container">
        <h1>Quiz App</h1>
        <hr />
        {result ? (
          <></>
        ) : (
          <>
            <h2>
              {index + 1}. {question.question}
            </h2>
            <ul>
              <li
                ref={Option1}
                onClick={(e) => {
                  checkAns(e, 1);
                }}
              >
                {question.option1}
              </li>
              <li
                ref={Option2}
                onClick={(e) => {
                  checkAns(e, 2);
                }}
              >
                {question.option2}
              </li>
              <li
                ref={Option3}
                onClick={(e) => {
                  checkAns(e, 3);
                }}
              >
                {question.option3}
              </li>
              <li
                ref={Option4}
                onClick={(e) => {
                  checkAns(e, 4);
                }}
              >
                {question.option4}
              </li>
            </ul>
            <button
              onClick={next}
              className="quiz_btn"
              style={{ height: "75px" }}
            >
              Next
            </button>
            <div className="index">
              {index + 1} of {data.length} questions
            </div>
          </>
        )}
        {!!result && quizCount === 2 && (
          <>
            <h2>You scored better in {getBest()}</h2>
          </>
        )}
        {!!result && quizCount === 1 && (
          <>
            <h2>
              You Scored {score} out of {data.length}
              <br />
              Are you staisfied with the score?
              <button
                onClick={reset}
                style={{ marginRight: "10px", height: "75px" }}
              >
                Yes
              </button>
              <button onClick={tryNew} style={{ height: "75px" }}>
                No
              </button>
            </h2>
          </>
        )}
      </div>
    </>
  );
}

export default Quiz;
