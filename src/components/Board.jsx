import React from "react";
import { useState, useEffect } from "react";
import Todo from "./Todo";
import { getId } from "../utils/uuid";
import "../components/Board.css";

export const View = {
  PENDING: "PENDING",
  COMPLETED: "COMPLETED",
};

function Board() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [allTodos, setTodos] = useState([]);

  const [selectedView, setSelectedView] = useState(View.PENDING);

  const deleteTodo = (todoId) => {
    setTodos(
      allTodos.filter(function (todo) {
        if (todo.id === todoId) return false;
        return true;
      })
    );
  };

  const completeTodo = (todoId) => {
    const newTodos = allTodos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isCompleted: true,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handledescChange = (event) => {
    setDescription(event.target.value);
  };
  const handleClick = (event) => {
    let newTodoItem = {
      id: getId({ length: 5 }),
      title: title,
      description: description,
      isCompleted: false,
    };

    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <div className="bgColorr">
        <h1>My Todos</h1>

        <div className="innerDiv ">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="sample">
              <div className="title">
                <label>Title: </label>
                <br />
                <input
                  type="text"
                  value={title}
                  placeholder="What's the title of your Todo ? "
                  onChange={handleTitleChange}
                />
                <div>
                  <button className="btnPendSelec">
                    <button
                      onClick={() => setSelectedView(View.PENDING)}
                      // disabled={selectedView === View.PENDING}
                      className="tabPending"
                    >
                      Pending
                    </button>
                    <button
                      onClick={() => setSelectedView(View.COMPLETED)}
                      // disabled={selectedView === View.COMPLETED}
                      className="tabSelected"
                    >
                      Completed
                    </button>
                  </button>
                </div>
              </div>

              <div className="desc">
                <label>Description: </label>
                <br />
                <input
                  type="text"
                  value={description}
                  onChange={handledescChange}
                  placeholder="What's the description of your Todo ? "
                />

                <button className="btn" onClick={handleClick} type="submit">
                  Add
                </button>
              </div>
             
            </div>

      <Todo
        allTodos={allTodos.filter((todo) => {
          if (selectedView === View.PENDING && todo.isCompleted === false) {
            return true;
          } else if (
            selectedView === View.COMPLETED &&
            todo.isCompleted === true
          ) {
            return true;
          } else {
            return false;
          }
        })}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      />


          </form>
        </div>
      </div>
    </>
  );
}

export default Board;
