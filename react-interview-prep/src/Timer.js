import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [seconds, setSeconds] = useState(60);
    useEffect(() => {
        setTimeout(()=> {
            setSeconds(seconds-1);
        }, 1000);
        
    },[seconds])
  return (
    <div>
        <h1>Write a program to create a countdown timer.</h1>
        <div className='font-bold flex mt-10'>
        {
            (seconds <= 0) ? <p>Times Up</p> : <h2>Countdown - {seconds}</h2>
        }
        </div>
    </div>
  )
}

export default Timer