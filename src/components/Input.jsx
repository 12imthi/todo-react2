import React, { useState, useEffect } from 'react';

function Input({ addTodo, editData, saveEdit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    console.log("editData",editData);
    if (editData) {
      setTitle(editData.title);
      setDescription(editData.description);
      setIsEditMode(true);
    }
  }, [editData]);

  const handleSaveTodo = () => {
    if (title && description) {
      if (isEditMode) {
        saveEdit(editData.id, title, description);
      } else {
        addTodo({ title, description });
      }
      setTitle('');
      setDescription('');
      setIsEditMode(false);
    } else {
      alert('Both title and description are required');
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <h1>MY-TODO</h1>
      <div className="input-card">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleSaveTodo}  className={`btn ${isEditMode ? 'btn-success' : 'btn-primary'}`}>
          {isEditMode ? 'Save Changes' : 'Add Todo'}
        </button>
      </div>
    </>
  );
}

export default Input;
