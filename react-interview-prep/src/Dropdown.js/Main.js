import React, { useState } from 'react';
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";

const Main = () => {
    const [selectValue, setSelectValue] = useState("");

    const handleChange = (e) => {
        setSelectValue(e.target.value);
    }
    const handleSelectValue = () => {
        switch(selectValue){
            case "option1":
                return <Component1 />;
            case "option2":
                return <Component2 />
            case "option3":
                return <Component3 />
            default:
                return null;
        }
    }

  return (
    <div className='flex flex-col gap-5 items-center'>
        <h1 className='font-bold'>Write a React component that displays a dropdown menu with different options.
            <br></br> When an option is selected, it should display a corresponding component or information.</h1>
        <select value={selectValue} onChange={handleChange}>
            <option>Select the Component</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>
        {
            handleSelectValue()
        }
    </div>
  )
}

export default Main