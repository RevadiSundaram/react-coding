# Output Based Questions
# 1. 
```js
console.log("start");
    const promise1 = new Promise((resolve, reject) => {
        console.log(1);
        resolve(2);
    } )
    promise1.then((res) => {
        console.log(res);
    })
    console.log("end");
```
Output:
- start
- 1 (Because inside Promise it executes sync code)
- end
- 2

Explanation:
- JS will execute sync code first and then async code
- JS engine executes line by line.

# 2.
```js
    console.log("start");
    const promise1 = new Promise((resolve, reject) => {
        console.log(1);
        resolve(2);
        console.log(3);
    } )
    promise1.then((res) => {
        console.log(res);
    })
    console.log("end");
```
Output:
- start
- 1
- 3 (only async code will be kept in callback queue)
- end
- 2

# 3. 
```js
console.log("start");
    const promise1 = new Promise((resolve, reject) => {
        console.log(1);
        console.log(3);
    } )
    promise1.then((res) => {
        console.log("Result",res);
    })
    console.log("end");
```
Output:
- start
- 1
- 3
- end 

Explanation:
- Since there is no resolve it will not go to the .then() block 

# 4.
```js
    console.log("start");
    const func = () => new Promise((resolve, reject) => {
        console.log(1);
        resolve("success");
    } );
    console.log("Middle")
    func().then((res) => {
        console.log(res);
    })
    console.log("end");
```
Output:
- start
- Middle
- 1
- end
-  sucess

# 5.
<img src="image.png" width="600px" />
![alt text](<Screenshot 2024-10-06 at 3.11.24 PM.png>)

Output:
- success
- defeat
- error
- Error Caught
- Sucess: test

# 6. Write first promise and write second promise, which resolve first promise
resolve second promise and print first promise.

```js
const firstPromise = new Promise((resolve, reject) => {
        resolve("First");
    })

    const secondPromise = new Promise((resolve, reject) => {
        resolve(firstPromise);
    })

    secondPromise.then((res) => {
        return res
    }).then((res) => console.log(res));
```

# 7. Rewrite using async/await

<img src="image-1.png" width="600px" />

Ans:
```js
const loadJson =  async(url) =>{
        let response = await fetch(url);
        if (response.status == 200){
            let json = await response.json();
            return json;
        }
        throw new Error(response.status)
    }
    loadJson("https.//fakeurl.com/no-such-user.json").catch((err) => console.log(err));
```

# 8. Write Promise Recursively

<img src="image-2.png" width="600px" />

# 9. Make the form triggering first, then button, then div

<img src="image-3.png" width="600px" />
<img src="image-4.png" width="600px" />

Ans:
- Make form -> capture:true

# 10. Create a Modal which closes by clicking on Negative space (space outside the modal)

<img src="image-6.png" width="600px" />

# 11. Debouncing
- Create a button UI and debounce as follows:
- Show "Button Pressed <X> Times" every time button is pressed.
- Increase "Triggered <Y> Times" count after 800ms of debounce

# 12. Map, Filter and Reduce

```js
    const students = [
        {name: "Piyush", rollNum: 31, marks: 80},
        {name: "Jeny", rollNum: 15, marks: 69},
        {name: "Kushal", rollNum: 16, marks: 35},
        {name: "Divya", rollNum: 7, marks: 55}
    ]
    
    //Question - Return names with capital

    let capital = students.map((stu) => stu.name.toUpperCase());
    // console.log(capital);

    //Question - Return only details of those who scored more than 60 marks

    let mark = students.filter((stu) => stu.marks > 60);
    // console.log(mark);

    //Question - More than 60 marks and rollnum greater than 15

    let both = students.filter((stu) => (stu.marks > 60) && (stu.rollNum > 15));
    // console.log(both);

    //Question - Sum of marks of all students
    let sum = students.reduce(((acc, cur) => acc + cur.marks),0);
    // console.log(sum);

    //Question - Return only names of students who scored more than 60

    let name = students.filter((stu) => stu.marks > 60).map((stu) => stu.name);
    // console.log("names ", name);

    //Question - Return total marks for students with marks greater than 60 
    // after 20 marks have been added to those who scored less than 60

    let total = students.map((stu) => {
        if(stu.marks < 60){
            stu.marks = stu.marks+20;
        }
        return stu;
        
    }).filter(stu => stu.marks > 60)
    .reduce((acc, cur) => acc+cur.marks,0);
    console.log(total)
```

# 13. Function Scope

- if var then
```js
    for(var i=0; i<5;i++){
        setTimeout(function (){
            console.log(i);
        }, i*1000);
    }
```
Output:
5 5 5 5 5
- If let
```js
    for(let i=0; i<5;i++){
        setTimeout(function (){
            console.log(i);
        }, i*1000);
    }
```
Output:
0 1 2 3 4
Solution:
- Var doesnt have block scope
- let has block scope

# Output?
```js
    var x=21;
    var fun = function(){
        console.log(x);
        var x=20;
    }
    fun();
```
Output:
undefined
- Bcoz if we have the same variable in the local scope it doesnt check the global scope for var

# Output?
```js
    const fn = (a, ...num, x,y) =>{
        console.log(x,y);
    }
    fun(5,6,3,2);
```
Output: Error - Rest operator should be last 

#
```js
    const fn = (a,x,y,...num) =>{
        console.log(x,y);
        console.log(num);
    }
    fn(5,6,3,2,1,0);
```
Output: 
- 6,3
- 2,1,0

# Output?
```js
    let count = 0;
    (function printCount(){
        if(count === 0){
            let count = 1; //shadowing
            console.log(count); //1
        }
        //count = 0
        console.log(count); //0
    })();
```
Output: 1 0

# write a function which allows you to do the below
```js
    var addSix = createBase(6);
    addSix(10);
    addSix(21);
```
```js
    function createBase(num){
        return function(innerNum){
            console.log(num+innerNum)
        }
    }
    var addSix = createBase(6);
    addSix(10); //return 16
    addSix(21); //retuns 27
```
# Time Optimization
```js
    function find(index){
        let a = [];
        for(let i=0; i< 1000000; i++){
            a[i] = i*i;
        }
        console.log(a[index]);
    }
    console.time("6");
    find(6);
    console.timeEnd("6");
    console.time("50");
    find(50);
    console.timeEnd("50")
```
- After Optimization
```js
    function find(){
        let a = [];
        for(let i=0; i< 1000000; i++){
            a[i] = i*i;
        }
        return function(index){
            console.log(a[index]);
        }
        
    }
    const closure = find();
    console.time("6");
    closure(6);
    console.timeEnd("6");
    console.time("50");
    closure(50);
    console.timeEnd("50")
```
# setTimeout Output
```js
    for(var i=0; i<3; i++){
        setTimeout(function log(){
            console.log(i);
        },i * 1000)
    }
```
Output: 3 3 3
- Bcoz var is not block scope, var is function scope
- So everytime value of i changes, it will increase and last value is 3 so after that it runs the setTimeOut block, so 3 is printed 3 times after 3000ms
```js
    for(let i=0; i<3; i++){
        setTimeout(function log(){
            console.log(i);
        },i * 1000)
    }
```
Output: 0 1 2
- Bcoz let is block scope
- Storage of value
```js
{0} {1} {2}
```
- So after iteration is done, in setTimeout block it refers the each reference of i and prints it after each i ms
- Using only var make output of 0 1 2
```js
    for(var i=0; i<3; i++){
        function inner(i){
        setTimeout(function log(){
            console.log(i);
        },1000);
        }
        inner(i);
    }
```
- Now with closure we can achieve this
- it will create a whole memory for everytime the function runs and gives us results 0 1 2

# Using Closure to create private counter


# Multiply each value by 2
```js
  let nums = {
    a: 100,
    b: 200,
    title: "Name is",
  }
  multiply(nums);

  function multiply(obj){
    for( key in obj){
      if(typeof obj[key] === "number"){
          obj[key] = obj[key] * 2;
      }
    }
  }
  console.log(nums);
```
Output: 200, 400, Name is

# Output?
```js
  const a = {};
  const b = {key: "b"};
  const c = {key: "c"};

  a[b] = 123; // a["[object Object]"] = 123
  a[c] = 456; //a["[object Object]"] = 456
  console.log(a);
  console.log(a[b]);
```
Output: 456

- Object cannot be converted into a key unless it is a string
- When it tried to assign 456 it overrides, so we got an output 456

# Output?
```js
 console.log([..."Lydia"]);
 ```
Output:
- 'l','y','d','i','a'

# Output?
```js
  const user = {
    name: "Lydia",
    age: 21
  }
  const admin = {
    admin: true,
    ...user
  }
  console.log(admin);
```
Output: 
- {admin: true, name: 'Lydia', age: 21}

# Output?
```js
  const settings = {
    username: "Renu",
    level: 19,
    health: 90
  };
  const data = JSON.stringify(settings, ["level", "health"]); //If we give specific properties into an array, JSON will only stringify those
  console.log(settings);
  console.log(data);
```
Output:
- {"level":19,"health":90}

# Output?
```js
  const shape = {
    radius: 10,
    diameter(){
      return this.radius * 2;
    },
    perimeter: () => 2* Math.PI*this.radius,
  };
  console.log(shape.diameter()); //20 - Regular Function "this" points to local object
  console.log(shape.perimeter()); //NaN - Arrow fun "this" points to global object
  //since there is no global object called radius, it has undefined, we are calculating undefined so NaN
```
# Whats wrong?
```js
  function getItems(fruitList,...args, favFruit,){ //rest paramter should be last in param list
    return [fruitList, ...args, favFruit] //spread operator can be used in between
  }
  console.log(getItems(["banana","apple"],"pear","orange"));
```
Solution:
```js
  function getItems(fruitList, favFruit,...args){ //rest paramter should be last in param list
    return [fruitList, ...args, favFruit] //spread operator can be used in between
  }
  console.log(getItems(["banana","apple"],"pear","orange"));
```

# Output:
```js
  let person = {name: "Renu"};
  const members= [person]; //members[0] = {name:"Renu"}
  person = null;
  console.log(members)
```
Output: 
- 0: {name: 'Renu'}

```js
  let person = {name: "Renu"};
  const members= [person]; //members[0] = {name:"Renu"}
  person.name = null;
  console.log(members); // 0:{name:null}
```
# Output?
```js
  const value = {number: 10};
  const multiply = (x={...value}) => { //default assigning if no parameters
    console.log(value);
    console.log(x.number);
    console.log((x.number *= 2))
  }
  multiply(); //20
  multiply(); //20
  multiply(value); //20
  multiply(value); //40
  //while calling 3 and 4, it will be multiply(x){}
  //since 3rd call  has modified the number to 20, 4th call will be 40
```
# Output?
```js
function calcAge(person){
  person.age = 25; //modifying will affect the reference
  person = {       //Reassigning will not affect the reference
    name: "John",
    age: 50
  };
  return person;
}
const personObj1 = {
  name: "Alex",
  age: 30,
}
const personObj2 = calcAge(personObj1);
console.log(personObj1);
console.log(personObj2);
```
Output:
- personObj1 - {name: 'Alex', age: 25}
- personObj2 - {name: 'John', age: 50}

# Output?
```js
  const user = {
    firstName: "Renu",
    getName(){
      const firstName = "Revadi";
      return this.firstName;
    }
  }
  console.log(user.getName()); //Renu
  //this points to user object
```
# Output?
```js
  function makeUser(){
    return{
      name: "Renu",
      ref: this
    }
  }
  let user = makeUser();
  // console.log(user.ref.name); //nothing
  console.log(user); //{name: 'Renu', ref: undefined}
  //this points to parent object (window)
```
- fix this by changing ref to function
```js
  function makeUser(){
    return{
      name: "Renu",
      ref(){
        return this;
      }
    }
  }
  let user = makeUser();
  console.log(user.ref().name); //Renu
```
# Output?
```js
const user = {
  name: "Renu",
  greet(){
    return `Hello, ${this.name}`;
  },
  farewell: () => {
    return `Hey, ${this.name}`
  }
}
console.log(user.greet()); //Hello, Renu
console.log(user.farewell()); //Hey, 
```
- Bcoz in arrow function this points to global 

# Create an Object calculator
```js
  const calculator = {
    read() {
      this.a = +prompt("Enter value for a",0);
      this.b = +prompt("Enter value for b", 0);
    },
    sum(){
      return this.a+this.b
    },
    mul(){
      return this.a*this.b
    }
  }
  calculator.read();
  console.log(calculator.sum());
  console.log(calculator.mul());
```
# Output?
```js
  var length = 4;
  function callback(){
    console.log(this.length);
  }
  const obj = {
    length: 5,
    method(fn){
      fn();
    }
  }
  obj.method(callback); //4 
  // Bcoz we are calling inside the method function, if length is not there then it will check the global object 
```
# Output?
```js
  var length = 4;
  function callback(){
    console.log(this.length);
  }
  const obj = {
    length: 5,
    method(){
      arguments[0](); //arguments[callback,2,3]
    }
  }
  obj.method(callback,2,3); //3
  //arguments is an array. Array in itself is an object. so the parent is an array. length of arguments is 3
```
# Implement calc
```js
  const result = calc.add(10).multiply(5).subtract(30).add(10);
  console.log(result.total);
```
```js
  const calc = {
    total: 0,
    add(a){
      this.total += a;
      return this; //we are writing this because we are calling all the methods which are attached to this
    },
    subtract(a){
      this.total -= a;
      return this;
    },
    multiply(a){
      this.total *= a;
      return this;
    }
  }
  const result = calc.add(10).multiply(5).subtract(30).add(10);
  console.log(result.total);
```
# Output?
```js
  const person = { name: "Renu"};
  function sayHi(age){
    return `${this.name} is ${age}`
  }
  console.log(sayHi.call(person, 25)); //Renu is 25
  console.log(sayHi.bind(person, 25)); //gives us function to execute later on
  const bindF = sayHi.bind(person, 25);
  console.log(bindF());
```
# Output?
```js
  const age = 10;
  var person = {
    name: "Renu",
    age: 20,
    getAge: function(){
      return this.age
    }
  }
  var person2 = {age:25};
  console.log(person.getAge.call(person2)); //25 it is referring to person2 Obj
  console.log(person.getAge.apply(person2)); //25
  console.log(person.getAge.bind(person2)()); //25
```
# Output?
```js
  var status = "Cool";
  setTimeout(() => {
    const status = "Love";
    const data = {
      status: "Avacado",
      getStatus: function(){
        return this.status
      }
    }
    console.log(data.getStatus()); //Avacado
    console.log(data.getStatus.call(this)); //Cool
    //Bcoz setTimeout is pointing to global object, so "this" will point to Cool
  }, 0);
```
# Call printAnimals such that it prinnts all animals in object
```js
 const animals = [
    {species: "Lion", name: "King"},
    {species: "Whale", name: "Queen"}
  ]
  function printAnimals(i){
    this.print = function(){
      console.log("#"+i+" "+this.species+": "+this.name)
    }
    this.print();
  }
```
```js
  for(let i=0; i<animals.length; i++){
    printAnimals.call(animals[i],i)
  }
```
# Find Min and Max
```js
  const numbers = [5,6,2,3,4,7];
  console.log(Math.max.apply(null, numbers)); //7
  console.log(Math.min.apply(null,numbers)); //2
```
# Output?
```js
  function f(){
    console.log(this);
  }
  let user = {
    g: f.bind(null)
  }
  user.g(); //window object
```
# Output? Bind Chaining
```js
  function f(){
    console.log(this.name);
  }
  f = f.bind({name: "John"}).bind({name: "Ann"})
  f(); //John
```
- Once the function has binded to the object, it will always be binded to that
- Bind chaining doesn't exist
# Fix the code
```js
  function checkPassword(success, failed){
    let password = "jhkAS";
    if(password === "Renu") success();
    else failed();
  }
  let user = {
    name: "Revadi Sundaram",
    loginSuccessful(){
      console.log(`${this.name} logged in`)
    },
    loginFailed(){
      console.log(`${this.name} failed to log in`)
    }
  }
  //checkPassword(user.loginSuccessful, user.loginFailed) //undefined failed to log in
  checkPassword(user.loginSuccessful.bind(user), user.loginFailed.bind(user)); //Revadi Sundaram failed to login
```
# Same with single value
```js
  function checkPassword(success, fail){
    let password = "hgjhkj";
    if(password === "Renu") success();
    else fail();
  }
  let user = {
    name: "Revadi Sundaram",
    login(result){
      console.log(this.name+ (result ? " login successfull ": " login failed "));
    }
  }
  checkPassword(user.login.bind(user,true), user.login.bind(user, false));
```
