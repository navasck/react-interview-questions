'use client';

import React, { useState, useEffect } from 'react';

const Interview = () => {
  // Curried function to find the sum of 3 numbers, without arrow functions
  function curriedSum3(a) {
    return function (b) {
      return function (c) {
        return a + b + c;
      };
    };
  }

  // Function currying to find the sum of 3 numbers
  const sum3 = (a) => (b) => (c) => a + b + c;

  // Function currying to find the sum of 4 numbers
  const sum4 = (a) => (b) => (c) => (d) => a + b + c + d;

  // Example usage of the curried function
  const add5 = sum3(5);
  console.log(add5, 'add5'); // add5 is a function that takes one argument and returns another function
  const add5and10 = add5(10);
  console.log(add5and10, 'add5and10');
  const finalSum = add5and10(15); // finalSum will be 30
  console.log(finalSum, 'finalSum');

  // Or you can call it all at once:
  const anotherSum = sum3(100)(200)(301); // anotherSum will be 601

  return (
    <div className='flex justify-center items-center h-screen flex-col gap-4'>
      <h1 className='text-2xl font-bold'>Currying Example</h1>
      <p>Sum of 3 numbers (5, 10, 15) using currying: {finalSum}</p>
      <p>Sum of 3 numbers (100)(200)(301) using currying: {anotherSum}</p>
    </div>
  );
};

export default Interview;
