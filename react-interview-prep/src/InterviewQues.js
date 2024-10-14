import React from 'react'

const InterviewQues = () => {

  const calc = {
    total: 0,
    add(a){
      this.total += a;
      return this; //we are writing this because we are calling all the methods which are attached to this
    },
    subtract(a){
      this.total -= a;
    },
    multiply(a){
      this.total *= a;
    }
  }
  const result = calc.add(10).multiply(5).subtract(30).add(10);
  console.log(result.total);


  return (
    <div>InterviewQues</div>
  )
}

export default InterviewQues