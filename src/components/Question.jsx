import React, { useState } from 'react';

const Question = ({ question, onAnswer, isLastQuestion, onSubmit, questionNumber }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [numericalAnswer, setNumericalAnswer] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption) {
      onAnswer(selectedOption);
      setSelectedOption(null); // Reset the selected option for the next question
    } else if (numericalAnswer) {
      onAnswer(Number(numericalAnswer));
      setNumericalAnswer(''); // Reset the numerical answer for the next question
    }
  };

  const handleReset = () => {
    setSelectedOption(null);
    setNumericalAnswer(''); // Clear the input field
  };

  return (
    <div>
      <h2 className="text-lg font-bold">
        <span>{questionNumber})</span> {question.question}
      </h2>
      {question.options ? (
        question.options.map((option, index) => (
          <div key={index} className="mt-2">
            <input
              type="radio"
              id={`option-${index}`}
              name="quiz-option"
              value={option.charAt(0)} // Use the first character as the answer (A, B, C, D)
              checked={selectedOption === option.charAt(0)}
              onChange={() => handleOptionChange(option.charAt(0))}
              className='cursor-pointer'
            />
            <label htmlFor={`option-${index}`} className="ml-2 cursor-pointer">
              {option}
            </label>
          </div>
        ))
      ) : (
        <input
          type="number"
          value={numericalAnswer}
          onChange={(e) => setNumericalAnswer(e.target.value)}
          placeholder="Your answer"
          className="mt-2 p-2 border rounded"
        />
      )}
      <div className="mt-4">
        {!isLastQuestion ? (
          <button
            onClick={handleNext}
            disabled={!selectedOption && !numericalAnswer} // Disable button if no option is selected or no numerical answer
            className="mr-2 px-7 py-3 bg-blue-500 text-white rounded cursor-pointer disabled:cursor-not-allowed"
          >
            Next
          </button>
        ) : (
          <button
            onClick={() => {
              // Save the answer for the last question before submitting
                const lastAnswer = selectedOption || Number(numericalAnswer);
                onSubmit(lastAnswer); // Call the submit function
            }}
            disabled={!selectedOption && !numericalAnswer} // Disable button if no option is selected or no numerical answer
              className="mr-2 px-7 py-3 bg-green-500 text-white rounded cursor-pointer disabled:cursor-not-allowed"
          >
            Submit
          </button>
        )}
        <button
          onClick={handleReset}
          className="px-7 py-3 bg-gray-300 rounded text-black cursor-pointer"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Question;