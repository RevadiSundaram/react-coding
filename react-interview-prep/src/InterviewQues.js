import React from 'react'

const InterviewQues = () => {

  const user = {
    name: "Renu",
    age: 25
  }
  const strObj = JSON.stringify(user);

  localStorage.setItem("test", strObj); //setting the localStorage to test

  console.log(JSON.parse(localStorage.getItem("test"))); //getting the localStorage from test
  

  return (
    <div>InterviewQues</div>
  )
}

export default InterviewQues