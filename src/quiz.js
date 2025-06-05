import React, { useState } from 'react';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
    const questions = [
        {
            text: "Is the sky blue?",
            answer: "yes"
        },
        {
            text: "Does 1 + 1 = 3?",
            answer: "no"
        },
        {
            text: "Is water wet?",
            answer: "yes"
        }
    ];

  const handleAnswer = (userAnswer) => {
    if (questions[currentQuestion].text === "Is the sky blue?")
    {
      if (userAnswer === questions[currentQuestion].answer){
        setScore(score + 1);
      }
      else {
        setScore(score - 1);
      }
    }

    if (questions[currentQuestion].text === "Does 1 + 1 = 3?")
    {
      if (userAnswer === questions[currentQuestion].answer){
        setScore(score + 2);
      }
      else {
        setScore(score - 1);
      }
    }

    if (questions[currentQuestion].text === "Is water wet?")
    {
      if (userAnswer === questions[currentQuestion].answer){
        setScore(score + 3);
      }
      else {
        setScore(score - 1);
      }
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      {showResult ? (
        <div className="result">
          <h2>You scored {score} out of {questions.length}</h2>
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