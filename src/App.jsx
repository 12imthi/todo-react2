// App.js
import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import TodoList from './components/TodoList';
import Filter from './components/Filter';



function App() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [todoId, setTodoId] = useState(0); // Initialize todoId


  const addTodo = (todo) => {
    // console.log('todo : ',todo);
    // console.log('todos : ',todos);
    setTodos([...todos, { ...todo,id: todoId, completed: false }]);
    setTodoId(todoId + 1)
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

  const deleteClick = (id) => {
    console.log(id);
    const deleteCard = todos.filter(todo => todo.id !== id);
    setTodos(deleteCard)
  }
 
  const filterStatus = (status) => {
    console.log('status: ', status);

    if (status === 'Completed') {
      console.log('yes');
      setFilteredTodos(todos);
    } else {
      const completedStatus = status === 'completed';
      setFilteredTodos(todos.filter(todo => todo.completed === completedStatus));
    }

    // console.log('check: ', todos[0].completed);

  };

  

  return (
    <div className="App">
      <Input addTodo={addTodo} />
      <Filter filterStatus={filterStatus} todos={todos}/>
      <TodoList todos={todos}       toggleStatus={toggleStatus} deleteClick={deleteClick} />
    </div>
  );
}

export default App;
