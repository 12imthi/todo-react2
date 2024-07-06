import React from "react";

function Filter({ filterStatus }) {
  return (
    <div className="filter">
      <div>
        <h4>ToDo-list</h4>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h4 style={{ marginRight: '10px' }}>Status Filter : </h4>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            All
          </button>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item" onClick={() => filterStatus('all')}>
                All
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => filterStatus('completed')}>
                Completed
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => filterStatus('notCompleted')}>
                Not Completed
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Filter;


