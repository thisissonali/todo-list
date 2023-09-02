import React from 'react'
import { TiTick } from "react-icons/ti";
import { MdOutlineDelete } from "react-icons/md";
function Todo({ allTodos }) {
    const todoElements = allTodos.map((item, index) => {
           return (
            <div key={index}>
                <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    
                </div>

                <div>
                    <TiTick />
                    <MdOutlineDelete />
                </div>
            </div>
           )
    });
    return (
      <>
        <div>
          <button>Todo's</button>
          {todoElements}
        </div>
        <div>
          <button>Completed Todo's</button>
        </div>
      </>
    );
   
}

export default Todo
