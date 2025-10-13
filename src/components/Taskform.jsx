import { useState } from "react"

export default function Taskform({addTask}) {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('medium');
    const [category, setCategory] = useState('General');

    const handlesubmit = (e) => {
        e.preventDefault();
        addTask({text: task, priority, category, completed: false});
    
        //reset
        setTask('');
        setPriority("medium");
        setCategory("General");
    }
 
    return (
        <div>
            <form onSubmit = {handlesubmit} id="task-form">
                <div id = "inp">
                    <input type="text" placeholder="Enter the task" value={task}
                    onChange={(e) => setTask(e.target.value)}/>
                    <button type="submit">Add Task</button>
                    {/* <h1>{task}</h1> */}
                </div>

                <div className="btns">
                    <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                        <option value= "High">High</option>
                        <option value= "Medium">Medium</option>
                        <option value= "Low">Low</option>
                    </select>
        
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="general">General</option>
                        <option value="work">Work</option>
                        <option value="personal">Personal</option>
                    </select>
                    {/* <h1>{priority}</h1><h1>{category}</h1> */}
                </div>
            </form>
        </div>
    )
}