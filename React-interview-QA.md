# React
- React is an javascript library developed for building user interfaces particularly for single-page applications

# Major Features of React 
-

# Virtual DOM

# Why React is Fast

# Why React is not comaring real dom with virtual dom
- Real DOM tags has like 1000 properties inside a tag
- But virtual DOM has like 10 properties so it is diff to compare

# Diff btw state and useState
- 

# why useEffect will give warnings with async
- 

# useRef

# Hooks
- useState
- useEffect
- useContext
- useReducer
- useMemo
- useCallback
- useRef

# Higher Order Components (HOC)

# Lifecycle Components
- 3 Phases
- Mounting Phase
- Updating Phase
- Unmounting Phase

# State Management (All about data)
- State and Props
- Props Drilling
- React Context 

# React Concept which you have to study most

- [ ] useRef, useMemo, useCallback
- [ ] Custom Hooks
- [ ] React Context
- [ ] React Router
- [ ] Redux Toolkit


# Ref
- Not causing rerender
- Able to access DOM elements
- Persisting value across the app without rerendering

```js
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
```