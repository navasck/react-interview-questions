'use client';
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);

  const addTodo = (text) => {
    setTodos([...todos, { id: Math.random(), text, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditClick = (todo) => {
    setCurrentTodo(todo);
  };

  const handleSaveEdit = (text) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === currentTodo.id ? { ...todo, text } : todo
    );
    setTodos(updatedTodos);
    setCurrentTodo(null);
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold text-center mb-8'>Todo List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        handleEditClick={handleEditClick}
        currentTodo={currentTodo}
        handleSaveEdit={handleSaveEdit}
      />
    </div>
  );
}

function TodoInput({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Add a todo...'
      />
      <button type='submit'>Add</button>
    </form>
  );
}

function TodoList({
  todos,
  deleteTodo,
  handleEditClick,
  currentTodo,
  handleSaveEdit,
}) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          handleEditClick={handleEditClick}
          currentTodo={currentTodo}
          handleSaveEdit={handleSaveEdit}
        />
      ))}
    </ul>
  );
}

function TodoItem({
  todo,
  deleteTodo,
  handleEditClick,
  currentTodo,
  handleSaveEdit,
}) {
  const handleDelete = () => deleteTodo(todo.id);

  let content;
  if (currentTodo && currentTodo.id === todo.id) {
    content = (
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          value={currentTodo.text}
          onChange={(e) => handleSaveEdit(e.target.value)}
          className='ml-5'
        />
        <button
          className='bg-slate-950 text-white p-3'
          type='button'
          onClick={() => handleSaveEdit(currentTodo.text)}
        >
          Save
        </button>
      </form>
    );
  } else {
    content = (
      <>
        {todo.text}
        <button
          className='bg-slate-950 text-white p-3'
          onClick={handleEditClick.bind(null, todo)}
        >
          Edit
        </button>
        <button className='bg-slate-950 text-white p-3' onClick={handleDelete}>
          Delete
        </button>
      </>
    );
  }

  return <li>{content}</li>;
}

export default App;
