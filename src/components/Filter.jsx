import React from "react";

function Filter() {
  return (
    <div className="filter">
        <div>
            <h4>ToDo-list</h4>
          </div>
      <div style={{display: 'flex',alignItems: 'center'}}>
        <h4 style={{marginRight: '10px'}}>Status Filter : </h4>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            All
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                all
              </a>
            </li>
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
    </div>
  );
}

export default Filter;
