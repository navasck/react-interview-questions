// src/components/TodoForm.js
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({ addTodo, editTodo, editMode, currentTodo }) => {
  // const [input, setInput] = useState(editMode ? currentTodo.text : '');
  const [input, setInput] = useState('');

  useEffect(() => {
    if (editMode && currentTodo) {
      setInput(currentTodo.text);
    } else {
      setInput('');
    }
  }, [editMode, currentTodo]);

  console.log('input of edit', input);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      editTodo({
        ...currentTodo,
        text: input,
      });
    } else {
      addTodo({
        // id: Math.floor(Math.random() * 10000),
        id: uuidv4(),
        text: input,
        completed: false,
      });
    }
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='flex p-2'>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='flex-grow border p-2 rounded mr-2'
        placeholder='Add a todo'
      />
      <button type='submit' className='bg-blue-500 text-white p-2 rounded'>
        {editMode ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default TodoForm;
