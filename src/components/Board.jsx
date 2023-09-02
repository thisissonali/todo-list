  import React from 'react'
  import { useState , useEffect} from 'react';
  import Todo from './Todo';
 
  function Board() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [view, updateView] = useState(false);  
    const [allTodos, setTodos] = useState([]);


    const handleTitleChange = (event) => {
      setTitle(event.target.value)
    }
    const handledescChange = (event) => {
      setDescription(event.target.value);
    };
    const handleClick = (event) => {
      let newTodoItem = {
        title: title,
        description: description,
        isCompleted:false
      }

      let updatedTodoArr = [...allTodos];
      updatedTodoArr.push(newTodoItem);
      setTodos(updatedTodoArr);
      setTitle('');
      setDescription('');
    }
  
    return (
      <>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>Title</label>
          <input type="text" value={title} onChange={handleTitleChange} />

          <label>Description</label>
          <input type="text" value={description} onChange={handledescChange} />
          <button onClick={handleClick}>Add</button>

        </form>
        <Todo allTodos={allTodos} />
        
      </>
    );
  }

  export default Board
