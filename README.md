# react-coding

# JS Concepts

# var, let and const

# Scope
- var is a global scope
- let and const are block scope

# Variable Shadowing
- Can shadow let with let
- Can shadow var using let
- But cant shadow let using var (Illegal Shadowing)

# Declaration
- Can redeclare var in same scope
- Cant redeclare let and const in same scope
- We should always initialize const variables

Eg:
```js
var a = 10;
var a = 5; //accepted

let a = 10;
let a = 5; //not accepted

const a = 10;
const a = 5; //not accepted
```

# Re-Initialisation
- var and let can be reinitialized
- const cant be reinitialized

```js
var a = 10;
a = 5;      //accepted

let a = 10;
 a = 5;    //accepted

const a = 10;
a = 5;       //not accepted
```

# Hoisting
- Temporal Dead Zone - Time btw initialization and declaration of let and const

```js
console.log(a);
let a = 10;
```

# Map, Filter, Reduce

# Map
- create new array from existing array

```js
    const arr = [1,3,5,7];
    const mul = arr.map(num => num*2);
    console.log(mul);

    Array.prototype.myMap = function (cb){
        let temp = [];
        for(let i=0; i<this.length; i++){
            temp.push(cb(this[i]));
        }
        return temp;
    };

    const mul1 = arr.myMap((num => num *2));
    console.log(mul1);
```

# Filter
- Takes each element from the array and perform the condition
- If condition returns true, then corresponding element is push into the array
- If false, then it doesnt push into the array

```js
    const arr = [1,3,5,7];
    const great = arr.filter(num => num>3);
    console.log(great);

    Array.prototype.myFilter = function(cb){
        let temp = [];
        for(let i=0; i<this.length; i++){
            if(cb(this[i], i, this)){
                temp.push(this[i]);
            }
        }
        return temp;
    }

    const great1 = arr.myFilter(num => num >3);
    console.log(great1);
```

# Reduce
- this method reduces the array of elements into one element

```js
const arr = [1,3,5,7];
    const sum = arr.reduce((acc,sum) => {
        return acc+sum;
    },0);
    console.log("sum - ", sum);

    Array.prototype.myReduce = function (cb, initialValue){
        let acc = initialValue;

        for(let i=0; i<this.length; i++){
            acc = acc ? cb(acc,this[i],i,this) : this[i]
            
        }
        return acc;
    }

    const sum1 = arr.myReduce((acc,sum) => {
        return acc+sum;
    },0)
    console.log("sum1 - ",sum1)
```

# Diff btw map() and forEach()

- Map returns a new array, doesnt modify the original array
- forEach doesnt returns an array, modifies a original array
- we can do chaining on map (like filter or reduce)

# Functions

# Function Declaration/Definition/Statement
```js
function square(num){
  return num * num
}
square();
```
# Function Expression
- When storing the function inside a variable
```js
const square = function (num){
  return num * num
}
square();
```
# Anonymous function
- Function which has no name
```js
function (num){
  return num * num
}
```
# First Class Function
- Functions which treated as a variable
- Can call function inside another function
```js
    function square(num){
        return num * num;
    }
    function displaySquare(fn){
        console.log("Square is ", fn(5));
    }
    displaySquare(square);
```
# IIFE (Immediately Invoked Function Expression)
- Executed immediately

```js
    (function square(num){
        console.log(num * num);
    })(5);
```
```js
    (function square(x){
        return function(y){
            console.log(x);
        }(2);
    })(1);
```
Output: 1

# Function Scope
- Var doesnt have block scope
- let has block scope
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

# Function Hoisting
- Functions are hoisted globally (normal function)
- Complete function are added to the scope

```js
    funName();
    function funName(){
        console.log("Greetings!")
    }
```
Output:
Greetings

# Params vs Arguments
```js
function square(num){ //Params
  console.log(num*num); 
}
square(5); //Args
```

# Spread vs Rest Operator
```js
    function square(num1,num2){
        console.log(num1 * num2);
    }
    var arr = [5,6];
    square(...arr); //spread
```
```js
    function square(...nums){ //rest
        console.log(nums);
    }
    var arr = [5,6];
    square(...arr);
```

# Callback Function
- Function passed into another function as arguments
- Higher Order Function
```js
const message = function() {  
    console.log("This message is shown after 3 seconds");
}

setTimeout(message, 3000);
```

# Arrow Function
```js
    const sum = (a,b) => {
        console.log(a+b);
    }
    sum(2,3);
```
Regular function
```js
    const sum = function(a,b){
        console.log(a+b);
    }
    sum(2,3);
```
# Diff btw Arrow and Regular?
- Syntax
- Implicit Return Keyword in arrow
- Normal function should have return keyword if we are returning something
```js
    const sum = (a,b) => console.log(a+b);
    sum(2,3);
```
- Arguments keyword in normal fn
```js
function arg(num1, num2){
  console.log(arguments);
}
arg(5,6);
```
- arguments keyword not present in Arrow fn
- This keyword
```js
    let user = {
        username: "Revadi Sundaram",
        fun1: () => {
            console.log("Heyy "+ this.username)
        },
        fun2(){
            console.log("Heyy "+ this.username)
        },
    }
    user.fun1();
    user.fun2();
```
Output:
Hey undefined, Hey Revadi Sundaram
- fun1 is a arrow function, here "this" points to the global object, so undefined
- fun2 is regular function, here "this" points to the current, local object

# Closures
- function which references variables to outer scope from inner scope
- function bundled together along with its lexical environment
```js
    let/var username = "Revadi Sundaram";
    function local(){
        console.log(username);
    }
    local();
```
Output: Revadi Sundaram
```js
    function subscribe(){
        var name="Revadi Sundaram";
        function displayName(){
            alert(name);
        }
        displayName();
    }
    subscribe();
```
Output: alert box - Revadi Sundaram
- the function displayName forms the closure with lexical scope of parent function subscribe()
```js
    function subscribe(){
        var name="Revadi Sundaram";
        function displayName(){
            console.log(name);
        }
       return displayName;
    }
    subscribe()(); //both calling are equal
    var fun = subscribe();
    fun();
```
# Closure Scope Chain
- Every closure has three scopes local scope, outer fun scope, global scope
```js
// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20
```
- The inner function with d param has access to its all outer function scopes, global scopes and local scope

# Currying
- Currying is a function that takes one argument at a time and returns a new function expecting the next argument. It is a conversion of functions from callable as f(a,b,c)into callable as f(a)(b)(c).
- Num of argument = num of function returning

# Why should we use currying
- To avoid passing same variable again and again
- It divides one function into multiple functions so that one handles one set of responsibility.
- Higher Order Function

# Working
- Currying is a function that takes multiple arguments as input. It transform the function into a number of functions where every function will accept one argument.

```js
function fun(a,b){
        console.log(a,b)
    }
    // fun(5,6)
    
    function f(a){
        return function (b){
            return `${a} ${b}`
        }
    }
    console.log(f(5)(6));
```
```js
function sum(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
console.log(sum(2)(6)(1));
```
```js
    function evaluate(operation){
        return function(a){
            return function(b){
                    if(operation === "sum") return a+b;
                    else if(operation === "multiply") return a*b;
                    else if(operation === "divide") return a/b;
                    else if(operation === "subtract") return a-b;
                    else return "Invalid Operator"
                }
        }
    }

//    console.log(evaluate("multiply")(5)(6));
    const mul = evaluate("multiply");
    console.log(mul(5)(6));
    console.log(mul(2)(3));
```
- So we can initialize the operator function once and we can call again and again

# Infinite Currying => sum(1)(2)(3)....(n)
```js
    function add(a){
        return function(b){
            if(b) return add(a+b);
            return a;
        }
    }
    console.log(add(5)(2)(4)(8)());
```

# Currying vs Partial Application
- Partial Application transforms a function into another function 
- Mixing currying with partial

```js
    function add(a){
        return function(b,c){
            return a+b+c
        }
    }
   const x = add(10);
   console.log(x(5,6));
   //or
   console.log(add(10)(5,6))
```

# Manipulating DOM with currying

<img src="image-7.png" width="600px" />
<img src="image-8.png" width="600px" />

- We are taking the selector and updating it with currying
- We can update the name so many times

# curry() Implementation
- converts f(a,b,c) into f(a)(b)(c)

# Objects
- Objects are key value pairs in Js
```js
    const user={
        name: "Revadi Sundaram",
        age: 25,
        "like this video": true,
    };
    user.name = "Revadi R S"; //Modifying the property
    delete user.age; //deleting a property
    console.log(user.name);
    console.log(user["like this video"]);
    delete user["like this video"];
```
- Dynamic key-value pairs
```js
    const property = "fullName";
    const name = "Revadi Sundaram";

    const user = {
        [property] : name,
    }
    console.log(user);
```
- Looping through objects - forin
```js
const user = {
    name: "Revadi Sundaram",
    age: 25,
    isAwesome: true
}
    for (each in user){
        console.log(each);
    }
```
# Duplicate keys
```js
  const obj = {
    a: "one",
    b: "two",
    a: "three"
  }
  console.log(obj);
```
- If there are two keys with the same name, then the first one will be replaced









# Synchronous vs Asynchornous
- JS executes synchronous code first then Async code

# Callbacks

```js
console.log("start");

function importantAction(message, cb){
    setTimeout( ()=>{
        cb(`Helloo I am ${message}`);
    }, 1000);
}
function another(message,cb){
    setTimeout(() => {
        cb(`Heyyyy I am ${message} `);
    },500)
}

const action = importantAction("Renuu", function (message){
    console.log(message);
    another("Renuuuu",function (message){
        console.log(message);
    })
});
console.log("stop");
```
Output:
start
stop
Hellooo I am Renuuu
Heyyy I am Renuuu

- Nesting of Callback functions makes our code messy -> Pyramid of doom -> Concept is called Callback Hell
- Solution is Promises

# Promise
- Relationship btw Mother and a Child
- If a Child promises he does the work (fulfills a promise) then he will get a reward
- If not then he dont (rejects a promise)

```js
console.log("start");
const PromiseFunc = new Promise((resolve, reject) => {
    setTimeout(()=>{
        const result = true;
        result ? resolve("Finished the work given by Mom") : reject("Not done the work given my Mom")
    },2000);
}) 
PromiseFunc.then((res)=> {
    console.log(res);
})
.catch((err)=> {
    console.log(err);
})
console.log("stop");
```
Output:
start
stop
Finished work given ny Mom

- If console.log(PromiseFunc) in above you get promise<pending>
- After 2 secs it will be fullfilled inside and "Finished the work"
- If by default you want to get promise<fullfilled> then
- Similar for reject as well

```js
const promisefun = Promise.resolve("Finished the work");
promisefun.then((res)=>{
    console.log(res);
})
```
Output:
Finished the work
If just console promisefun alone => promise<fullfilled>

# Rewriting Callback with Promises

```js
    console.log("start");
    function importantAction(message){
        return new Promise((resolve, reject) => {
            setTimeout( ()=>{
                resolve(`Helloo I am ${message}`);
            }, 1000);
        })
        
    }
    function another(message){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`Heyyyy I am ${message} `);
            },500)
        })
        
    }
    importantAction("Renuuu").then ((res) => {
        console.log(res);
        another("Another").then((res) => {
            console.log(res);
        })
    }).catch((err) => {
        console.log(err);
    });
    console.log("stop");
```
Output:
start
stop
Hellooo I am Renu
Heyyy I am Another

- The above code is again messy creating Pyramid of doom. we will execute promise chaining

# Promise Chaining

```js
importantAction("Renuuu").then ((res) => {
        console.log(res);
        return another("Anotherrr");
    }).then((res)=>{
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });
```
- The above is cleaner approach
- every call to a .then returns a new promise
- When a handler returns a value, it becomes the result of that promise, so the next .then is called with it.

# Promise Combinators

# Promise.all()
- If we want to execute many promises in parallel
- Takes an array with all of promises 
- If any one of the Promise fails, this will all fail, it will not go to .then() block

```js
Promise.all([
        importantAction("Renuuu"),
        another("Anotherrr")
    ]).then((res) => {
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    });
```
Output:
start
stop
Hello I am Renuu
Heyy I am Another


```js
Promise.all([
        importantAction("Renuuu"),
        another("Anotherrr")
    ]).then((res) => {
        console.log(res);
    }).catch((err)=>{
        console.log("Error in promise - ", err);
    });
```
Output:
Error in promise - Heyy I am from Another (we rejected the second)

# Promise.race()
- It will return the first promise whether it is fulfilled or rejected (with shorter time)
- If another has short wait time of 500ms, then it will return as rejected

# Promise.allSettled()
- Even if any one fails, it will return all the promises

# Promise.any()
- It will only return the first fulfilled promise and ignores the rejected
- If all promises are rejected, it will go to catch block and gives Error

# Async/Await
- if we want promises to be executed one after the other
- Await will wait until the promise is fulfilled/rejected state
- since we are using async operations using await we use async in the function

```js
 const result = async () =>{
        try{
            const message1 = await importantAction("Renuuu");
            const message2 = await another("Anotherrr");
            console.log(message1, message2);
        }
        catch(err){
            console.log("Promise error in",err)
        }
        finally{
            console.log("This will run if error is there or not")
        }
    }
    result();
```

# Event Propagation
- The sequence of the events occurring btw these

- Eg:
<img src="image-3.png" width="600px" />
<img src="image-4.png" width="600px" />

# Event Bubbling
- Bubble goes from bottom to top
- According to example, the events will fire like => button => form => div
- Normal behaviour of events
- event.target - will give what our target is (bubble bottom) (button)
- this.target == event.currentTarget (div, form) (as it is)

# Events that do not bubble
- Focus, Blur
- Any events specific to one element do not bubble: focus, blur, load, unload, change, reset, scroll, most of the DOM events (DOMFocusIn, DOMFocusOut, DOMNodeRemoved, etc), mouseenter, mouseleave, etc

# Event Capturing/Trickling
- Make the events fire from top to bottom?
- {capture: true}

# How to stop Bubbling or Capturing
- Add e.stopPropagation() whereever you dont want to log

# Event Delegation
- Suppose we have 6 cards and a parent div
- Instead of adding events (adding links in the example) to each card, we add the event to the parent

<img src="image-5.png" width="600px" />


# Throttling
- infinite scrolling in Twitter
- when we click the scrolling to the middle (eg: 500px of our webpage), it fetches many api calls and gives us results
- dont make API call before 500ms

# Debouncing
- Searchbox in Flipkart
- in searchbox it makes an API call whenever my keystroke reaches 400 ms
- dont make API call before 400ms


# LocalStorage

```js
  // Load TODOs from local storage on app startup
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // Update local storage whenever TODOs change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
```
