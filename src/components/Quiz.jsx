import React, { useState, useEffect } from 'react';
import Question from './Question';
import Timer from './Timer';
import Scoreboard from './Scoreboard';
import { saveQuizHistory } from '../utils/indexedDB';
import { useNavigate } from 'react-router-dom';
import questions from '../data/questions';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [timer, setTimer] = useState(30);
  const [startTime, setStartTime] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (timer > 0 && !isFinished) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      handleNextQuestion();
    }
  }, [timer, isFinished]);

  const handleAnswer = (answer) => {
    setUserAnswers([...userAnswers, answer]);
    if (answer === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    handleNextQuestion();
  };


  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimer(30);
    }
  };

  const handleSubmit = (lastAnswer) => {
    let finalScore = score;

    if (lastAnswer === questions[currentQuestionIndex].answer) {
      finalScore += 1;
      setScore(finalScore);
    }

    setIsFinished(true);
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    saveQuizHistory(finalScore, elapsedTime);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(0);
    setIsFinished(false);
    setTimer(30);
  };

  const handleGoHome = () => {
    navigate('/'); // Navigate to home page using useNavigate
  };

  // Start the timer when the quiz begins
  useEffect(() => {
    if (!startTime) {
      setStartTime(Date.now());
    }
  }, [startTime]);

  return (
    <div className="p-4 w-full">
      {isFinished ? (
        <div className='flex flex-col justify-center'>
          <Scoreboard score={score} totalQuestions={questions.length} onRestart={handleRestart} />
          <p className="mt-4 text-center text-xl">Time taken: {Math.floor((Date.now() - startTime) / 1000)} seconds</p> {/* Display elapsed time */}
          <button onClick={handleGoHome} className=" mt-4 px-7 py-3 bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white font-semibold rounded-lg shadow-md text-lg cursor-pointer">
            Go to Home
          </button>
        </div>
      ) : (
        <div className='flex flex-col items-center 
          justify-center bg-gray-800 bg-opacity-70 rounded-lg shadow-lg
          p-4 md:p-10 text-white
          '>
          <Timer time={timer} />
          <Question
            questionNumber={currentQuestionIndex + 1}
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            isLastQuestion={currentQuestionIndex === questions.length - 1}
            onSubmit={handleSubmit}
          />
        </div>
      )}
    </div>
  );
};

export default Quiz;