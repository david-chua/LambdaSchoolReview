# The Reducer Pattern

The difficulties of storing and efficiently performing logic on data within components become more and more apparent as the amount of data increases. Consequently, as components grow and deal with large sets of data, the storing and transportation of state across the entire application increasingly becomes more and more cumbersome as well. Reducers offer one possible way to address this problem within the component. At the level of the application, an elegant combination of Context API with reducers provides one possible way that React developers can manage global state.

## Redux

Redux is a very sophisticated UI - Component Library that can be used together with a few other libraries to build out large scale Single Page Applications. But as our Applications scale in size so too will the data that we are concerned with within our applications. And you can only start to imagine how difficult it might be to manage all of that data inside of React components. Redux is a library that can help solve this problem by providing a single source of truth for our data within our application. As your team grows, and as your application scales, Redux can help offset the pains that can be brought on as a result of complexity.

## Async Redux

By nature Redux is synchronous. Because of this, we need to apply some middleware to extend the functionality of Redux package to allow for things like, promises (which are aynchronous). This Async redux module will this how to setup Redux-Thunk as a middleware.

## Context API

In the typical react applicaiton, state is passed top down (parent to child) via props, but this can become very cumbersome quickly, especially when those props are required by many components across your application. However, with the introduction of react's Context API, you no longer have to pass props down from component to component - prop drilling. We can now store data on a context object, and retrieve that data in the necessary components from the context object, not props.

## The Reducer Pattern.

Mutable objects are objects whose state is allowed to change over time. An immutable value is the exact opposite - after it has been created, it can never change. There are some real benefits from making your state immutable.

## Predictability

Mutation hides change, which can create (unexpected) side effects. This can lead to some nasty bugs in our code. When we enforce immutability, we can keep our application architecture and mental model simple, which makes it easier to reason about the application. Simply put, it is very easy to predict how state object will change based on certain actions/events. Without immutability, our state object can be changed or updated in unpredictable ways, causing weird behaviors and/or bugs.

## Mutation Tracking

Immutability makes it really easy to see if anything has changed. For example when we change the state in Redux, our components props will update. We can check our previous props against our new props to know what change occurred, and know how to handle those changes. If a user adds tasks to the todo list, the TodoList component will update since it is receiving new props. But what if we want to run an animation on the new todo? We can't just run it on every render because it would run when the user toggles a task to complete or deletes a task. Since Redux state management is immutable, we can track the changes that happen on the state, and only run our animation when a new task is added.

## Redux and Immutability

Redux ha s single immutable state tree (referred to as store) where all state changes are explicitly handled by dispatching actions. Dispatched actions are process by a reducer that accepts the previous state and the action and returns the next state of your application. It is easy to predict how the state tree is going to change based on actions that are dispatched. It is also easy to predict which action will be dispatched based on some event or interaction. This all leads to very predictable state management.

Writing immutable code can be tough - your JavaScript skills will really be tested here - and it may seem tedious especially since we will be building small apps with small state trees. Because of that it may be pretty hard to see the benefits. However, when you start working in larger application with huge state trees, you will quickly grow to appreciate the benefits of writing immutable code, and the extra effort it takes will make it worth the work.

 ## Reducer Follow Along

 Reducer functions take two arguments, the current state and action, and return a new, updated state object based on both arguments:

In psuedocode, the idea looks like:

```
(state, action) => newState
```

More specifically, consider a function in JavaScript that, when passed an integer, would return that value + 1 without mutating the original integer's value. Notice that we could pass is our initial state value - 0 - and return the new value - 1- without overriding the initial state.

```
cosnt initialState = 0;
const reducer = (state ) => {
  const newstate = state + 1
  return newState;
}

const newStateValue = reducer(initialState);
console.log(initialState, newStateValue) ; // 0, 1
```

Often, returning something such as an integer or string is not the best choice, especially as data grows more complex than previous examples.

Consider the previous example, where component's state utilizes an object as its data structure of choice:

```
const initialState = { count: 0 }
const reducer = (state) => {
  return { count: state.count + 1 }
}
```

Again, we are returning a new object and are not directly mutating or overriding the initial state object.

This reducer function is a pure function without any side effects. Reducer functions are the perfect fit for managing changes in state while maintaining the immutability we want in our components.

We've discussed the nature of the incoming state value, but what about the action?

The action, represented by an object, contains properties related to some action that happens in our apps. Every action object is required to have a type property, which will "inform" the reducer actions happening in the app. The type allows the reducer to know what part of the state needs to change.

## Follow Along

Looking at the reducer above, lelt's show it that we want to increment our count state by passing in an action with 'increment' as the type.

```
const initalState = { count: 0 }
const reducer(state, action) => {
  if (action.type === 'increment'){
    return { count: state.count = 1}
  }
}

reducer(initialState, { type: 'increment'})
```

the strategy is especially powerful when we want our reducer to be able to reduce the state. Take a look at our reducer now:

```
const initalState = {count: 0}
const reducer = (state, action) => {
  if (action.type === 'increment'){
    return { count: state.count + 1}
  } else if (action.type === 'decrement'){
    return { count: state.count -1 }
  }
}

reducer(initalState, { type: 'increment'})
reducer(initialState, { type: 'increment'})
```

Now our state management is very predictable. Our current state passes into the reducer, and an action follows to tell the reducer how to update the state.

We can also add a payload property to our action objects (sometimes called data). Our reducer needs to have some data passed into it through the action to be able to update the state correctly, and this is where the data would live.

```
const initalState = { name: "Donald Duck"}
const reducer = (state, action ) => {
  if (action.type === 'changeName'){
    // how do we know what to change the name to? The action payload?
    return { name: action.payload }
  }
}

reducer(initialState, { type: 'changeName', payload: 'Mickey Mouse' });
```

As you will see in the follow along, the action, and its associated property type, allows us to use the reducer to perform conditional state transformations.

The one last edit we need to make to get to production quality. As you can imagine, or if, if else, if else.. etc statements are going to get very complex and long. We'll use JavaScript's switch statements to make that part of our reducer a lot more readable:

Back to the count example, look at the change here:

```
const initalState = { count: 0 }
const reducer = (state, action) => {
  switch(action.type){
    case 'increment':
      return { count: state.count + 1}
    case 'decrement':
      return { count: state.count - 1}
    // "catch-all" which is to leav ethe state untouched.
    default:
      return state;
  }
}

reducer(initalState, {type: 'increment'})
reducer(initialState, {type: 'decrement'})
```


## Follow Along - useReducer hook

The useReducer hook is an alternative to useState(useState actually uses useReducer hook under the hood). It is preferable when you have complex logic that you have to deal with in a component, or when you find yourself with a lot of state properties (more than 3) in a single component. useReducer, takes in a reducer function (that we build), as well as the value of the initialState. Then it returns both the current state and a dispatch method in an array, just like useState does.

```
const [ state, dispatch ] = useReducer(reducer, initialState);
```

The dispatch method is a significant addition to our arsenal here. It will "dispatch" an action to our reducer when specific events occur in our application.  The dispatch allows us to powerfully combine the reducer from our previous section, with the ability to maintain our state at the level of the component.

The **useReducer** hook has all the functionality we love from the **useState** hook and combines it with the power of the reducers we are building ourselves. In doing so, it provides access to both the state and a function that dispatch actions to our reducer.

Example:

```
import React, { useReducer } from 'react';

const initalState = {count: 0 }
// inital count is established

// We will use the same reducer we created in the previous section
function reducer(state, action){
  switch(action.type){
    case: "INCREASE":
      return { count: state.count + 1}
    case: "DECREASE"
      return { count: state.count -1 }
    defaut:
      return state
  }
}

// Create a functional component
function Counter(){
  const [state, dispatch] = useReducer(reducer, initialState)

  //Return JSX that displays the count for the user
  // Note the two button elements which allow the user to increase and decrease the count.  Each of them contains an onClick event that dispatches the desired action object, with its given type.  Each action, when fired, is dispatched to the reducer and the appropriate logic is applied.
  return (
    <div>
      {/* Note, we have access to the current state and the dispatch method from the useReducer hook, so we can utilize them to display the count as well as couple the dispatching of the actions from the appropriate buttons.*/}
      <div className="count">Count: {state.count}</div>
      <button onClick={() => dispatch({type: 'INCREASE' })}>+1</button>
      <butotn onClick={() => dispatch({type: 'DECREASE' })}>-1</button>
    </div>
  )
}
```


Reducer Lecture Notes:

```
 // Goal: combine these four actiosn into a single calculator function, which we can call and tell it which action to run.

 const add = (a,b) => {
   return a + b;
 }

 const multiply = (a,b) => {
   return a*b;
 }

 const subtract = (a,b) => {
   return a-b;
 }

 const divide = (a,b) => {
   return a/b;
 }

  // Use a string to define the name of the action to be called.

  <!-- const calculator = (a,b, action) => {
    if (action === 'ADD'){
      return a +b
    } else if ( action === 'SUBTRACT'){
      return a-b
    } else if (action === 'MULTIPLY'){
      return a*b
    } else if (action === 'DIVIDE'){
      return a/b
    } else return
  } -->

Cleaned up:

 const calculator = (a,b,action) => {
   switch(action) {
    case "ADD":
      return a + b
    case "SUBTRACT":
      return a-b;
    case "MULTIPLY":
      return a*b;
    case "DIVID":
      return a/b;
   }
 }

 // Put our arguments into a "payload" object in the form {a: number, b: number}

 // also group the name of the action and the payload together
 // action: {type: "NAME_OF_ACTION", payload: {a: number, b: number}}
 // payload can be anything.

 More generally:
 //action: {type: 'NAME_OF_ACTION', payload: anything}

 // Remember:
 // type is just the name of the action to be performed
 // payload represents the arguments taht would be passed to the action if it were a standalone function.

const state = 0;

 const calculator = (state, action) => {
   switch(action.type) {
    case "ADD":
      return state + action.payload;
    case "SUBTRACT":
      return state - action.payload;
    case "MULTIPLY":
      return state * action.payload;
    case "DIVIDE":
      return a / action.payload;
    default:
      console.log("ERROR: ACTION NOT FOUND");
      return state;
   }
 }

 const state = 25

 const action = {type: "ADD", payload: 35}

 calculator(state,action) // -> 60


Another example:

const reducer = (state, action ) => {
  switch(action.type){
    case "ADD":
      return { ...state, currentValue: state.currentValue + action.payload };
    case "SUBSTRACT"
      return { ...state, currentValue: state.currentValue - action.payload };
    case "CLEAR":
      return { ...state, currentValue: 0 }
    case "ADD_TO_MEMORY":
      return { ...state, memory: state.currentValue };
    default:
      return state;
  }
}


```

Actions are always in the format;
{ type: string, payload; any }

If we're refactoring a bunch of independent functions into a reducers

these names correspond like this:

const add = (value) => {}
action = {type: "ADD", payload: value}
