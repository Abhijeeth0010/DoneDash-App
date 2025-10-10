import React from "react";
import Taskform from "./components/Taskform";
import Tasklist from "./components/Tasklist";
import Progresstracker from "./components/Progresstracker";

export default function App() {
  return (
    <div>
      <h1>DoneDash</h1>
      <p>Your friendly task manager</p>
      <Taskform />
      <Tasklist />
      <Progresstracker />

      <button>Clear All Tasks</button>
    </div>
  )
}