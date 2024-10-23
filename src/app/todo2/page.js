'use client';
import TodoApp from '@/components/TodoApp';
import React from 'react';
// import TodoApp from './components/TodoApp';

const App = () => {
  return (
    <div className='min-h-screen bg-gray-100 p-4'>
      <h1 className='text-3xl font-bold text-center mb-6'>Todo List</h1>
      {/* <TodoApp /> */}
      <TodoApp />
    </div>
  );
};

export default App;
