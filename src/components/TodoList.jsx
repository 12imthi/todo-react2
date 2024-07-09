import React from "react";

function TodoList({ filteredTodos, toggleStatus ,deleteClick,startEdit}) {
  return (
    <div className="todo-list">
      {filteredTodos.map((todo, index,editData) => (
         <div key={index} className="todo-item card">
          <div className="card-body">
            <h2 className="card-title">ToDo Name: {todo.title}</h2>
            <p className="card-text">Description: {todo.description}</p>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "6px" }}>
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
                    <button className="dropdown-item" onClick={() => toggleStatus(index)}>
                      {todo.completed ? " Not Completed" : " Completed"}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="edit">
              <button onClick={() => startEdit(todo.id)}>Edit</button>
              <button onClick={() => deleteClick(todo.id)}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
