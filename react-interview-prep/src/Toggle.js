import React, { useState } from 'react'

// Write a program to toggle a state between true and false when a button is clicked.

const Toggle = () => {

    const [toggle, setToggle] = useState(false);

  return (
    <div className='flex-col text-center'>
        <h1>Question : Write a program to toggle a state between true and false when a button is clicked.</h1>
        <h1>State : <span>{toggle ? "True" : "False"}</span></h1>
        <button className='p-2 m-2 bg-green-300 rounded-md' 
        onClick={() => {
            setToggle(!toggle)
            console.log(toggle);
        }}
        >Toggle</button>
    </div>
  )
}

export default Toggle