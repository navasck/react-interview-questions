'use client';

import React, { useState } from 'react';

const DivisibilityChecker = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [result, setResult] = useState('');
  const handleInputChange = (e) => {
    setInputNumber(e.target.value);
  };
  const handleCheckDivisibility = () => {
    const parsedNumber = parseInt(inputNumber, 10);

    if (isNaN(parsedNumber)) {
      setResult('Please enter a valid number.');
    } else {
      let message = '';
      // Modulus (% operator):
      if (parsedNumber % 3 === 0 && parsedNumber % 5 === 0) {
        message = 'Divisible by both 3 and 5';
      } else if (parsedNumber % 3 === 0) {
        message = 'Divisible by 3';
      } else if (parsedNumber % 5 === 0) {
        message = 'Divisible by 5';
      } else {
        message = 'Not divisible by 3 or 5';
      }
      setResult(message);
    }
  };

  return (
    <div className='flex justify-center items-center gap-5 h-screen'>
      <label>
        Enter a number :
        <input
          className='border ml-3 p-4'
          type='text'
          value={inputNumber}
          onChange={handleInputChange}
        />
      </label>
      <button
        className='bg-slate-900 text-white p-4'
        onClick={handleCheckDivisibility}
      >
        Check Divisibility
      </button>
      <p>{result}</p>
    </div>
  );
};

export default DivisibilityChecker;
