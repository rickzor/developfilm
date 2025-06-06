import React, { useState } from 'react';
import App from './App';

const Quiz = ({ onClick, filmType, filmChemistry }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [response, setResponse] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [showTryAgain, setShowTryAgain] = useState(false);
    const [showTable, setShowTable] = useState(false);
    const [showResponse, setShowResponse] = useState(false);
    const [showLoadDevTank, setShowLoadDevTank] = useState(false);
    const devTankLink = "https://amzn.to/43JJSsf";
    const changeBagLink = "https://amzn.to/4mKJnXT";
    const thermometerLink = "https://amzn.to/43u1E3Y";
    const chemistryLink = filmChemistry.selectedChemistry === "C-41" ? "https://amzn.to/3q1b2dH" 
                        : filmChemistry.selectedChemistry === "E-6" ? "https://amzn.to/3HtUTXb" 
                        : "https://amzn.to/3HrHH5g";

    const questions = [
        {
            text: "Do you have the required chemicals, a dev tank and a dark room or change bag?"
        },
        {
            text: "Is the chemistry the proper temperature?"
        },
        {
            text: "Is the film loaded in the dev tank?"
        }
    ];

    const handleAnswer = (userAnswer) => {
    
    if (userAnswer === "no") {
        if (questions[currentQuestion].text === "Do you have the required chemicals, a dev tank, and a dark room or change bag?")
        {
             setResponse("consider buying the following items for developing "+ filmType.selectedFilm);
             setShowResponse(true);
             // show table with links to dev tank, change bag, thermometer, and chemistry
        }

        if (questions[currentQuestion].text === "Is the chemistry the proper temperature?")
        {
            setResponse("Color chemistry should be around 100F, while B&W can be room temperature.\nTo heat up the chemistry, place the developing chemicals in a bucket of hot tap water.\nWait a few minutes and optionally use a laser thermometer to check the temperature of the chemicals.");
            setShowResponse(true);
        }

        if (questions[currentQuestion].text === "Is the film loaded in the dev tank?")
        {
            setResponse("To load the dev tank...");
            setShowResponse(true);
            // show helpful video to load the dev tank
        }

        setShowTryAgain(true);
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
        {   showResponse ? (
            <><div className="response">
              <h2>{response}</h2></div></>
        ) : (<></>)}
        { showTable ? (
            <></>
        ) : (<></>)}
        { showLoadDevTank ? (
            <></>
        ) : (<></>)}
        { showTryAgain ? (
            <div className="result">
            <button onClick={() => 
                {
                setResponse(null);
                setCurrentQuestion(0);
                setShowResponse(false);
                setShowResult(false);
                setShowTryAgain(false);}
            }>Try Again</button>
            </div>
        ) : showResult ? (
            <div className="result">
            <h2>LETS GOOOOO</h2>
            <button onClick={onClick}>Next</button>
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