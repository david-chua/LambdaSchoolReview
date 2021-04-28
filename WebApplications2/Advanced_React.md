# Advanced React

This unit will focus on classes in React. We will use classes to build our components. Class components have been a big part of React ecosystem because they brought a lot of functionality that we normally didn't get with the React API when using function components. Now with hooks, that functionality is available in function components. However, a lot of projects will still have class components in them and we need to be prepared to work with classes when we see them.

## The React lifecycle

Every component in React has what we call a lifecycle. This lifecycle is part of how our component operates under the hood. Being able to understand the lifecycle by knowing how to use a few of the "methods" that are provided by it will help you understand why and how react behaves the way it does.

React gave us the idea of components as independent pieces of UI. And thus far, you have learned how to build out **functional components** for use in making multiple DOM elements. Now, we're going to be learning about the **React.Component** base class that allows us to use some of the methods that the React team has curated to tap into what we call the **Component lifecycle**. These methods (known as lifecycle hooks) give us control over how our components work, and if we'd like to use them, we have to build out a class component that **extends** the **React.Component** parent class. Anytime you see a line of code that looks like the following, you're using the React.Component parent class, and you have the ability to tap into these methods.

```
class FooComponent extends React.Component{}
```

By creating components as classes, you can setup data object that your component is concerned with. This is done using **state** and setting up that object on our constructor method. Once we have some data that we can render out to the DOM, we need a vehicle that will allow us to render that data. This is achieved with the JSX method **render()** from within the lifecycle hook.

The following: steps:

1. Declare your class and extend the **React.Component** Base class

```
class FooComponent extends React.Component { }
```

2. Now we'll set up our constructor and add state.

```

constructor(){
  super();
  this.stae = {}
}
```

3. Render some UI and return some JSX.

```
render(){
  return <div> Hello, I am Foo Component</div>;
}

```

Our final component will look like this:

```
class FooComponent extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  render(){
    return <div> Hello, I am foo component</div>
  }
}
```

Now that we have constructed a skeleton for our Class component, it can be a bit more dynamic. The way we'll achieve this will be to use some data that we'll pre-define as some information we'd like our component to display. We'll then take that data and do this really cool thing called **interpolation** in order to represent it to the DOM within some text.

Components built out extending the base **React.Component** class comes with a bunch of benefits directly from the React API. A list of the benefits can be found in the following in the documentation about class components including the life-cycle methods that will be discussed in the next module.

For now, let's focus on a component caring about its own state (data) and managing that state in a reactive way. The **state** object that we set up in our constructor has a very React-specific way of doing things. It allows us to drive our UI using data. Again, think about Facebook here. You see a lot of data and interact with it all of the time when you're using the Facebook App. Because of the way we work with social media today, we expect this data the UI to represent that data in close to real time.

### Follow Along - building out a class component that prints a message to the screen.

initial app:

```
class App extends React.Component{
  constructor(){
    super();
    this.state = {};
  }

  render(){
    return <div> Hello from the App!</div>
  }
}

```

Now let's add to our property state. Define a message property on the state object. :

```
this.state = {
  message: "Hello from the App state!"
}
```

Now that we have the message on our component states, we can use it through interpolation. In our render method, let's change the div to reference the state object. Remember the **this** keyword when pointing an object on the Class constructor.

```
render(){
  return<div>{this.state.message</div>}
}
```

The ending code will be the following:

```
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      message: "Hello from the app state!"
    }
  }

  render(){
    return(
      <div> {this.state.message}</div>
      )
  }
}
```

### Overview

Up until this point, our application have been fairly simple. One or two components with a bit of state to allow for interaction. As our application grow, so do the complexity way components relate to each other. To do this, it helps to see our components being structure in a **parent/child** relationship.

Simple or complex, every application needs shared, persistent data to run.

Currently, we have been using **state** to hold data. Unlike statically defined data within our component, state is persistent, changeable and can flow into other components through the use of prop drilling. Changes to state immediately re-renders the parts of our components effected by that change of state in a process called **reactivity**. When working with more complex component trees, state always runs from a parent component down to a child.

What if we modify that data? Well, we can just pass parent state down through  props, we can also pass functions that modify child state. Executing these functions in our child components will cause state to change at our parent level components, resulting in reactive rendering throughout all our application.

## Pass state through class based components.

```
class App extends React.Component{
  constructor(){
    super();
    this.state ={
      welcomeMessage: 'world!'
    };
  }

  render(){
    return(
      <div>
        <h1> Hello, {this.state.welcomeMessage}!</h1>
      </div>
    );
  }
}
```

Let's create a subcomponent using functional components to hold our welcome message.

```

const WelcomeBanner = (props) => {
  return(<h1> Hello, {props.message} !</h1>);
}
```

Now let's refactor our component using React classes:

```
class WelcomeBanner extends React.Component{
  render(){
    return(
      <div>
        <h1> Hello, {this.props.message}</h1>
      </div>
    )
  }
}
```

Notice that props are not passed in as they were in functional components. Instead, props are attached to this object, just like state.

This means that we are sharing data between component's state and component's props. This means that when the state object changes, so too will the props.

Now let's add in the ability to modify that state.  

To do this we need:

* Connect state change method to an event listener in our child component.
* Create the substance of that method in our parent.
* Pass that method to the child through props.

Let's start at bottom, our child component.

```
const FormComponent = props => {
  return(
    <form>
      <input placeholder="change state" onChange={props.updateStateMessage}/>
    </form>
    )
}
```

The only problem is, we don't have access to state all the way down here! To do this, we need to build our state changing method where it belongs in our App.js **parent** component.

```

class App extends React.Component{
  constructor(){
    super();
    this.state ={
      welcomeMessage: 'world!'
    }
  }

  updateStateMessage = (e) => {
    this.setState({welcomeMessage: e.target.value});
  }

  render(){
    return(
      <div>
        <WelcomeBanner message={this.state.welcomeMessage}/>
        <FormComponent updateStateMessage={this.updateStateMessage} />
      </div>
    );
  }
};

```

And there we go, we successfully passed our state data downstream through props in WelcomeBanner. At the same time, we are also successful in passing data back upstream by executing state modifying functions passed through our props in FormComponent.


### Stretch

Loop over a list of items showing items to the screen. When a user clicks submit, instead of logging the item, push an item into that list, and watch the magic happen.

To do so, we'll be doing the following:

* We're going to be updating some state on a parent component
* That state will be wired up to a few other components as we pass the props around.
* We will also be passing around a few handler functions that help us update/delete our state.

Let's set up a form component that we can use to update our message component from above:

```

const WelcomeBanner = props => <h1>Hello, {props.message} !</h1>

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      welcomeMessage: "world!"
    }
  }

  render(){
    return(
      <div>
        <WelcomeBanner message={this.state.welcomeMessage}/>
      </div>
    )
  }
}

```

Now let's build a form component that can handle some data defined on state

```
const FormComponent = props => {
  return(
    <form>
      <input placeholder="change state" onChange={props.updateStateMessage}/>
    </form>
  )
}
```

We're going to need to build out a change handler function in our App component that we can pass down to the form. We'll have to define the prop as updateStateMessage in order to make our onChange event handler to work out properly.

```
...

messagechangeHandler = event => {
  this.setState({welcomeMessage: event.target.value});
}

render(){
  return(
    <div>
      <WelcomeBanner message={this.state.welcomeMessage} updateStateMessage={this.updateStateMessage}/>
    </div>
  )
}

...
```

In our last objective, we explore dhow **state** can be displayed and changed by passing state value and state modifying functions respectively through **Props**. We explored this using the onChange **eventListener**. That is, of course, only one of the many user events you can integrate into your application.s

We have already seen how events are handled within React class components. We need an event handler function and we need to link it to an eventListener method within our DOM.

```
class Button extends React.Component{
  handleButton = (e) => {
    console.log(e);
  }

  render(){
    return <button onClick={this.handleButton}>Click Me</button>
  }
}
```

Notice once again the need for that **this** object when referencing our **event handler**. Within class components, just like our props and state, our event handlers are bound to the instance of this class and are access through **this**.

We have also seen that "e" parameter before. This parameter is known in React as a **synthetic event** object. Inside this object, we will have access to various pieces of information regarding this event triggered, including the target DOM element, the type of event, and methods that control the propagation of that event like preventDefault.

Let's add some functionality in our event handler:

```

classButton extends React.Component{
  clickHandler = event => {
    console.log(event);
  };

  render(){
    return <button onClick={this.clickHandler}>Click Me</button>;
  }
}
```

Now, when we click on our button, we can actually print our synthetic event object. We can now do anything we want within event handler, from triggering a state change to starting an external api call.

Follow along:

Building an application that can handle some data and some event listeners like:
* onClick
* onDoubleClick
* onMouseEnter
* onChange

First let's build out a singleClickHandler function.

```
singleClickHandler = () => { alert("Single Click!")};
```

Now we add it to the button within our app's render function.

```
render(){
  ...
  <button onClick={this.singleClickHandler}>Click Handler Demo</button>
  ...
}
```

Let's repeat the process for our doubleClick, mouseEnter and onChange events.

```
doubleclickHandler = () => alert("double clicked");
mouseEnterHandler = () => alert("mouse entered");
changeHandler = () => alert("item was changed");

<div className="App">
  <h1> Hello Handlers</h1>
  <h2> Let's build out some handler functions</h2>
  <button onClick={this.singleClickHandler}Click Handler demo</button>
  <button onDoubleClick={this.doubleclickHandler}>Double Click Handler</button>
  <div onMouseEnter={this.mouseEnterHandler}>Mouse Enter</div>
  <input onChange={this.changeHandler} placeholder="Change my input"/>
</div>
```

to change synthetic events in onChange, we can use:

```
changeHandler = (e) => {alert(event.target.value)};
```

One of the most useful properties attached to synthetic events is target. This provides information on the text, value, style, attached attributes, and other useful data within our DOM elements. IN this case, we can print out our input's value.

Let's add in some state to get realtime feedback of what we are typing.

```
class App extends React.Component{
  constructor(){
    super();
    this.sate = {
      displayedText: '',
    }
  }

  render9){
    return(
      <div>
        <h1> {this.state.displayedText}</h1>
      </div>
    )
  }
}

```

Let's update our change handler to update our state:

```
changeHandler = event => {
  this.setState({displayedText: event.target.value});
}

```

Now, setState will update our display property on our own state object by simply typing in the input field. We can prove this by logging our state object in the render functions

```
render(){
  console.log(this.state);
}
```


## Guided lecture Note

Constructor:
* set up initial state
* set up bindings if needed.

Render
* Renders things

*ComponentDidMount
* fetch inital data from api
* set up eventListener
* set up timers/intervals

componentDidUpdate
* fetch new data based on changed props or state
* update REFs
* update state based on new data

componentWillUnmount
* clean up  dangerous things that happened in componentDidMount
* remove all manual eventListener
* remove/stop timers/intervals
* warn users they are about to leave the 'form', are they sure they want to leave? 
