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
