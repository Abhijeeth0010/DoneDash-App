import React, { useEffect, useState } from "react";
import Taskform from "./components/Taskform";
import Tasklist from "./components/Tasklist";
import Progresstracker from "./components/Progresstracker";
import './Style.css'

export default function App() {
  
  const [tasks, settasks] = useState([]);
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  })


  const addTask = (task) => {
    settasks([...tasks, task]);
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    settasks(newtask);
  }

  const deleteTask = () => {
    tasks.filter((_,i) => i != index)
  }

  const clearTasks = () => {
    settasks([]);
  }

  return (
    <div className="App">
      <header>
        <h1 className="title">DoneDash</h1>
        <p className="tagline">Your friendly task manager</p>
      </header>
      <Taskform addTask={addTask}/>
      <Tasklist tasks = {tasks} 
      updateTask = {updateTask} 
      deleteTask = {deleteTask}/>
      <Progresstracker tasks = {tasks}/>
      {tasks.length > 0 && (<button onClick={clearTasks} className="clear-btn">Clear All Tasks</button>)}
      
    </div>
  )
}