// src/components/TodoApp.js
import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  console.log('todos', todos);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos-ck')) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos-ck', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (todo) => {
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    setEditMode(false);
    setCurrentTodo(null);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEdit = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setCurrentTodo(todoToEdit);
    setEditMode(true);
  };

  return (
    <div className='max-w-md mx-auto mt-10'>
      <TodoForm
        addTodo={addTodo}
        editTodo={editTodo}
        editMode={editMode}
        currentTodo={currentTodo}
      />
      <div className='mt-4'>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleComplete}
            onEdit={startEdit}
            onDelete={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
