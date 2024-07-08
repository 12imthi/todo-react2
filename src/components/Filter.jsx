import React, { useState } from "react";

function Filter({ filterStatus, todos }) {
  const [filterLabel, setFilterLabel] = useState('All');

  // const handleFilterClick = (status, label) => {
  //   filterStatus(status);
  //   setFilterLabel(label);
  // };
  console.log(todos);
  return (
    <div className="filter">
      <div>
        <h4>ToDo-list</h4>
      </div>
      {todos.map((todo, index) => (
        
        <div key={index}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h4 style={{ marginRight: '10px' }}>Status Filter : </h4>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {todos.id}
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item" onClick={() => filterStatus(index)}>
                    All
                  </button>
                </li>
                {/* <li>
                  <button className="dropdown-item" onClick={() => handleFilterClick('completed')}>
                    Completed
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => handleFilterClick('Not Completed')}>
                    Not Completed
                  </button>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Filter;
