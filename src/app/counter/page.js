'use client';

import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const incrementCycle = () => {
    const id = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    setIntervalId(id);
  };

  useEffect(() => {
    if (count === 20) {
      clearInterval(intervalId);
    }
  }, [count, intervalId]);

  return (
    <div className='flex justify-center items-center h-screen flex-col gap-4'>
      <p>{count}</p>
      <div className='flex gap-5'>
        <button className='bg-slate-950 text-white p-3' onClick={increment}>
          Increment
        </button>
        <button className='bg-slate-950 text-white p-3' onClick={decrement}>
          Decrement
        </button>
        <button
          className='bg-slate-950 text-white p-3'
          onClick={incrementCycle}
        >
          Increment cycle
        </button>
      </div>
    </div>
  );
};

export default Counter;
