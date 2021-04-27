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
