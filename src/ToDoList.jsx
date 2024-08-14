import React, { useState } from 'react'

function ToDoList(){
    const [tasks, setTasks] = useState(["Wake up early in the morning","Take a Shower", "Have Breakfast" ]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim(" ") !== ""){
            setTasks(t => [...t, newTask])
            setNewTask("");
        }
        else{
            alert("Please enter a valid task");
            setNewTask("");
        }
        
    }

    function deleteTask(index){
        const updatetedTasks = tasks.filter((_, i)=> i !== index);
        setTasks(updatetedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatetedTasks = [...tasks];
            [updatetedTasks[index], updatetedTasks[index-1]] =[updatetedTasks[index-1], updatetedTasks[index]]
            setTasks(updatetedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length-1){
            const updatetedTasks = [...tasks];
            [updatetedTasks[index], updatetedTasks[index+1]] =[updatetedTasks[index+1], updatetedTasks[index]]
            setTasks(updatetedTasks);
        }
    }


    return (
        <div className='To-Do-List'>

            <h1>To Do List</h1>

            <div>
                <input 
                    type="text"    
                    name="list" 
                    id="list"
                    placeholder='Enter a new task...'
                    value={newTask}
                    onChange={handleInputChange} />
                    <button
                    className='add-btn'
                    onClick={addTask}>
                        Add
                    </button>
            </div>
            <ol>
                {tasks.map((task,index)=> 
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button 
                        className='delete-button'
                        onClick={()=>deleteTask(index)}>
                            Delete
                        </button>
                        <button 
                        className='move-button'
                        onClick={()=>moveTaskUp(index)}>
                            👆
                        </button>
                        <button 
                        className='move-button'
                        onClick={()=>moveTaskDown(index)}>
                            👇
                        </button>
                    </li>
                )}
            </ol>

        </div>
    )
}

export default ToDoList;