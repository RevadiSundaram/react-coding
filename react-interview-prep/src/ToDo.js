import React, { useState } from 'react'

import Task from './Task';
import CreateTask from './CreateTask';

const ToDo = () => {
    const [task, setTask] = useState([
        {
            name: "Buy Groceries",
            completed: false
        },
        {
            name: "Water the plants",
            completed: true
        }
    ]);

    const addTask = (name) => {
        const newTask = [...task, {name, completed: false}];
    
        setTask(newTask);
       
    }

  return (
    <div>
        <h1>ToDo List</h1>
        <CreateTask addTask={addTask} />
        
        <div className=' p-2 m-2 border border-black'>
            {console.log(task)}
            {
                task.map((item, index) => 
                <Task key={index} index={index} task={item.name} completed={item.completed} />
                )
            }
        </div>
        
  
    </div>
  )
}

export default ToDo