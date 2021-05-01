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

Let's add a logger middleware library to React/Redux app
install using npm install redux-logger

Next import:

```
import logger form 'redux-logger';
```

Finally, we need to import a helper function from redux. This function is the **applyMiddleware** function. You can probably guess that we pass logger into this function. You would be correct but the **applyMiddleware** function is going to be inside the **createStore** function. It looks like this:

```
import { applyMiddleware, createStore } from 'redux';
import logger form 'redux-logger';

const store = createStore(
  reducer,
  applyMiddleware(logger0)
);
```

That is a very basic middleware package that will console.log your actions as they flow through the action creators, before they hit the reducers.

## Redux Thunk

Redux Thunk is a separate node package called redux-thunk. Since the Redux action --> reducer flow is synchronous, we will use Redux Thunk to make the flow asynchronous and make API calls from our action creators.

thunk is another word for a function. But it's not just any old function. It's a special (and uncommon) name for a function that's returned by another function like this:

```
function not_a_thunk(){
  // this one is a "thunk" because it defers work for later;
  return function(){
    console.log('do stuff now');
  };
}
```

So how does this apply to Redux? Well, when we start using the **redux-thunk** middleware, it does an interesting thing with our redux flow. When an action creator is called, **redux-thunk** intercepts and acts on returned data. If the thing returned is an action, it forwards the action through the reducer. But, if the thing returned is a function, aka a thunk ( a function returned from a function), then it invokes the thunk and passes the dispatch function as an argument to it.

This is where **redux-thunk** becomes very powerful. This action-creator returned thunk has access to the dispatch function. So we can run an async function, like an API call, and inside the **.then()** we can dispatch an action.  

Let's look at a simple example of an action creator that does this when a user logs in:

```
function logInUser(creds){
  // this returned function is the thunk, and gets dispatched passed in
  return function(dispatch){
    return axios.post('/login', creds).then(res => {
      const loggedInAction = { type: USER_LOGGED_IN, payload: res.data.user }
      dispatch(loggedInAction);
    });
  };
};
```

The thunk has access to dispatch and can dispatch a new action based on the result of the API call.

Cleaned up code:
```
const logInUser = creds => dispatch => {
  return axios.post('/login', creds).then(res => {
      const loggedInAction = { type: USER_LOGGED_IN, payload: res.data.user }
      dispatch(loggedInAction);
  });
}
```
Let's take an example of getting fetch pokemon functions

```
export const FETCH_POKEMON_START = "FETCH_POKEMON_START";

export const getPokemon = () => dispatch => {
  dispatch({ type: FETCH_POKEMON_START });
};
```

Now we'll go into the reducer and build a case for that action. Import the correct action type, and add an isFetching property to the initial state object. In this case, set isFetching to true, and reset the error back to an empty string, just in case it has an error in it.

```
import { FETCH_POKEMON_START } from '../actions';

const initialState = {
  pokemon: [],
  error: '',
  isFetching: false
}

function reducer(state = initialState, action){
  switch (action.type){
    case FETCH_POKEMON_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    default:
      return state;
  }
}

export default reducer;
```

Now back to the action creator to make our API call. To continue, we need to add axios as a dependency and import it to the action creator file. Then, make a GET request to 'https://pokeapi.co/api/v2/pokemon/'.

In the **.then()** and **.catch()**, we need to dispatch more actions. Inside the **.then()**, we will dispatch the **FETCH_POKEMON_SUCCESS** action and pass with it the data we get back from the API. If there is an error, we need to dispatch the **FETCH_POKEMON_FAIL** action and pass with it the error. Make two new action types for both cases, then build out the **.then()** and **.catch()**

```
import axios from 'axios';

export const FETCH_POKEMON_START = 'FETCH_POKEMON_START';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAIL = 'FETCH_POKEMON_FAIL';

export const getPokemon = () => dispatch => {
  dispatch({ type: FETCH_POKEMON_START })
  axios
    .get('https://pokeapi.co/api/v2/pokemon/')
    .then(res =>
      dispatch({type: FETCH_POKEMON_SUCCESS, payload: res.data.results })
    )
    .catch(err =>
      dispatch({type: FETCH_POKEMON_FAIL, payload: err })
    )
};
```

Finally, we will build the cases for our two new actions. In the reducer file, import our action types. Then build a case for each inside the reducer function.

```
import {
  FETCH_POKEMON_START,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAIL
} from '../actions';

const initialState = {
  pokemon: [],
  error: '',
  isFetching: false
}

function reducer(state = initialState, action){
  switch(action.type){
    case FETCH_POKEMON_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        pokemon: action.payload,
        isFetching: false,
        error: ''
      }
    case FETCH_POKEMON_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export reducer;
```
