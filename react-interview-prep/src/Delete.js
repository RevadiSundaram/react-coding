import React, { useState } from 'react';
import { MdDeleteForever } from "react-icons/md";

const Delete = () => {
    const [itemsList, setItemsList]  = useState ([
      { id: 1, text: 'Item 1' },
      { id: 2, text: 'Item 2' },
      { id: 3, text: 'Item 3' },
      {id: 4, text: 'Item 4'}
    ]);
    const handleDelete = (id) => {
        const newf = itemsList.filter(item => item.id !== id);
        setItemsList(newf);
    }
  return (
    <div className='flex flex-col items-center'>
        <h2 className='font-bold'>Write a component that renders a list of items. Each item should have a delete button that removes the item from the list when clicked.</h2>
        <div className='mt-10'>

        
        {
            itemsList.map(item => 
                <div key={item.id} className='flex gap-5 items-center'>
                <p>{item.id}</p>
                <p>{item.text}</p>
                <MdDeleteForever className='cursor-pointer' onClick={ () => handleDelete(item.id)} />
                
                </div>
            )
    }
    </div>
    </div>
  )
}

export default Delete