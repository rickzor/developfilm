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
             setResponse("Consider buying the following items for developing "+ filmType.selectedFilm);
             setShowResponse(true);
             setShowTable(true);
             // show table with links to dev tank, change bag, thermometer, and chemistry
        }

        if (questions[currentQuestion].id === 2)
        {
            setResponse("To heat up color chemistry, place the developing chemicals in a bucket of hot tap water and wait a few minutes. B&W chemistry can be used at room temp.");
            setShowResponse(true);
        }

        if (questions[currentQuestion].id === 3)
        {
            setResponse("Load your dev tank in a dark room or change bag by following the instructions on the dev tank. We recommend watching the below video: ");
            setShowResponse(true);
            // show helpful video to load the dev tank
            setShowLoadDevTank(true);
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
            <div
            style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '10px',
            justifyContent: 'center'}}>
            <table border="1" cellpadding="8" cellspacing="0">
            <thead>
                <tr>
                <th>Product</th>
                <th>Amazon Link</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Developing Chemicals</td>
                <td><a href={chemistryLink} target="_blank">{chemistryLink}</a></td>
                </tr>
                <tr>
                <td>Dev Tank</td>
                <td><a href={devTankLink} target="_blank">{devTankLink}</a></td>
                </tr>
                <tr>
                <td>Change Bag</td>
                <td><a href={changeBagLink} target="_blank">{changeBagLink}</a></td>
                </tr>
                <tr>
                <td>Thermometer</td>
                <td><a href={thermometerLink} target="_blank">{thermometerLink}</a></td>
                </tr>
            </tbody>
            </table>
            </div>
        ) : (<></>)}
        { showLoadDevTank ? (
            <div
            style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '10px',
            justifyContent: 'center'}}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/MQKphVV4wuA?si=lAcs5W3AF53ZICO4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
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
                setShowTable(false);
                setShowResult(false);
                setShowLoadDevTank(false);
                setShowTryAgain(false);}
            }>Start Over</button>
            </div>
        ) : showResult ? (
            <div style={{
                textAlign: 'center',
                width: '800px'
            }}>
            <h2>The next page will guide you through each step of developing {filmType.selectedFilm} using a series of timers. Please make sure you are in a well-ventilated space and ready to develep your film. Remember to use a funnel!</h2>
            <div style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '10px',
            justifyContent: 'center',
            margin: '0 auto'}}>
            <button onClick={onClick}>Next</button>
            </div></div>
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