// components/Input.js
import React, { useState} from 'react';


function Input({ addTodo }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // useEffect(() => {
  //   console.log("Title:", title);
  //   console.log("Description:", description);
  // }, [title,description]); 


  const handleAddTodo = () => {
    console.log('passing',addTodo);
    if (title && description) {
      addTodo({ title, description });
      setTitle('');
      setDescription('');
    }
    else {
      alert('you have to fill two input')
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    // console.log("Title:", e.target.value); 
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
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
    </>
  );
}

export default Input;
