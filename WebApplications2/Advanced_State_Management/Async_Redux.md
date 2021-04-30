# Async Redux

State machine - a mathematical model of computation.

A machine can have a finite number of states, but it can only operate in one state at a time.

There are different types of state machines, but for building UIs (and understanding Redux), we'll concentrate on the type that has an initial state. The next state is calculated based on input and the current state.

For our purpose, a State machine has:

* initial state (store)
* current state (store)
* inputs or actions (action creators) that trigger transitions (reducers) to the next state.

It helps to think in terms of state instead of transitions.

Redux is **NOT** a finite state machine, but the thinking in states helps our understanding of how Redux works.

A simple example would be an application that has two main parts:
1. a control dashboard
2. a display.

the application can be express in states and actions like so:

| Current state      | Action (input) | new state          |
| :---               |    :----:      |          ---:      |
| locked closed      | unlock         | unlocked closed    |
| unlocked closed    | lock           | locked closed      |
| unlocked closed    | open           | unlocked open      |
| unlocked open      | close          | locked close       |
| unlocked open      | lock           | locked open        |
| locked open        | unlock         | unlocked open      |


## Redux Middleware

Middleware is a common tool used in programming. You will see middleware used a lot when you start learning about NodeJS.

Middleware intercepts some process, runs a function at the intercept points, then (usually) continues the process or sometimes middleware stops the process entirely.

When whatever "process" in question is kicked off, there is usually data that is flowing through different functions. With middleware, when we "intercept" the process, we are usually trying to use that flowing data.

Middleware in Redux is very common and gives us a chance to do a few things with the data passing from action creators to the reducers. This is what it looks like with Redux:

Middleware intercepts every action before it flows through the Reducers.

Middleware can:

* stop actions
* forward an action untouched
* dispatch a different action
* dispatch multiple actions

We can have multiple middleware.

Middleware runs sequentially, in the order, they are defined.

Middleware is added to the store when it is created.

A traditional Redux applications flow like this:

1. A [Component] --> calls --> B [Action Creator]
2. B -- returns a --> C[Action]
3. C -- is dispatched to all D[Reducers]
4. D updates E[State]
5. E sends changes to A

When we add middleware, the flow changes to this:

1. A[Component] --> calls -> B[Action Creator]
2. B --> returns a --> C[Action]
3. C --> flows through all of D[Middleware]
4. D --> AND THEN --> dispatched to all E[Reducers]
5. E --> Updates F[State]
6. F --sends changes to A.

## Follow along - Adding a logger middleware library. 
