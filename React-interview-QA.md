# React

# Virtual DOM

# Why React is Fast

# Why React is not comaring real dom with virtual dom
- Real DOM tags has like 1000 properties inside a tag
- But virtual DOM has like 10 properties so it is diff to compare

# Diff btw state and useState
- 

# why useEffect will give warnings with async
- 

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

# Output Bases Questions
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
![alt text](image.png)
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

![alt text](image-1.png)

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

![alt text](image-2.png)

