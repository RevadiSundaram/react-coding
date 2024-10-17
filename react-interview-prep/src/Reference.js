import React, { useState, useRef, useEffect } from 'react'

const Reference = () => {
    const [input, setInput] = useState('');
    const inputRef = useRef();
    const prevName = useRef('')

    useEffect(() => {
        prevName.current = input;
    },[input])

    const handleChange = (e) => {
        setInput(e.target.value);
    }
    const focusInput = () => {
        inputRef.current.focus();
    }
    const inputValue = () => {
        console.log(inputRef.current.value);
    }

  return (
    <div>
    <input type='text' ref={inputRef} value={input} className='border border-black py-2 px-10' onChange={handleChange} />
    <p>My name is {input} and it used to be {prevName.current}</p>
    <button className='bg-green-200 p-2' onClick={focusInput}>Focus</button>
    <button className='bg-green-200 p-2' onClick={inputValue}>Read Input Value</button>
    </div>
  )
}

export default Reference