import React from 'react'

const InterviewQues = () => {

    for(var i=0; i<3; i++){
        function inner(i){
        setTimeout(function log(){
            console.log(i);
        },1000);
        }
        inner(i);
    }
    

  return (
    <div>InterviewQues</div>
  )
}

export default InterviewQues