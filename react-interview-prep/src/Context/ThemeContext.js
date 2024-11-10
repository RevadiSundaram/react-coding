import React,{useContext} from 'react';
import { ContextLightDark } from './Main';

const ThemeContext = () => {
    const darkTheme = useContext(ContextLightDark);

  return (
    <div className='font-extrabold w-[500px] h-[100px] p-5 m-5 rounded-lg'>
        <h1 className={darkTheme ? 'bg-black text-white' : ' bg-white text-black'}>Theme Context</h1>
    </div>
  )
}

export default ThemeContext