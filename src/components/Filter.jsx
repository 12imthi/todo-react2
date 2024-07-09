import React from 'react';

function Filter({ filterStatus, filterLabel }) {
  return (
    <div className="filter">
      <div>
        <h4>ToDo-list</h4>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h4 style={{ marginRight: '10px' }}>Status Filter: </h4>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {filterLabel}
          </button>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item" onClick={() => filterStatus('All')}>
                All
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => filterStatus('Completed')}>
                Completed
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => filterStatus('Not Completed')}>
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
