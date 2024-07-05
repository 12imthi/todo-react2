// components/TodoList.js
import React from 'react';


function TodoList({ todos }) {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <div key={index} className="todo-item card">
          <div className="card-body">
            <h2 className="card-title">ToDo Name:  {todo.title}</h2>
            <p className="card-text">Description: {todo.description}</p>
            <div style={{display: 'flex',alignItems: 'center',marginBottom: '6px'}}>
              <h6 style={{marginRight: '10px'}}>Status : </h6>
              <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
        Completed
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
              Completed
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
               Not Completed
              </a>
            </li>
           
          </ul>
        </div>
            </div>
            <div className='edit'>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
