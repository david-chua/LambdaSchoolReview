# Composing React Components

## Overview

When JavaScript was first introduced, inserting it into a web application meant writing code inside of a script tag inside of an HTML file. The script ran sequentially. That is from top to bottom. Back then, if you wanted to use the same code in another project, you had to copy and paste it. There were performance issues - namely, functions and variables were all global. If you weren't careful, you could quickly see the trouble with declarations holding unexpected values. Eventually, including a src attribute did allow for more reusability, but it was still dependent on order and still globally scoped.

Then over a decade ago, developers used module pattern like IIFE( Immediately Invoked Function Expressions). This function runs as soon as it is defined. While this keeps the global space tidy and grants privacy to any inner variables, it's somewhat fragile and none too eloquent.

```
(function(){
  // lexically enclosed function statement
})();
```

### Server side JS:

The release of Node.JS in 2009 meant that JavaScript could now execute outside of the browser. With the adoption of a common JavaScript specified standard library known as CommonJS, we now have defined terms for sending data to and from our file systems. These advances were complete game-changers for JS developers but all still relied heavily on third party bundlers and transpilers to address common issues. Tools like webpack and rollup would compile packs of modules and assign any missing dependencies before sending them off to the browser. Transpilers like Babel handle translating source code for the browser and convert the latest features of ES6 into compatible ES5. While handy, all of these require downloading, updating and configuring.


### JS Modules (ECMAScript modules)

This brings us to today. While past methods relied on specific function or third party libraries, with the latest version of JS, we can now export functions, data, components from our files by merely prefixing the **export** keyword. Then, when we want to bring in such feature into our file, we use the **import** keyword.


#### Follow Along

**export** - exports a single named function that can now be imported into another module using the import keyword

```
export const emphasize = str => {
  return str.toUpperCase();
};
```

When **export default** is specified (either inline or at the end of the file) the declaration that follows is exported by default and additional modules will need to be exported (and imported) by name.

```
const emphasize = str => {
  return str.toUpperCase();
};

export default emphasize;
```

Multiple items exported from one module can then either be imported into separate modules or can all be extracted for use with object destructuring in the import declaration

When set up properly, this pattern is incredibly efficient; the majority of errors being syntactical, or from renaming or changing your file structure. Another advantage of modules is that top-level variables do not pollute the global object. In addition to connecting to our project files, bringing in a library, or an external component to our project is a matter of downloading it with our CLI and then directly importing it to our file. Fonts, loaders, middleware, pretty much everything you need.

Importing a file/module starts with declaring the import keyword followed by the name of the import, then the from keyword followed by the module specifier. The module specifier usually is a file path or an npm module name.

#### Import examples

* A single named exports

```
import { a } from './directory/fileName';
```

* Multiple named exports

```
import { item1, item2, item3 } from './directory/items.js';
```

* Exported as default

```
import Component from './folderName/Component.js'
```


#### File path specification

The prefixing './' on the file URL points to a unique location of your file system. It indicates the file for import is exported elsewhere in the current directory. When the file is read, the loader knows where it is located in the directory tree. Adding the additional  dot ('../') to the path will indicate a location one directory higher.

File Location

* Current Directory - ./
* Parent Directory -  ../
* Parent of parent directory - ../../

## Props

#### What are props?

When we want to pass information held on state inside one component to another component, we pass them as props. We'll learn plenty about how and why of props. The important thing to remember is that we never make changes to props data - props are re ad only. This helps ensure that our data flow remains clean and organize. This way, we know exactly where changes are made to our application. and if something goes wrong, we can fine the issue and fix it.

#### Managing state and props within components

A stateful component is one that holds state data, either as an object placed inside the constructor function or a function component that includes the .useState function that was made available in React v16.8 release (hooks).

When data comes into our application, it is loaded and stored on state, either in a centralized component specifically for state management, or a component rendering other components. When data is consumed in multiple components, it is probably best to centralize that data in state in a top-level component. Other data that is specific to a certain component can live locally, just inside that component. Components rendered in a stateful component can receive state data via a prop attribute. Here, it can be sent down on the props object to the child component, and there we can access it just like we would with most any other object. However, if we decide we want to make any change to our data, we do not change the prop data itself. Instead, we send back  changes we should make to our state holding components; often, stored changes are sent back up to the parent container as enclosed information in a called function.

#### Follow Along

Take the following data we'll be passing a simple user object holding two key/value pairs.

```
const user = { name: "David", age: 29 }
```

Next, we save our user object to a state variable using the state hook you learned in the previous lesson. Then we declare a named prop object inside the JSX in our return statement and set it equal to the state variable. The naming convention may appear confusing at first glance, but try to understand which 'user' name is the prop object, and which is referencing the state variable. It makes sense for them to have the same name because the data is identical. That said, their intended use is not. Once data is set as props data, it is no longer state data and should never be mutated. If you wish to change the value of the props data, it must be done using the provided setUser function.

```
const App = () => {
  const [user, setUser] = useState({ name: "David", age: 27 });

  return <UserInfo user={user}/>;
}
```

Below the function component UserInfo receives the state variable as props from its parent component. The props are passed in as an object argument and then sent down as named "props" object to the child component (of UserInfo) seen later as DisplayName.

when the props data is passed as JSX attribute on DisplayName, it is set to a variable and passed inside curly braces as object data. The named variable is now set as an object (containing our user data) on our props object and is now reachable form inside the component.

```
const UserInfo = (props) => {
  return (
    <div>
      <DisplayName user={props.user} />
    </div>
    )
}
```

Displayname receives the prop object as an argument and returns a React element where we pass the selected data to display by first referencing props -> then our named props object -> then the attribute name of the data we want to display.

```
const DisplayName = props => {
  return (
    <div>
      <h2> Hello, my name is {props.user.name}</h2>
    </div>
    )
}
```

The above block of code will render "Hello, my name is David".

So why do we pass information around this way/

* **Control** - As we learned with modules, when we break our components down into smaller functions, we gain greater control over what we display and how it works. By keeping state, in one of a few select components and passing as props, we minimize the risk of making unintended changes to our state data.

* **Readability** - Separate files are easier to keep in order and make it easier for other developers  to read through our code, know where our state is held, and where it's being sent. The easier your code is to read and understand, the more likely someone is to ask you write more of it for them.

* **Maintenance** - If we want to make changes, we can find components quickly, and working in files that only manage one or two different aspects of our application is a much easier task than scrolling through hundreds and hundreds of lines of code! Also, this way, we can isolate any problems that come up and debug faster.

* **Reusability** - This is huge! Now we have reusable components, and they can render any data that we pass through, so long as it matches to type on our object. And with a few modifications, we render additional data if we added to our object. Or we could even pass in an array of hundreds of objects and render the information contained on each code. This would only require a few additional lines of code.


#### Overview

Now that we know all about functional components and how to pass arguments (props) through to those components and render those props data to the screen using JSX, we're going to learn about nesting components that may rely on one or another prop value from a parent component.

Let's take a look at the following code example and learn how we can achieve the idea of nesting components.

```
const App = props => {
  return (
    <div>
      <h2> Hello world from, {props.name}</h2>
      <div>
        <h4> My best friend in this world is: {props.bestFriend}</h4>
        <p> My favorite book is: {props.favoriteBook}</p>
      </div>
    </div>
  )
}
```

The component is doing simple rendering of DOM elements. It only relies on 3 props, so it's not super sophisticated, but it makes for some cumbersome programming. Meaning, here we essentially have a component nested inside another component. So let's start by breaking out the inner DOM elements that's purpose is to render the best-friend data into its own component.

```
const BestFriend = props => {
  return(
    <div>
      <h4> My best friend in this world is: {props.bestFriend}</h4>
      <p>My favorite book is: {props.favoriteBook}</p>
    </div>
  )
}
```

While this is good, we really should make it so that BestFriend can be reused and nested. Now, when we use this component inside of our app component, we can pass data to it as props.

```
const App = () => {
  return (
    <BestFriend bestFriend={bestFriend}  favoriteBook={favoriteBook}/>
    )
}

```

### Overview

We're going to build a button component that, when clicked, returns a button and renders a new app component. The button component will have an array of colors represented by string hex values that we can use to describe our dynamic data. We'll need to pass our state variable from app down via props to our button component. Also, we need to pass along a function that takes in an array and calls our setter function. While hooks make it easy to bring this functionality directly into any component, we'll build this app and pass it for demonstrative purposes. In case you want to build additional components, you'll be all set to go ahead and update their colors as well.

Since we'll be using hooks, the first thing we need is to import the useState function to our file as named import.

```
import React, { useState } from "react";
```

Next call useState at the top of your app function and set its value to a destructured array containing the state variable and its setter function. In this example, color and setColor. Set the default value to the hex value for the color 'white'. Then render our soon to be built component inside App and pass it our state variable as props.

```
function App() {
  const [color, setColor] = useState('#FFFFFF');

  return (
    <div className="App">
      <Button color={color}/>
    </div>
  )
}
```

Now let's write the function that our button will accept. We'll name this function changeColor and have it take an array as its parameter. In our function statement, we call setColor and pass our array parameter using bracket notation to select random index of the data given the array dynamically. You probably recognize most of the code, but all that matters is it evaluates to random whole number from 0 to the max index of the given array. Don't forget to pass the function to button component as props; otherwise, it won't be there when you try to access it.

```
function App() {
  const [color, setColor] = useState('#FFFFFF');

  const changeColor = array => {
    setColor(array[Math.floor(Math.random() * array.length)]);  
  };

  return (
    <div className="App">
      <Button color={color} changeColor={changeColor}/>
    </div>
  )
}
```

Alright, now all we need is the button. We'll go ahead and build it in the same file to keep things simple. Below our app component declares the button function component. While it's accessible anywhere in the file, we want to place our array of colors inside of Button in case we decide to put it in its own file later. Next, return a button element and give it a style and onClick attribute. Here is where we'll pass our, now dynamic, props. In the style tag, set background to props.color to represent our state value back in App. Set the onClick attribute to an anonymous arrow function that returns props.changecolor() and pass in our colors array as an argument.

```
const Button = props => {
  const colors = [
    '#FFBAAA',
    '#27576B',
    '#D47F6A',
    '#AA7539',
    '#003D19',
    '#6E91A1',
    '#552D00'
  ];

  return (
    <button
      style={{background: props.color, height: "50px", width: "200px" }}
      onClick={() => props.changeColor(colors)}
    >
    Click Me!
    </button>
  )
}
```

Now clicking away, we can see the button's background changes. 
