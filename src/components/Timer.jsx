import React from 'react';

const Timer = ({ time }) => {
  return (
    <div className="text-red-500 font-bold">
      Time Remaining: {time} seconds
    </div>
  );
};

export default Timer;