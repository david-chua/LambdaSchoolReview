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

 
