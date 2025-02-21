import React, { useEffect, useState } from 'react';
import { getQuizHistory } from '../utils/indexedDB';
import { Link } from 'react-router-dom';

const Results = () => {
  const [quizHistory, setQuizHistory] = useState([]);

  useEffect(() => {
    const fetchQuizHistory = async () => {
      const history = await getQuizHistory();
      setQuizHistory(history);
    };
    fetchQuizHistory();
  }, []);

  // Function to format time
  const formatTime = (seconds) => {
    if (seconds >= 60) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}m ${remainingSeconds}s`;
    }
    return `${seconds}s`;
  };

  return (
    <div className="p-4 max-w-4xl mx-auto min-h-[100vh]">
      <Link to="/" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white font-semibold rounded-lg shadow-md text-lg cursor-pointer">
        Home
      </Link>
      <h2 className="text-2xl font-bold text-center mb-4">Quiz Results</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 rounded-lg shadow-md ">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Score</th>
              <th className="px-4 py-2">Time Taken</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {/* Mapping through quiz history entries in reverse order */}
            {quizHistory.length > 0 ? (
              quizHistory.slice().reverse().map((entry, index) => (
                <tr key={index} className="border-b border-gray-200 text-center hover:bg-gray-100 hover:text-black">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{entry.score}</td>
                  <td className="px-4 py-2">{entry.timeTaken ? formatTime(entry.timeTaken) : "N/A"}</td>
                  <td className="px-4 py-2">{new Date(entry.date).toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center text-gray-500 text-2xl">No quiz history available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Results;