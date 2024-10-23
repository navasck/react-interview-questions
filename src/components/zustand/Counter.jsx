'use client';
import { userStore } from '@/zustand-hooks/store';
import React from 'react';

const Counter = () => {
  const { count, incrementFtn, decrementFtn } = userStore();
  return (
    <div className='text-center'>
      <h1 className='text-4xl'> Counter: {count}</h1>
      <div className='mt-4'>
        <button
          className='mr-2 bg-blue-500 text-white  px-4 py-2'
          onClick={incrementFtn}
        >
          Increment
        </button>
        <button
          className='bg-red-500 text-white px-4 py-2'
          onClick={decrementFtn}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
