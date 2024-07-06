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
  const [filteredTodos, setFilteredTodos] = useState([]);

  const addTodo = (todo) => {
    // console.log('todo : ',todo);
    // console.log('todos : ',todos);
    setTodos([...todos, { ...todo, completed: false }]);
  };

  const toggleStatus = (index) => {
    console.log(index);
    const newTodos = todos.map((todo, i) =>{
    console.log('todo : ',todo)
     return i === index ? {  completed: !todo.completed } : todo
    }
    );
    setTodos(newTodos);
  };
 
  const filterStatus = (status) => {
    if (status === 'all') {
      return todos;
    }
    return todos.filter(todo => 
      status === 'completed' ? todo.completed : !todo.completed
    );
  };


  return (
    <div className="App">
      <Input addTodo={addTodo} />
      <Filter filterStatus={filterStatus}/>
      <TodoList todos={todos}       toggleStatus={toggleStatus} />
    </div>
  );
}

export default App;
