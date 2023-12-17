import "./App.css";
import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
export default function App() {
  const [input, setinput] = useState("");
  const [taskITems, settaskITems] = useState([]);

  function ItemsEvent(e) {
    setinput(e.target.value);
  }
  function addTask() {
    if (input.length > 0) {
      settaskITems((items) => {
        return [...items, input];
      });
    }
    
    setinput("");
  }
  const handleDelete = (index) => {
    let updatedTodo = [...taskITems];
    updatedTodo.slice(0,index);
    settaskITems(updatedTodo);
  }
  let totalTask = taskITems.map((items) => items.task).length;

  return (
    <div className="App">
      <div className="image-container">
        <h1>TO DO</h1>
      </div>
      <div className="Task-container">
        <div className="h1element">
          <h1>Task List</h1>
          <h1>Total Task {totalTask} added</h1>
        </div>
        {taskITems.map((item, index) => {
          return (
            <div className="task-items" key={index}> 
              <span>
                <MdCancel onClick={() => handleDelete(index)} />
                {item}
              </span>
            </div>
          );
        })}
        <input
          value={input}
          type="text"
          placeholder="Enter your Task"
          onChange={ItemsEvent}
          className="input-button"
        />
        <button className="button" onClick={addTask}>
          + Add Task
        </button>
      </div>
    </div>
  );
}
