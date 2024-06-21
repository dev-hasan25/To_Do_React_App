import React, { useState } from "react";
import "./ToDo.css"


export default function ToDo()
{
    const [tasks, setTasks] = useState([ "go home", "eat food", "play online" ])
    const [newTask, setNewTask] = useState("");
        
    function handleInputChange(event)
    {
        setNewTask(event.target.value)
    }

    function AddTask()
    {
        if (newTask.trim() !== "")
        {
            setTasks(t => [...t, newTask]);
            setNewTask("")
        }
    }

    function DeleteAllTask()
    {
        const updatedTasks = []
        setTasks(updatedTasks);
    }

    function DeleteTask(index)
    {
        const updatedTasks = tasks.filter((_, id) => id !== index)
        setTasks(updatedTasks);
    }

    function UpTask(index)
    {
        if (index > 0)
        {
            const updatedTasks = [ ...tasks ];
            [ updatedTasks[ index ], updatedTasks[ index - 1 ] ] =
            [ updatedTasks[ index - 1 ], updatedTasks[ index ] ]
            setTasks(updatedTasks)
        }
    }
    

    return(
        <>
            <h1 className="App-title">To Do APP</h1>
            <div className="grid-container">
                <input
                    type = "text"
                    className= "item1"
                    placeholder = "Input a New Task"
                    value= {newTask}
                    onChange= {(e)=>{handleInputChange(e)}}
                />
                <button
                    onClick={() => AddTask()}
                    className="item2"
                >
                    Add Task
                </button>
            
                { tasks.map((task, id) => 
                    <li key={id} >
                        <div className="item3">{task}</div>
                        <button
                            className="item4"
                            onClick={() => UpTask(id)} >
                            👆
                        </button>
                        <button
                            className="item5"
                            onClick={() => DeleteTask(id)} >
                            🗑️
                        </button>
                    </li>
                )}
                <button
                    className="item6"
                    onClick={() => DeleteAllTask()} >
                    Clear All Tasks
                </button>
                
            </div>
        </>
    )
}