import React, { useEffect, useState } from "react";
import Taskform from "./components/Taskform";
import Tasklist from "./components/Tasklist";
import Progresstracker from "./components/Progresstracker";

export default function App() {
  
  const [tasks, settasks] = useState([]);
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  })


  const addTask = (task) => {
    settasks([...tasks, task]);
  }

  return (
    <div>
      <h1>DoneDash</h1>
      <p>Your friendly task manager</p>
      <Taskform addTask={addTask}/>
      <Tasklist tasks = {tasks} 
      updateTask = {updateTask} 
      deleteTask = {deleteTask}/>
      <Progresstracker />

      <button>Clear All Tasks</button>
    </div>
  )
}