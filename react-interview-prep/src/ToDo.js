import React, { useEffect, useState } from 'react';
import Task from './Task';
import CreateTask from './CreateTask';

const ToDo = () => {
    const [task, setTask] = useState( JSON.parse(localStorage.getItem("task")) ||
        [
        {
            name: "Buy Groceries",
            completed: false
        },
        {
            name: "Water the plants",
            completed: true
        }
    ]);
    
    useEffect(() => {
        let storedTask = localStorage.getItem("task");
        if(storedTask !== null){
            storedTask = JSON.parse(storedTask);
            setTask(storedTask);
        }
    },[]);

    useEffect(() => {
        window.localStorage.setItem("task", JSON.stringify(task));
    },[task]);

    const addTask = (name) => {
        if (name !== ''){
            const newTask = [...task, {name, completed: false}];
            setTask(newTask);
        }
        
    }

    const completeTask = (index) => {

        const newTask = [...task];
        newTask[index].completed = true;
        setTask(newTask);
    }

    const removeTask = (index) => {
        const newTask = [...task];
        newTask.splice(index,1);
        setTask(newTask);
    }

  return (
    <div>
        <h1>ToDo List</h1>
        <CreateTask addTask={addTask} />
        {
            task &&
        <div className=' p-2 m-2 border border-black'>
            
            {
                task.map((item, index) => 
                <Task key={index} index={index} task={item.name} removeTask={removeTask} completeTask={completeTask} completed={item.completed} />
                )
            }
        </div>
}
        
  
    </div>
  )
}

export default ToDo