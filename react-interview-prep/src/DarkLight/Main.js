import React, { useState } from 'react';
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";

const Main = () => {
    const [dark, setDark] = useState(false);
  return (
    <div className='flex flex-col items-center'>
        <h1>Light and Dark Mode</h1>

        <div className='flex gap-3 items-center mt-5'>
           <h2>{dark ? "Dark" : "Light"}</h2> 
           <button onClick={() =>setDark(!dark)}>{dark ? <MdOutlineDarkMode /> : <CiLight />}</button>
           </div>
        <div className={'border border-black mt-10 p-20 rounded-lg '+ (dark ? ' bg-black text-white': null)}>
            <h1>Toggle for Light and Dark Mode</h1>
        </div>
    </div>
  )
}

export default Main