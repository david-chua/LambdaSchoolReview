# React Lifecycle

React is a combination of multiple components. A component can be as simple as a single piece of user interface that represents a small portion of our application. Conceptually, a component lifecycle happens in three phases

1. Birth/Mounting
2. Growth/updating
3. Death/Unmounting

## The Birth/Mounting phase

This is the phase when the component is being built out from the ground up. A few things happen here:

* Render method is invoked
* componentDidMount gets called as well

## Growth/Updating Phase

In growth/updating phase, you're updating data.

* **setState** can be used to change the component's state data, forcing a call to render.
* **shouldComponentUpdate** is a method one could use here to stop a component from calling render if necessary

## Death/Unmounting phase

This phase deals with removing the component from the screen.

* Component is removed from screen
* **componentWillUnmount** is called and can be used for any cleanup you may need to do.


## LifeCycle API

Some methods to look into are:

* constructor
* render
* componentDidMount
* componentDidUpdate
* componentWillUnmount

## The Constructor Function

You already know all about the constructor function as it pertains to classes in JavaScript. It's not much different in React. The constructor's purpose in React is to create components with inciting state data for the initial render. Any other props that the component receives on state can be done through the constructor function. We also used to bind all of our event handlers to the component via the constructor, and now we don't have to because of ESNext syntax that allows us to use arrow functions on our class method like the following snipet:

```
eventHandler = () => this.setState({ foo: 'bar'})
```

We will have time to practice application setup with state data via the constructor, so for now let's look at the following examples.

Let's say we have some data from an external file living within our application. Let's say too, that we want our component to render a list of that data out to the DOM. We would need to import the external data as an array, (we don't care about the shape, or what type of data just that it lives on an array) and use the constructor to set it up on state

```
import React from 'react';
import { data } from './extraneousSource.js';

class MyComponent extends React.Component {
  constructor() { // if I wanted to receive some props here, I could pass them through the constructor. like constructor(props)
    super(); // if I receive props via the constructor, I will need to pass it through the super like super(props)
    this.state = {
      arbitraryStateData: data,
    }
  }
}
```

This is how we use the constructor in the mounting phase of our component's lifecycle. Now that our data is setup on state, we can access it during our render portion of the mounting phase.

The constructor function on a React Class component's purpose is to server up initial state data for when the time comes to mount up your DOM elements.
