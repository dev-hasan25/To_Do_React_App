import React, { useState } from "react";

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
    
    function DownTask(index)
    {
        if (index < tasks.length - 1)
        {
            const updatedTasks = [ ...tasks ];
            [ updatedTasks[ index ], updatedTasks[ index + 1 ] ] =
            [ updatedTasks[ index + 1 ], updatedTasks[ index ] ]
            setTasks(updatedTasks)
        }
    }

    return(
        <>
            <div>
                <h1 className="App-title">To-Do APP</h1>
                <input
                    type = "text"
                    classNamename = "taskInput"
                    placeholder = "Input a New Task"
                    value= {newTask}
                    onChange= {(e)=>{handleInputChange(e)}}
                />
                <button
                    onClick={() => AddTask()}
                    className="addButton" >
                    Add Task
                </button>
            </div>
            <ol>
                { tasks.map((task, id) => 
                    <li key={id}>
                        <span className="task">{task}</span>
                        <button
                            className="moveUp"
                            onClick={() => UpTask(id)} >
                            Move 👆
                        </button>
                        <button
                            className="delete"
                            onClick={() => DeleteTask(id)} >
                            Delete
                        </button>
                        <button
                            className="moveDown"
                            onClick={() => DownTask(id)} >
                            Move 👇
                        </button>
                    </li>
                )}
            </ol>
        </>
    )
}