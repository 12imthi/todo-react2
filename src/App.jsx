// App.js
import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import 'bootstrap/dist/css/bootstrap.min.css';
// index.js or App.js
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    console.log('todos: ',todos);
    console.log('todo: ',todo);
    setTodos([...todos, todo]);
  };

  return (
    <div className="App">
      <Input addTodo={addTodo} />
      <Filter/>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
