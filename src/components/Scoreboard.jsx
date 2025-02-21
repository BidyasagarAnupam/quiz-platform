import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Scoreboard = ({ score, totalQuestions, onRestart }) => {
    const navigate = useNavigate();
    return (
        <div>
            <h2 className="text-xl font-bold text-center">Your Score: {score}/{totalQuestions}</h2>
            <button onClick={onRestart} className="mt-5 mr-4 px-7 py-3 bg-green-500 hover:bg-green-600 transition-all duration-300 text-white font-semibold rounded-lg shadow-md text-lg cursor-pointer">
                Restart Quiz
            </button>
            <button
                onClick={() => navigate("/results")}
                className="px-7 py-3 bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white font-semibold rounded-lg shadow-md text-lg cursor-pointer">
                Results
            </button>
        </div>
    );
};

export default Scoreboard;