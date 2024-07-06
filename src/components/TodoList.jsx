import React from "react";

function TodoList({ todos, toggleStatus, editTodo, deleteTodo }) {
  return (
    <div className="todo-list">
      {todos.map((todo, i) => (
        <div key={i} className="todo-item card">
          <div className="card-body">
            <h2 className="card-title">ToDo Name: {todo.title}</h2>
            <p className="card-text">Description: {todo.description}</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "6px",
              }}
            >
              <h6 style={{ marginRight: "10px" }}>Status : </h6>
              <div className="dropdown btn-group dropup">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {todo.completed ? "Completed" : "Not Completed"}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => toggleStatus(i)}
                    >
                      {todo.completed ? "Not Completed" : "Completed"}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="edit">
              <button onClick={() => editTodo(index)}>Edit</button>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
