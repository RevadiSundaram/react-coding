import React, { useState } from 'react';
import { data } from './data';

const Main = () => {
    const [answer, setAnswer] = useState([]);
    const [final, setFinal] = useState();

    const handleChange = (e) =>{
        console.log(e.target.id);
        setAnswer([...answer, e.target.id]);
    }
    const handleSubmit = () => {
        let count = 0;
        console.log(answer);
        
        for(let i=0; i<data.length; i++){
            
            if(data[i].correct === answer[i]){
                count++;
            }
        }
        setFinal(count);
    }
  return (
    <div className='border p-10 justify-center self-center flex flex-col'>
        <h2 className='text-center font-bold py-2'>Quiz App</h2>
        {data.map((each,index) =>{ 
            return <div key={index} className='p-2'>
                    <h2 className='font-extrabold pb-2'>{index+1}.{each.question}</h2>
                    {each.options.map((item,index) => {
                        return <div key={index}>
                            <input type='radio' id={item} name={`option${index+1}`} onChange={handleChange} />
                            <label htmlFor={item} className='pl-2'>{item}</label>
                        </div>
                    })}
                    
                </div>
        })}
        <button className='p-2 my-5 border  bg-blue-400' onClick={handleSubmit}>Submit</button>
        {console.log(final)}
        <p>{ final && `You scored ${final} out of ${data.length}` } </p>
    </div>
  )
}

export default Main