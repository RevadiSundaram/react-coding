import React, { useState } from 'react'

const CreateTask = ({addTask}) => {
    const [name, setName] = useState("");
  return (
    <form className='m-2 flex gap-5' onSubmit={(e) => e.preventDefault()}>
            <input type='text' placeholder='Add an item...' value={name} 
            className='border border-black p-2'
            onChange={(e) => {setName(e.target.value)
                
            }} />

            <button className='bg-gray-300 py-2 px-4 rounded-md' 
            onClick={() => {
                addTask(name);
                setName("");

            }}>Add</button>
        </form>
  )
}

export default CreateTask