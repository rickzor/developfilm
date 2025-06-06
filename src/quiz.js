import React, { useState } from 'react';
import { Button } from 'react-native-web';
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
            text: "Do you have developing chemicals, a dev tank and a dark room or change bag?",
            id: 1
        },
        {
            text: "Is the chemistry the proper temperature?",
            id: 2
        },
        {
            text: "Is the film loaded in the dev tank?",
            id: 3
        }
    ];

    const handleAnswer = (userAnswer) => {
    
    if (userAnswer === "no") {
        if (questions[currentQuestion].id === 1)
        {
             setResponse("consider buying the following items for developing "+ filmType.selectedFilm);
             setShowResponse(true);
             // show table with links to dev tank, change bag, thermometer, and chemistry
        }

        if (questions[currentQuestion].id === 2)
        {
            setResponse("To heat up color chemistry, place the developing chemicals in a bucket of hot tap water and wait a few minutes. B&W chemistry can be used at room temp!");
            setShowResponse(true);
        }

        if (questions[currentQuestion].id === 3)
        {
            setResponse("Load your dev tank in a dark room or change bag following the instructions on the dev tank. We recommend watching the below video: ");
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
        { showResponse ? (
            <div style ={{
            display: 'flex',
            alignItems: 'center',
            width: '800px',
            textAlign:'center'}}
            >
            <h2>{response}</h2>
            </div>
        ) : (<></>)}
        { showTable ? (
            //show products table
            <></>
        ) : (<></>)}
        { showLoadDevTank ? (
            //show loading dev tank video
            <></>
        ) : (<></>)}
        { showTryAgain ? (
            <div
            style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '10px',
            justifyContent: 'center'}}>
            <button onClick={() => 
                {
                setResponse(null);
                setCurrentQuestion(0);
                setShowResponse(false);
                setShowResult(false);
                setShowTryAgain(false);}
            }>Start Over</button>
            </div>
        ) : showResult ? (
            <div>
            <h2>LETS GOOOOO</h2>
            <button onClick={onClick}>Next</button>
            </div>
        ) : (
            <>
            <div className="question-text">
                {questions[currentQuestion].text}
            </div>
            <div className="answer-buttons"
            style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '10px',
            justifyContent: 'center'}}>
                <button onClick={() => handleAnswer("yes")}>Yes</button>
                <button onClick={() => handleAnswer("no")}>No</button>
            </div>
            </>
        )}
        </div>
    );
}

export default Quiz;