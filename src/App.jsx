import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import TodoList from './components/TodoList';
import Filter from './components/Filter';

function App() {
  const [todos, setTodos] = useState([]);

  console.log('main todo :' , todos);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filterLabel, setFilterLabel] = useState('All');
  const [todoId, setTodoId] = useState(0);
  const [editData, setEditData] = useState(null);

  const addTodo = (todo) => {
    const newTodo = { ...todo, id: todoId, completed: false ,isEditing: false };
    setTodos([...todos, newTodo]);
    setFilteredTodos([...todos, newTodo]);
    setTodoId(todoId + 1);
  };

  const toggleStatus = (index) => {
    const newTodos = todos.map((todo, i) => {
      console.log("todo",todo);
    return  i === index ? { ...todo, completed: !todo.completed } : todo
  });
    setTodos(newTodos);
    setFilteredTodos(newTodos);
  };

  const deleteClick = (id) => {
    const deleteCard = todos.filter(todo => todo.id !== id);
    setTodos(deleteCard);
    setFilteredTodos(deleteCard);
  };

  const filterStatus = (status) => {
    setFilterLabel(status);
    if (status === 'All') {
      setFilteredTodos(todos);
    } else if (status === 'Completed') {
      setFilteredTodos(todos.filter(todo => todo.completed));
    } else if (status === 'Not Completed') {
      setFilteredTodos(todos.filter(todo => !todo.completed));
    }
  };


 
  const startEdit = (id) => {
    const todoToEdit = todos.find(todo => todo.id === id);
    setEditData(todoToEdit);
  };
  

  const saveEdit = (id, updatedTitle, updatedDescription) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, title: updatedTitle, description: updatedDescription, isEditing: false } : todo
    );
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
    setEditData(null); // Clear editData after saving
  };
  
  return (
    <div className="App">
      <Input addTodo={addTodo} editData={editData} saveEdit={saveEdit}/>
      <Filter filterStatus={filterStatus} filterLabel={filterLabel} />
      <TodoList filteredTodos={filteredTodos} toggleStatus={toggleStatus} deleteClick={deleteClick} startEdit={startEdit} />
    </div>
  );
}

export default App;
