# Redux

Redux is a predictable state management library for JavaScript applications and is the most popular state container for React applications. By now, we have discovered that building out applications using React requires a lot of forethought to give an application scalability. Specifically, we have noticed some complications around the area of state-management.

"Which of my components should have state vs which of my components should just be a way to present DOM elements?"

This is the biggest dilemma with React. In fact, the Facebook team that built React in the first placed noticed that managing state could become a nightmare at scale were they only to use component state. So they built a pattern and said "everyone here at Facebook is going to write code after this pattern." This way, they could eliminate many of the problems that unwieldy state-full components could surface. That pattern was called **Flux**, and it's primarily use case was to add some stringency to the React ecosystem because by itself, React is very un-opinionated in how one should be designing their application and managing state.

Flux was great but developers had a hard time with implementation because the pattern presented a few other problems. Because of this, (and around the same time that React was becoming so popular), Dan Abramov built out a "time-traveling" approach to debug an application. tHis method eventually became known as Redux. Dan wanted to be able to go back in time to see when/where the state had changed in his application, and to do that, he ended up creating one of the most popular state-management libraries known to React developers today.

Redux is a small, light-weight state container for use when building JavaScript applications.

The core concepts/principles of Redux are 3 fold:

# The Store:

Everything that changes within your application is presented by a single JavaScript object known as the store. The store contains our state for our application.

## Application state is immutable

When the application state changes, we clone the state object, modify the clone, and replace the original state with the new copy. We never mutate the original object, and we never write to our store object.

## Pure functions change our state

Given the same input, a pure function returns the same output every time. All functions (reducers) in Redux must be pure functions. Meaning they take in some state and description of what changes took place and return a copy of our state.

Redux is pretty simple at its core, the complications with Redux arise when we try and implement it within a React application. Usually, these issues are because there is some new syntax, and it's just a matter of time spent learning to sort them out.

## Redux Store

Ini this section, we'll learn to create the Redux Store and how to use a library called **react-redux** to connect our React application to the Store. Because Redux is a standalone library, (meaning it can be used on its own or with another library/framework for state-management and data flow) we have to use a second helper package that will enable us to string together Redux within a React application. That package is called **React-Redux**.

We need to reiterate the fact that Redux has no relation to React. You can write Redux app with React, Angular, Ember, jQuery, or vanilla JavaScript.

## Follow Along: Enabling Redux within a React application.

First create a React app - you can use create-react-app to create one.

```
npm instasll react-redux redux
```

Now that we have **redux** and **react-redux** installed, let's learn how to set it up within our application. We will use the **createStore** function from redux, so let's import that first.

```
import { createStore } from 'redux';
```

**createStore** will take in a single reducer that represents the state(data) of our application globally. We need to create a store variable, and use **createStore** to create the Redux store.

```
const store = createStore(reducer);
```

You'll notice that we passed a reducer into **createStore**, but we don't have a reducer yet. We'll learn more about reducers soon. For now, let's create a function called **reducer** that returns an object representing our state.

```
function reducer() {
  return {
    title: "Hello World! I'm in the Redux store!",
  }
}

const store = createStore(reducer);
```

Now that we have a store, we want to make our application aware of it. The way this works is that react-redux gives us a <Provider></Provider> component that wraps around our entire application. We will pass our newly created store to that component as prop.

Within our  Root Component (usually index.js), go ahead and import Provider from react-redux.

```
import { Provider } from 'react-redux';
```

Then all we need is to wrap our <App/> with the <Provider> component and pass store prop set equal to the store we created. This will look like this:

```
<Provide store={store}>
  <App/>
</Provider>
```

## Overview

Now that we have built a store to manage our state, we need to connect our components to that store. We can do so using the **connect** function, within the components themselves. We can also build a helper function within the component files to tell the **connect** function what pieces of state we want to access. This function is usually named mapStateToProps, and it will map pieces of our Redux state to the props of our components.

```
{
  user: {
    name: "David"
  },
  movies: [
    'Star Wars',
    'Lord of the Rings',
    'Harry Potter'
  ],
  todoList: [
    { task: 'Learn Redux', id: 0, completed: false }
  ],
  moviesToWatch: 13
}
```

Now create a component called MovieList. Next we'll take a look at the syntax we use to connect our React component to Redux, then we'll talk about it. To start, import the **connect** function into your component.

```
import { connect } from 'react-redux';
```

Next, we use the **connect** function, where we export the component at the bottom of the file. We invoke **connect** twice(function currying). First the two arguments - a function and an object. Second with just the component we are trying to connect. For now, we'll pass null and {} into the first invocation.

```
// export default MovieList; Not this way if we are connecting this component.
export default connect(null, {})(MovieList)
```

NOw **MovieList** is connected to the store. Let's write our mapStateToProps function now, to tell connected which pieces of our state we want to bring into this component. This function takes in state as a parameter, then returns an object where the properties can be passed to props, and the values are retrieved from the store for our component.

For a **MovieList** component, we could probably only want to know about the movies array and the moviesToWatch number, maybe the user object. We'll not worry about the **todoList**, since our component doesn't need to know about that part of our state. Let's bring those three pieces into our component.

```
const mapStateToProps = state => {
  return {
    movies: state.movies,
    moviesToWatch: state.moviesToWatch,
    user: state.user
  }
}
```

Let's pass this in as the first argument to the first **connect** invocation. Notice that **state** is being passed into this function. Under the hood, connect passes our entire state tree to **mapStateToProps**. That means that within that function, we have access to all our state via the **state** argument. But the component only receives the pieces of state that we turn out of **mapStateToProps**.

```
export default connect(mapStateToProps, {})(MovieList)
```

Now if you look at the props in the React tools, you will see that all three pieces of our state have been passed to our component through the connect function! As a side note, other props we've passed to this component the traditional way are still going to be available.

## Actions

Actions in Redux are packets of information that contains an action type and associated data.

In code, an action is simply an object with up to two properties - a **type** property and an optional **payload** property. Each MUST have a **type** property. The **type** property is a string that explains what interaction just happened. By convention, we use all caps and underscores for type like 'LOGIN_USER' or "TOGGLE_TODO". The payload is data that goes along with that interaction.

Actions are "dispatched" to our reducer - aka, passed into the reducer function as an argument. When our reducer receives an action, it will update the state according to the type and payload on the action.

Let's say we have toggle handler function that switches a boolean field called **show**, which is set on our state in our Redux store. An action for such event would look like this:

```
{ type: "TOGGLE_SHOW", show: !state.show };
```

This allows us to keep things as simple as possible when responding to events and interactions!

Importantly in Redux, reducers are the only place we can update our state. Action tell our reducers "how" to update the state and perhaps with what data it should be updated, but only a reducer can actually update the state.

From what we've learned so far, we can see the flow of data in a React/Redux application.

```
Store sets the state ->
Event or user interaction happens ->
An action describing the event and possible changes is dispatched to reducer ->
The reducer handles the action and replaces the store accordingly.
```

## Action creators

Actions should not be confused with **action creators** (though admittedly, it's very easy to confuse them). An action creator is a function that creates an action. Or in other words, an action creator is a function that returns an action object.

Action creators are a middle step between events/ interactions and the dispatch process. They make it possible to write reusable functions that can create actions on the fly, rather than us hard coding actions into our components. With action creators in mind, here is an updated  look at our data flow:

```
Store sets the state ->
Event or user interaction happens ->
An action creator is called and dispatches an action ->
Actions tell us about the changes from the event ->
Reducers handle those actions and replace the store accordingly.
```

This flow is one of the reasons that Redux is so powerful. The two major principles here are **Functional Programming** and **Immutability**. Dispatched actions are trigger for reducers, and reducers are pure functions that never produce any side-effects. Everything you do in Redux is functional.

## Action types

The final term we want to cover here is **action types**. We've talked about and even demonstrated the **type** property of an action. We want to change that up right now, ever-so-slightly... Instead of passing a string to **action.type** we create a variable with the name of the string and assign it the string we would have passed on an action. Then we give **action.type** the variable as its value.

We do this because we deal with strings like we deal with types. Strings are used in multiple places like you'll see in reducers very soon, misspellings occur, and are very hard to debug. If we misspell our action type in our reducer, our state won't be updated correctly, and we'll be left wondering what went wrong.

Instead, we'll create an action type, and import it wherever we need it. That way, with linters, we can spot our errors a lot quicker.

```
export const TOGGLE_SHOW = 'TOGGLE_SHOW';

// then in our action:
{ type: TOGGLE_SHOW, payload: !state.show}
```

## Follow Along - building our first a ction creator.

We'll assume that we have a Redux store connected to our app, and a component connected to our store. ON the state object, we have a title property brought into the component via the **mapStateToProps** function. Our component has input field and an "update title" button. When we type into the input and click the button, we want to update our state object with our new title.

First we need to create a new folder in the src folder called actions. Inside that folder create an actions.js file. Inside that file, create a variable called UPDATE_TITLE with the value 'UPDATE_TITLE'. The variable is an action type. Next, let's create a function called updateTitle that takes in a new title. This will be our action creator, and it will simply return an action with the type UPDATE_TITLE and a payload of the new title we passed into it. Don't forget to export both the action type and the action creator function. (Note that these will be named exports, so they will be imported with the curly brace syntax - import { namedExport } from './place';)

```
export const UPDATE_TITLE = 'UPDATE_TITLE';

export function updateTitle(newTitle){
  return {
    type: UPDATE_TITLE,
    payload: newTitle
  }
}
```

See how easy that was? Now we have an action creator that can dispatch our action to the reducer and send the reducer the new title. Let's import our action creator into our component and talk about how to use it there.

When we use our action creators in our connected components, we first import the action creator. Then, we pass the action creator into the **connect** function. Action creators are passed to the object that is the second argument in the first **connect** invocation.

```
export default connect(mapStateToProps, { actionCreator: actionCreator})(Component);
```

Then, just like the state pieces that we brought into our component via the **mapStateToProps** function, we have access to our action creator in props. This step is important  because it is the **connect** function that works in the background to actually dispatch our actions to the reducer. We can't just import an action creator and use it in our component. It must go through the **connect** and be used from the props object.

Let's see how we would do this in the app we have been building. Go to the **Title** component, import **updateTitle** and pass it into the connect function.


```
import  React from 'react';
import { connect } from 'react-redux';

import { updateTitle } from '../actions/actions';

...

export default connect(
  mapStateToProps,
  { updateTitle } //same as { updateTitle: updateTitle}
)(Title);
```

Now when the "Update title" button is pushed, invoke a function on the class that invokes **this.props.updateTitle** that gets **this.state.newTitleText** passed into it.

```
updatetitle = (e) => {
  e.preventDefault();
  this.props.updateTitle(this.state.newTitleText)
}
...

<button onClick={this.updateTitle}>Update title</button>
```

Yes, names will be the same all over the place with this stuff. Just note that **Props.updateTitle** is the action creator.

to make sure it is working, let's add a console.log in the action creator, and log out  the new title passed into it. Since we don't have a reducer to handle this action yet, we won't see the state or title updated yet. so this is the best way to make sure it's working.

```
export function updatedTitle(newTitle){
  console.log(newTitle)
  return {
    type: UPDATE_TITLE,
    payload: newTitle
  }
}
```

## Overview - reducer

When an action is dispatched, it flows through every reducer in a script. Redux was built on this fundamental principle among others. Reducers are pure functions, meaning they don't produce any side effects. A reducer follows the key principles that come from the **Array.reduce()** function, in that they behave similarly to the callback that you would pass to **reduce**. They aren't the same thing but they behave and do similar things.

Reducers take in two arguments, the **current state** from the Redux store, and the **action** object, sent via action creator functions. Remember than an action gives us a packet of information as an object with a **type** and **payload8* field that we can use. The type tells the reducer what to do, adn the payload tells the reducer what to update on state.


**Reducers will NEVER update state directly, they only return a new object**.

Inside reducers, we use switch statements to look at this action type, then return the updated state. **switch** statements are like long **if/ else if / else if /../ else** statements.

## Follow along - reducers

Back in our title app, let's create another folder inside **src** called **reducers**, and inside that a **reducer.js** file. To start, we will create an **initialState** object that looks a lot like the one returned in the **reducer** function in index.js.

```
const initialState = {
  title: 'Title from Redux Store'
}
```

Then we'll create a reducer function. Remember it takes two arguments - state (with the initialState as default) and action. Then it will contain a switch statement that looks at an **action.type** and return state as default.

```
function reducer(state = initialState, action) {
  switch(action.type){
    default:
      return state;
  }
}

export default reducer;
```

Next we need to build a case for our action. The dispatched action is the UPDATE_TITLE action. So we'll want to import the action type from the **action.js** file first. It is named export, so you need to use brackets to import it.

```
import { UPDATE_TITLE } from '../actions/actions';
```

Then, in the case for **UPDATE_TITLE**, we will return a new state object. We do this by returning an object with state spread into it, and udpating the **title** property with action.payload.

```
function reducer(state = initialState, action){
  switch(action.type){
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload
      }
    default:
      return state;
  }
}
```

Here are a couple of important details

* We are returning a brand new object.
* We do NOT update the state object and return that
* We are using the spread operator to "spread" in our old state.
* We then update the one piece of data we want to update - **title**

This syntax is the convention when building reducers. This is something that takes good repetition to get used to.

Now that we have built our reducers, we need to import it into the index.js file and pass it into the createStore function in place of the fake one we built earlier. The convention for the important call is **rootReducer** inside index.js

```
import rootReducer from './reducers/reducer';

const store = createStore(rootReducer);
```
