import React from 'react';
import Quiz from '../components/Quiz';

const QuizPage = () => {
  return (
    <div className="p-4 flex flex-col justify-center items-center ">
      <h1 className="text-2xl md:text-4xl text-center font-extrabold mb-6 animate-fade-in">Quiz Time!</h1>
      <div className='h-[calc(100vh-6rem)]  flex items-center justify-center'>
        <Quiz />
      </div>
    </div>
  );
};

export default QuizPage;