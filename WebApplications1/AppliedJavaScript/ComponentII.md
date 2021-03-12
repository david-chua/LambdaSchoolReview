# Component II

In javaScript, we have the concept of 'asynchronous code'. This simply means code that does not run instantly in line. Perhaps the code needs to wait a moment, wait for something to happen, or wait until data comes back from the server. Using asynchronous code can be challenging at first because we need to be able to recognize which code will be asynchronous and which will run instantly.

```
setTimeout( () => {
  console.log('Hello!');
  }, 1000);

console.log('Over here!');
```

Even if you have never seen **setTimeout** before, you probably realize this will wait a moment to run. If you run this code in your console, you should see **Over here!** print first because setTimeout will wait 1 second to run.

## Promises

We have a few different ways to approach asynchronous code, in the last example, we used callbacks. Other concepts are async/await and Promises.

Promises are design pattern for use when handling asynchronous code in JavaScript. We use them as an alternative to nesting multiple callbacks. You may have heard of the problem called **callback hell**. Promises are a way to avoid this problem.

Implementing promises is not something you'll need to do very often, especially in the front end development. However, understanding how they work under the hood will help you deal with them like when requesting data from web servers.

Learning how to handle promises is pretty straight forward. In fact, on a **Promise object** there are really only two methods that we need to use to handle promises. **then** and **catch**. for what we're trying to accomplish in terms of transferring data between our apps and some server somewhere, we will actually be using what is called a **Promise Library**.

Consider the following:

```
let time = 0;
const timeMachine  = () =>{
  return setTimeout(() => {
    return time += 1000;
    }, 1000);
}

timeMachine();
console.log(time); --> OUTPUTS: 0;
```

What we have seen here is that at some point in time, the setTimeout function(1 second later) will actually end up manipulating the time variable. However when we console.log time we get 0. The reason for this is because the way the time variable is defined. It is happening inside of a setTimeout block, which waits 1000ms to actually do its thing. This is an important concept to grasp here. Even though we've manipulated the data, we don't have access to the data that was manipulated quite yet.


#### From the MDN:

*A promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods. Instead of immediately returning the final value, the asynchronous methods returns a promise to supply the value at some point in the future.*

Simply put, a Promise is just that, a promise from the object that it will let us know when it has completed (or errored) what we have asked it to do. A promise can exist in one of three state:

* Pending: a state where the promise is neither rejected or fulfilled. (this is the state it is when we first call it).

* Fulfilled: a state where all's well and a resolved value can be used by our code.

* Rejected: a state where something went wrong and there is an error that needs to be dealt with.

If a promise succeeds, it will return a value as a parameter into a callback passed into **.then()**. If the promise fails, the callback passed into the **.catch()** runs, taking an error as its argument.

## Follow along:

Promises:

```
let time = 0;
const timeMachine = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve((time += 1000));
      }, 1000);
    });
};
```

Notice here that we've now wrapped our setTimeout function in a new Promise and we're resolving the addition of the time += 1000 and passing that resolved result. This allows us to do what we call promise chaining when we invoke our timeMachine function. Remember that every promise ships with then and catch methods and we can use those methods to either receive a resolved promise or rejected promise.

```
timeMachine()
  .then(newTime => {
      console.log(newTime); --> OUTPUTS: 1000
    });
```

In the above code, the timeMachine invocation is now receiving a callback itself, (this is how all promise chains should look) with some item being received as a parameter. We can chain multiple thens together. Inside of each then block when/if we return something new, we can be directed into a new then block. Or maybe we're resolving more than one process, and we want to see the next result in the next then block. Let's manipulate the data in the .then block we have now and see what happens when we use another then.

```

timeMachine()
  .then(newTime => {
    const myTime = newTime/1000;
    return `${myTime} seconds have passed`;
  })
  .then(newString => {
    console.log(newString); --> OUTPUTS " 1 second have passed";
  });
```

In our first then block we are manipulating the time that is originally being resolved by the Promise and then sequentially returning it with some text concatenated onto the time. Because we are returning a value from our first then statement, we can now chain on another then. And thus we have achieved some promise chaining. This isn't a terribly useful program at this point. But it can be improved.

Now let's make another function that we can use to return yet another promise. This is where some of then chaining  starts to really come in handy. We're going to have to refactor our code. ONLY where we're calling timeMachine. The function we're going to write is called parseTime and it will receive a ms mllisecond parameter that we can use to reject a promise in the future.

```
const parseTime = ms => {
  return new Promise((resolve, reject) => {
    const timeString = time/1000;
    resolve(`${timeString} seconds have passed`);
    });
};
```

Now that we've offloaded some work from our then block into a function that resolves a promise. We can now use it like above, but this time, when we call our timeMachine function we'll pass this parseTime function as an argument to our first then block.


```
timeMachine()
  .then(parseTime)
  .then(timePassed => {
    console.log(timePassed); --> OUTPUTS: "1 seconds have passed"
});
```

We've effectively achieved the same thing, but now we're chaining promises and their resolves together. This is Promise chaining. Now the last thing we need to cover is a rejected promise because up until now all the things have just worked. That is not the case in the real world, so because of that, we need to learn how to handle rejections.

Tweaking our parseTime function so we can reject a promise if a condition matches can be seen as follows:

```
const parseTime = ms => {
  return newPromise((resolve, reject) => {
    const timeString = time/1000;
    if (ms > 999){
      resolve(`${timeString} seconds have passed`);
    } else {
      reject(new Error('ms is less than 1 second promise rejected!'));
    }
    })
}
```


Changing the resolve portion of the timeMachine function to
``` resolve((time += 999));```

We will hit the reject portion of the code. this is where we introduce the catch block.

```
timeMachine()
  .then(parseTime)
  .then(timePassed => {
    console.log(timePassed); OUTPUT: DOES NOT RUN;
    })
  .catch(err => {
    console.log(err); --> OUTPUT: [Error: ms is less than 1 second promise rejected!]
    });
```
