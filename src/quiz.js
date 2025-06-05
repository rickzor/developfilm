import React, { useState } from 'react';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [response, setResponse] = useState(0);
  const [affiliateLink, setLink] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showNo, setShowNo] = useState(false);
    const questions = [
        {
            text: "Do you have a dev tank?"
        },
        {
            text: "Do you have a dark room or change bag?"
        },
        {
            text: "Do you have the developing chemistry mixed?"
        },
        {
            text: "Is the chemistry the proper temperature?"
        }
    ];

  const handleAnswer = (userAnswer) => {
    

    if (userAnswer === "no") {
        if (questions[currentQuestion].text === "Do you have a dev tank?")
        {
             setResponse("Consider purchasing a dev tank.");
             setLink("https://amzn.to/4kDmAvt");
        }

        if (questions[currentQuestion].text === "Do you have a dark room or change bag?")
        {
            setResponse("Consider purchasing a change bag.");
            setLink("https://amzn.to/4jMZgdG");
        }

        if (questions[currentQuestion].text === "Do you have the developing chemistry mixed?")
        {
            setResponse("Consider purchasing chemistry.");
            setLink("https://amzn.to/45JUDgS");
        }

        if (questions[currentQuestion].text === "Is the chemistry the proper temperature?")
        {
            setResponse("Consider purchasing a thermometer.");
            setLink("https://amzn.to/45cgWvE");
        }
        setShowNo(true);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length && userAnswer === "yes") {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      {showNo ? (
        <div className="result">
          <h2>{response}</h2>
          <button onClick={(e) => {
                    e.preventDefault();
                    window.location.href=affiliateLink}}>Buy here</button>
          <button onClick={() => 
            {
            setCurrentQuestion(0);
            setResponse(0);
            setLink(0);
            setShowResult(false);
            setShowNo(false);}
          }>Try Again</button>
        </div>
      ) :showResult ? (
        <div className="result">
          <h2>LETS GOOOOO</h2>
        </div>
      ) : (
        <>
          <div className="question-text">
            {questions[currentQuestion].text}
          </div>
          <div className="answer-buttons">
            <button onClick={() => handleAnswer("yes")}>Yes</button>
            <button onClick={() => handleAnswer("no")}>No</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;