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
