import React,{createContext, useState} from 'react';
import ThemeContext from './ThemeContext';

export const ContextLightDark = createContext();

const Main = () => {
    const [darkTheme, setDarkTheme] = useState(true);

    function toggle(){
        setDarkTheme(!darkTheme);
    }
  return (
    <div>
        <ContextLightDark.Provider value={darkTheme}>
            <button className='p-2 bg-green-200' onClick={toggle}>Toggle Theme</button>
            <ThemeContext />
        </ContextLightDark.Provider>
    </div>
  )
}

export default Main