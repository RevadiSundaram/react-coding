import React from 'react';
import { MdDelete } from "react-icons/md";

const Task = ({task, completed, index}) => {
  return (
    <div className='m-2 p-2 border border-blue-400'>
    {
        <div className='flex justify-between'>
        <div className={completed ? "line-through" : ""}>{task}</div>
        <div className='flex gap-2 items-center'>
            <button className='p-1 text-xs bg-green-200' onClick={() => {
                completed = true
            }}>Complete</button>
            <MdDelete className='cursor-pointer text-red-600'  />
        </div>
        </div>
    }
    </div>
  )
}

export default Task