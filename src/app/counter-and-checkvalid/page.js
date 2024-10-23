'use client';

import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const handleAutoIncrement = () => {
    const time = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleValid = () => {
    if (value % 3 === 0 && value % 5 === 0) {
      const info = ` ${value} value is divisble by both 3 and 5`;
      setMessage(info);
    } else if (value % 5 === 0) {
      const info = ` ${value} value is divisble by 5`;
      setMessage(info);
    } else if (value % 3 === 0) {
      const info = ` ${value} value is divisble by 3`;
      setMessage(info);
    } else {
      const info = ` ${value} value is not divisble`;
      setMessage(info);
    }
  };
  console.log('message', message);
  return (
    <div className='counter flex flex-col w-full justify-center items-center gap-4 h-screen '>
      <p className='font-bold'>Count: {count}</p>
      <button
        onClick={handleIncrement}
        className='bg-orange-300 p-4 text-black rounded'
      >
        increase count
      </button>
      <button
        onClick={handleDecrement}
        className='bg-green-300 p-4 text-black rounded'
      >
        decrease count
      </button>
      <button
        onClick={handleAutoIncrement}
        className='bg-blue-300 p-4 text-black rounded'
      >
        auto increment
      </button>
      <div className='flex gap-2'>
        <input
          type='number'
          placeholder='enter number'
          onChange={handleChange}
          value={value}
          className='bg-white border rounded-xl p-4'
        />
        <button
          onClick={handleValid}
          className='bg-yellow-300 p-4 text-black rounded ml-3'
        >
          check valid
        </button>
        <p className='text-black'>{message}</p>
      </div>
    </div>
  );
};
export default Counter;
