import React from 'react'

const InterviewQues = () => {

  const a = {};
  const b = {key: "b"};
  const c = {key: "c"};

  a[b] = 123; // a["[object Object]"] = 123
  a[c] = 456; //a["[object Object]"] = 456
  console.log(a);
  console.log(a[b]);


  return (
    <div>InterviewQues</div>
  )
}

export default InterviewQues