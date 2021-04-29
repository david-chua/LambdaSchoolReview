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

## The Render Method

The **render()** method is one of the React lifecycle methods that is used to tell React, to return some piece of DOM. The React Virtual DOM will then handle the steps to mount those DOM pieces.

The **render()** method is required for a class component, and without it, the component will not work.

**render** should be a pure function, meaning it should return the same thing each time you call it. Its concert is to look at *this.props** and **this.state** and return some DOM elements, a boolean, an array of DOM elements and a couple of other things that you may want to reference or look into later.

The function is there to return what your component should render to the screen. Though many developers ignore it, **Component** is an important lifecycle method and should be regarded as such.

Another essential thing to remember about **render** is that it is called not only in the **Mounting phase8* of the component lifecycle but also during the **Updating phase**. This duality makes the **render** method unique because it exists across multiple phases.

Now that we have our state data setup for us, we can use that state data to give a list of elements to React and let it do its thing. Inside the render method of our component, let's return a list of items that the **arbityraryStateData** property will generate

```
render(){
  return(
      <div>
        // map returns an array, so let's give react an array of JSX element
        {this.state.arbitraryStateData.map(data => <div> {data} </div>)}
  )
}
```

One last thing to note is that any changes from **setState** invoke a call to our render method as well. It's important to remember that **render8* is called during mounting and is invoked if anything changes in our state object. You can think of the state object and render methods as existing together. The state object is like the bigger brother to the **render** function. It tells the **render** function what to do and the render function obeys.

In conclusion, the **render()** method is how we tell React waht data we want to turn into DOM elements. It is necessary for every class component we create because we need it to return <JSX/> elements. It is involved in both the **mounting** and **unmounting** phases of our component lifecycle.

### Follow along example:

Consider people.js that contain the following array with objects with this shape:

```
{
  "id": 1,
  "first_name": "Suzie",
  "last_name": "Claiden",
  "email": "sclaiden@arizona.edu",
  "occupation": "Biostatistician II",
  "friends": [
    {
        "firstName": "Gabe",
        "lastName": "Lemery"
    }
  ]
}

```

This is the data that our application will consume. Using the knowledge of the React LifeCycle methods, we can see how to get this data from one place to another.


```
import React from 'react';
import { people } from './people';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      persons: people
    };
  }

}
```

Now that we imported data, we can loop over that friend's array and generate a DOM element for each item in the array.


## ComponentDidMount

The **componentDidMount** method is a part of the **mounting** phase in the React lifecycle. This method gets called as soon as the render method is called the first time, and it begs the questions.. now what?

When our component has mounted, we have the bare bones minimum we need to put something on the screen.

Inside of componentDidMount we can call **setState** which forces a re-render of our component. This way, any asynchronous actions should be performed inside of our **componentDidMount** function, especially when it comes to fetching data via HTTP. Data fetching is the de-facto purpose for using **componentDidMount** within a component because of its position within the component lifecycle.

**This method is guaranteed to be calle donly once in the whole lifecycle, immediately after a component is mounted**

Until we know more about **async AJAX** calls, we'll use componentDidMount to set up state data living in a separate file. We'll do this by pulling the data in and setting it on sttate. This is also something you're going to have to do for some projects.

## Follow along - component did mount:

Your index.js or app.js could look like the following:

```
import React, { Component } from "react";
import { render } from "react-dom";
import CitiesList from "./CitiesList";

class App extends Component {
  constructor(){
    super()
    this.state = {
      cities: []
    }
  }

  render(){
    return <CitiesList />;
  }
}

render(<App/>, document.getElementById("root"));
```

We are merely importing in a component called CitiesList and returning it on the scree. CitiesList is a pure functional component whose responsibility is to render the props passed down to it on the screen. We have two very different styles of components here.

The only problem is that CitiesList wants to render something out, in fact, right now, if you look at the console, you'll see that props is an empty object. Our goal is to try and fix that.

Inside of cities.js file, you'll find a global object with a property **data** as an array of cities. Let's import that into our index.js file and utilize the data.

```
import cities from './cities.js';
```

If we console.log our cities, you'll now have access to them. To fix the issue set forward earlier, we need to set this data on state and pass that data down as props to our CitiesList component.

```
componentDidMount(){
  this.setState({cities: cities.data});
}
```
