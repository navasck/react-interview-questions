// src/components/TodoItem.js
import React from 'react';

const TodoItem = ({ todo, onToggle, onEdit, onDelete }) => {
  return (
    <div className='flex items-center justify-between p-2 border-b'>
      <div className='flex items-center'>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className='mr-2'
        />
        <span className={`${todo.completed ? 'line-through' : ''}`}>
          {todo.text}
        </span>
      </div>
      <div>
        <button onClick={() => onEdit(todo.id)} className='text-blue-500 mx-1'>
          Edit
        </button>
        <button onClick={() => onDelete(todo.id)} className='text-red-500 mx-1'>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
