

const InterviewQues = () => {

const age = 10;
var person = {
  name: "Renu",
  age: 25,
  getAgeArrow: () => console.log(this.age),
  getAge: function(){
    console.log(this.age);
  }
}
var person2 = {age:24};
person.getAge().call(person2);
person.getAgeArrow();


  return (
    <div>InterviewQues</div>
  )
}

export default InterviewQues