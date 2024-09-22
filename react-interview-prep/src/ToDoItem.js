import React from 'react';
import { MdDelete } from "react-icons/md";

const ToDoItem = ({value}) => {

    const deleteTask = () => {
        console.log("CLicked");
    }

  return (
    <div className='flex flex-col justify-between'>
        {
            value && value.map(item => 
            <div className='flex justify-between'>
              <p>  {item} </p>
              
            </div>
            )
        }
       
    </div>
  )
}

export default ToDoItem