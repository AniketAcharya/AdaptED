import { useLocation, useNavigate } from "react-router-dom";
import { CohereClient } from "cohere-ai";
import { useEffect } from "react";
import { useQuizData } from "../Store/QuizData";
import { initTopic, initScrape } from "../assets/context";
import axios from "axios";

function ArticlePage() {
  const location = useLocation();
  const newLink = location.state?.link;
  const cohere = new CohereClient({
    token: "dqpQ3o9lbthUf4YGCkL89mJhrPxKW0C45MTU6tY5",
  });

  const navigate = useNavigate();
  const { setCurrent } = useQuizData();
  useEffect(() => {
    setCurrent("article");
  }, []);

  async function next() {
    try {
      // (async () => {
      //   const link = "https://www.w3schools.com/js/js_classes.asp";
      //   console.log("this is new link");
      //   console.log(newLink);
      //   const chatStream = await cohere.chatStream({
      //     chatHistory: [
      //       {
      //         role: "USER",
      //         message: `You are a skilled AI question generator specialized in creating multiple-choice questions based on provided URL of any particluar website. Your goal is to produce exactly 10 MCQs, not more than 10 and not less than 10 either, from the given website link : ${link}.
      //       The questions and answers should be from the provided website link only and do not hallucinate or use any additional information apart from the one provided.
      //       And provide the questions and answers strictly in array of objects format just like the given below example:
      //       [
      //         {
      //           "question": "question generated by you",
      //           "option1": "first option",
      //           "option2": "second option",
      //           "option3": "third option",
      //           "option4": "forth option",
      //           "ans": 3(no comma here)
      //         },
      //         {
      //           "question": "next question generated by you",
      //           "option1": "first option",
      //           "option2": "second option",
      //           "option3": "third option",
      //           "option4": "forth option",
      //           "ans": 4(no comma here)
      //         },
      //         .
      //         .
      //         .
      //         and when the last question comes, do not add comma "," in the end just like this:
      //         {
      //           "question": "last question generated by you",
      //           "option1": "first option",
      //           "option2": "second option",
      //           "option3": "third option",
      //           "option4": "forth option",
      //           "ans": 4(no comma here)
      //         }(no comma here)
      //       ]
      //       you are strictly advised to follow the above format and give the questions and answers only in the form of array of objects`,
      //       },
      //       {
      //         role: "CHATBOT",
      //         message: `Here are the 10 MCQs in the format specified by you:
      //         [
      //             {
      //               question: "What did ECMAScript 2015, also known as ES6, introduce?",
      //               option1: "JavaScript Functions",
      //               option2: "JavaScript Variables",
      //               option3: "JavaScript Classes",
      //               option4: "JavaScript Arrays",
      //               ans: 3
      //             },
      //             {
      //               question:
      //                 "What is the purpose of the constructor method in a JavaScript class?",
      //               option1: "It is used to create methods",
      //               option2: "It is used to initialize object properties",
      //               option3: "It is used to create variables",
      //               option4: "It is used to create arrays",
      //               ans: 2
      //             },
      //             {
      //               question: "What is a JavaScript class?",
      //               option1: "A template for JavaScript objects",
      //               option2: "A method for JavaScript objects",
      //               option3: "A property for JavaScript objects",
      //               option4: "A variable for JavaScript objects",
      //               ans: 1
      //             },
      //             {
      //               question: "How do you create a class in JavaScript?",
      //               option1: "Using the 'object' keyword",
      //               option2: "Using the 'function' keyword",
      //               option3: "Using the 'class' keyword",
      //               option4: "Using the 'template' keyword",
      //               ans: 3
      //             },
      //             {
      //               question:
      //                 "What is the correct syntax to create a class method in JavaScript?",
      //               option1: "method name() { ... }",
      //               option2: "function name() { ... }",
      //               option3: "name: function() { ... }",
      //               option4: "name() { ... }",
      //               ans: 4
      //             },
      //             {
      //               question: "Can you send parameters to Class methods in JavaScript?",
      //               option1: "No, you cannot send parameters",
      //               option2: "Yes, you can send parameters",
      //               option3: "Only string parameters can be sent",
      //               option4: "Only number parameters can be sent",
      //               ans: 2
      //             },
      //             {
      //               question:
      //                 "What happens if you do not define a constructor method in a JavaScript class?",
      //               option1: "JavaScript will throw an error",
      //               option2: "JavaScript will add an empty constructor method",
      //               option3: "The class will not have any properties",
      //               option4: "The class will not be created",
      //               ans: 2
      //             },
      //             {
      //               question: "What is the purpose of the 'new' keyword in JavaScript?",
      //               option1: "To create a new array",
      //               option2: "To create a new function",
      //               option3: "To create a new object",
      //               option4: "To create a new variable",
      //               ans: 3
      //             },
      //             {
      //               question: "What does the 'this' keyword refer to in a JavaScript class?",
      //               option1: "It refers to the current class",
      //               option2: "It refers to the current method",
      //               option3: "It refers to the current object",
      //               option4: "It refers to the current function",
      //               ans: 3
      //             },
      //             {
      //               question:
      //                 "What is the first browser version with full support for Classes in JavaScript?",
      //               option1: "Chrome 49",
      //               option2: "Edge 12",
      //               option3: "Firefox 45",
      //               option4: "Safari 9",
      //               ans: 1
      //             }
      //         ]`,
      //       },
      //     ],
      //     message: `You are a skilled AI question generator specialized in creating multiple-choice questions based on provided URL of any particluar website. Your goal is to produce exactly 10 MCQs, not more than 10 and not less than 10 either, from the given website link : ${newLink}.
      //     The questions and answers should be from the provided website link only and do not hallucinate or use any additional information apart from the one provided.
      //     And provide the questions and answers strictly in array of objects format just like the given below example:
      //     [
      //       {
      //         "question": "question generated by you",
      //         "option1": "first option",
      //         "option2": "second option",
      //         "option3": "third option",
      //         "option4": "forth option",
      //         "ans": 3(no comma here)
      //       },
      //       {
      //         "question": "next question generated by you",
      //         "option1": "first option",
      //         "option2": "second option",
      //         "option3": "third option",
      //         "option4": "forth option",
      //         "ans": 4(no comma here)
      //       },
      //       .
      //       .
      //       .
      //       and when the last question comes, do not add comma "," in the end just like this:
      //       {
      //         "question": "last question generated by you",
      //         "option1": "first option",
      //         "option2": "second option",
      //         "option3": "third option",
      //         "option4": "forth option",
      //         "ans": 4(no comma here)
      //       }(no comma here)
      //     ]
      //     you are strictly advised to follow the above format and give the questions and answers only in the form of array of objects`,
      //     // connectors: [{ id: "web-search" }],
      //   });
      //   let fullText = "";
      //   for await (const message of chatStream) {
      //     if (message.eventType === "text-generation") {
      //       fullText += message.text;
      //     }
      //   }
      //   // console.log(fullText);
      //   let startIndex = fullText.indexOf("[");
      //   let endIndex = fullText.indexOf("]") + 1;
      //   let res = fullText.slice(startIndex, endIndex);
      //   // console.log("this is after slicing");
      //   // console.log(res);
      //   const arrayOfObjects = JSON.parse(res);
      //   navigate("/quiz", { state: { data: arrayOfObjects } });
      //   // console.log(typeof arrayOfObjects);
      //   // console.log("this is after array of objects");
      //   // console.log(arrayOfObjects);
      // })();

      (async () => {
        console.log("this is new link");
        console.log(newLink);
        const response = await axios.post("http://localhost:5000/get_scrape", {
          url: newLink,
        });
        const topic = "HTML Attributes";
        const scrape = response.data.scrape;
        const chatStream = await cohere.chatStream({
          chatHistory: [
            {
              role: "USER",
              message: `Yor are given a topic: ${initTopic}.You are a skilled AI question generator specialized in creating multiple-choice questions based on the provided data and topic. Your goal is to produce exactly 10 MCQs, not more than 10 and not less than 10 either, from the given data : ${initScrape}.Generate the questions and answers by only using that part of data that is relevent to the given topic: ${initTopic}.Do not use random stuff, only use the relevent portion of the data that is being provided.
              And provide the questions and answers strictly in array of objects format just like the given below example:
              [
                {
                  "question": "question generated by you",
                  "option1": "first option",
                  "option2": "second option",
                  "option3": "third option",
                  "option4": "forth option",
                  "ans": 3(no comma here)
                },
                {
                  "question": "next question generated by you",
                  "option1": "first option",
                  "option2": "second option",
                  "option3": "third option",
                  "option4": "forth option",
                  "ans": 4(no comma here)
                },
                .
                .
                .
                and when the last question comes, do not add comma "," in the end just like this:
                {
                  "question": "last question generated by you",
                  "option1": "first option",
                  "option2": "second option",
                  "option3": "third option",
                  "option4": "forth option",
                  "ans": 4(no comma here)
                }(no comma here)
              ]
              you are strictly advised to follow the above format and give the questions and answers only in the form of array of objects`,
            },
            {
              role: "CHATBOT",
              message: `Here are the 10 MCQs based on the relevent part of data that you have provided and in the format specified by you:
                  [
                    {
                      question: "What did ECMAScript 2015, also known as ES6, introduce?",
                      option1: "JavaScript Functions",
                      option2: "JavaScript Variables",
                      option3: "JavaScript Classes",
                      option4: "JavaScript Arrays",
                      ans: 3
                    },
                    {
                      question:
                        "What is the purpose of the constructor method in a JavaScript class?",
                      option1: "It is used to create methods",
                      option2: "It is used to initialize object properties",
                      option3: "It is used to create variables",
                      option4: "It is used to create arrays",
                      ans: 2
                    },
                    {
                      question: "What is a JavaScript class?",
                      option1: "A template for JavaScript objects",
                      option2: "A method for JavaScript objects",
                      option3: "A property for JavaScript objects",
                      option4: "A variable for JavaScript objects",
                      ans: 1
                    },
                    {
                      question: "How do you create a class in JavaScript?",
                      option1: "Using the 'object' keyword",
                      option2: "Using the 'function' keyword",
                      option3: "Using the 'class' keyword",
                      option4: "Using the 'template' keyword",
                      ans: 3
                    },
                    {
                      question:
                        "What is the correct syntax to create a class method in JavaScript?",
                      option1: "method name() { ... }",
                      option2: "function name() { ... }",
                      option3: "name: function() { ... }",
                      option4: "name() { ... }",
                      ans: 4
                    },
                    {
                      question: "Can you send parameters to Class methods in JavaScript?",
                      option1: "No, you cannot send parameters",
                      option2: "Yes, you can send parameters",
                      option3: "Only string parameters can be sent",
                      option4: "Only number parameters can be sent",
                      ans: 2
                    },
                    {
                      question:
                        "What happens if you do not define a constructor method in a JavaScript class?",
                      option1: "JavaScript will throw an error",
                      option2: "JavaScript will add an empty constructor method",
                      option3: "The class will not have any properties",
                      option4: "The class will not be created",
                      ans: 2
                    },
                    {
                      question: "What is the purpose of the 'new' keyword in JavaScript?",
                      option1: "To create a new array",
                      option2: "To create a new function",
                      option3: "To create a new object",
                      option4: "To create a new variable",
                      ans: 3
                    },
                    {
                      question: "What does the 'this' keyword refer to in a JavaScript class?",
                      option1: "It refers to the current class",
                      option2: "It refers to the current method",
                      option3: "It refers to the current object",
                      option4: "It refers to the current function",
                      ans: 3
                    },
                    {
                      question:
                        "What is the first browser version with full support for Classes in JavaScript?",
                      option1: "Chrome 49",
                      option2: "Edge 12",
                      option3: "Firefox 45",
                      option4: "Safari 9",
                      ans: 1
                    }
                  ]`,
            },
          ],
          message: `Yor are given a topic: ${topic}.You are a skilled AI question generator specialized in creating multiple-choice questions based on the provided data and topic. Your goal is to produce exactly 10 MCQs, not more than 10 and not less than 10 either, from the given data : ${scrape}.Generate the questions and answers by only using that part of data that is relevent to the given topic: ${topic}.Do not use random stuff, only use the relevent portion of the data that is being provided.
          And provide the questions and answers strictly in array of objects format just like the given below example:
          [
            {
              "question": "question generated by you",
              "option1": "first option",
              "option2": "second option",
              "option3": "third option",
              "option4": "forth option",
              "ans": 3(no comma here)
            },
            {
              "question": "next question generated by you",
              "option1": "first option",
              "option2": "second option",
              "option3": "third option",
              "option4": "forth option",
              "ans": 4(no comma here)
            },
            .
            .
            .
            and when the last question comes, do not add comma "," in the end just like this:
            {
              "question": "last question generated by you",
              "option1": "first option",
              "option2": "second option",
              "option3": "third option",
              "option4": "forth option",
              "ans": 4(no comma here)
            }(no comma here)
          ]
          you are strictly advised to follow the above format and give the questions and answers only in the form of array of objects`,
          // connectors: [{ id: "web-search" }],
        });

        let fullText = "";

        for await (const message of chatStream) {
          if (message.eventType === "text-generation") {
            fullText += message.text;
          }
        }

        console.log(fullText);
        let startIndex = fullText.indexOf("[");
        let endIndex = fullText.indexOf("]") + 1;
        let res = fullText.slice(startIndex, endIndex);
        console.log("this is after slicing");
        console.log(res);
        const arrayOfObjects = JSON.parse(res);
        console.log(typeof arrayOfObjects);
        console.log("this is after array of objects");
        console.log(arrayOfObjects);
        navigate("/quiz", { state: { data: arrayOfObjects } });
      })();
    } catch (error) {
      console.error("Error fetching transcript:", error);
    }
  }

  return (
    <div className="article_body">
      <div className="article">
        <iframe src={newLink} title="Embedded article"></iframe>
      </div>
      <button className="next_btn" onClick={next}>
        Next
      </button>
    </div>
  );
}

export default ArticlePage;