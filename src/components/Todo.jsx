import React, { useState } from 'react'
import { TiTick } from "react-icons/ti";
import { MdOutlineDelete } from "react-icons/md";
import "../components/Todo.css";
function Todo({ allTodos, deleteTodo, completeTodo }) {

    console.log(allTodos);

    const todoElements = allTodos.map((item, index) => {
           return (
             <div key={item.id} className="sample">
               <div>
                 <h2>{item.title}</h2>
                 <p>{item.description}</p>
               </div>

               <div>
                 <button onClick={() => completeTodo(item.id)} className="tick">
                   <TiTick />
                 </button>
                 <button onClick={() => deleteTodo(item.id)} className='delete'>
                   <MdOutlineDelete />
                 </button>
               </div>
             </div>
           );
    });
      const todoItemsToRender = todoElements.filter(
        (item) => !item.isCompleted
      );
    return (
      <>
        <div className='sample2'>
          {todoItemsToRender}
        </div>
      </>
    );
   
}

export default Todo
