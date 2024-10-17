import React, { useState } from 'react';
import { data } from './data';

const Main = () => {
   let [currentQuestion, setCurrentQuestion] = useState(0);

   const handleNext = () =>{
    setCurrentQuestion(currentQuestion++);
    if(currentQuestion === data.length){
        currentQuestion = 0;
    }
   }
  return (
    <div>
        {data[currentQuestion].question}
        
        <button className='bg-blue-400 border p-2' onClick={handleNext}>Submit</button>
    </div>
  )
}

export default Main