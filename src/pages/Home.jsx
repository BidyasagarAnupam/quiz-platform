import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl md:text-4xl font-extrabold mb-6 animate-fade-in">Welcome to the Quiz Platform</h1>
      <div className='flex flex-col-reverse  items-center gap-8 p-2 md:p-6 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg'>
        <div className='flex gap-3'>
          <Link to="/quiz" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white font-semibold rounded-lg shadow-md text-lg cursor-pointer">
            Start Quiz
          </Link>
          <Link to="/results" className="px-6 py-3 bg-green-500 hover:bg-green-600 transition-all duration-300 text-white font-semibold rounded-lg shadow-md text-lg cursor-pointer">
            Results
          </Link>
        </div>
        <div className='text-left '>
          <h2 className="text-2xl font-semibold underline mb-3">Instructions</h2>
          <ul className="list-disc list-inside text-gray-200 space-y-2 text-sm">
            <li>There are 10 questions in total.</li>
            <li>Each question has 4 options.</li>
            <li>Choose the correct option.</li>
            <li>Click on the "Next" button to go to the next question.</li>
            <li>Click on the "Submit" button to submit the quiz.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
