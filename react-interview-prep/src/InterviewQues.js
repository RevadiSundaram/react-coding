import React from 'react'

const InterviewQues = () => {

    const students = [
        {name: "Piyush", rollNum: 31, marks: 80},
        {name: "Jeny", rollNum: 15, marks: 69},
        {name: "Kushal", rollNum: 16, marks: 35},
        {name: "Divya", rollNum: 7, marks: 55}
    ]
    
    //Question - Return names with capital

    let capital = students.map((stu) => stu.name.toUpperCase());
    console.log(capital);

    //Question - Return only details of those who scored more than 60 marks

    let mark = students.filter((stu) => stu.marks > 60);
    console.log(mark);

    //Question - More than 60 marks and rollnum greater than 15

    let both = students.filter((stu) => (stu.marks > 60) && (stu.rollNum > 15));
    console.log(both);

    //Question - Sum of marks of all students
    let sum = students.reduce(((acc, cur) => acc + cur.marks),0);
    console.log(sum);

    //Question - Return only names of students who scored more than 60

    let name = students.filter((stu) => stu.marks > 60).map((stu) => stu.name);
    console.log("names ", name);

    //Question - Return total marks for students with marks greater than 60 
    // after 20 marks have been added to those who scored less than 60

    let great = students.filter((stu) => stu > 60);
    let less = students.filter((stu) => stu.marks < 60).map((stu) => stu.marks+20);
    console.log("last");
    console.log(great.marks+less.marks);
    

  return (
    <div>InterviewQues</div>
  )
}

export default InterviewQues