# Intro to React

React has quickly become one of the most commonly used libraries for building applications today. Because you've now seen some code that allows you to build custom components with so-called vanilla JavaScript, you've come to an understanding of how you can use JS to manipulate DOM elements. React is going to take that knowledge you have learned and abstract away a lot of the document.getelementsByClassname syntax.

Because we have such rich user interfaces today that interact with ever changing data, users interacting with DOM elements, and lots of animations and events firing, the DOM is certainly doing a lot of work. Imagine an app like Twitter or facebook that has users clicking all over the place, with data changing and almost instant status updates. For these types of large scale applications, React is very important. Simply put, we need a way to offload a lot of the state(data) that our apps need to use, from the DOM. To keep up with today's demands of the web, we need a way to build applications that can take care a lot of the work for us.

Using react, we use a simple engine called the virtual DOM that interacts with the actual DOM for us. We tell the virtual DOM which elements and state(data) to render to the actual DOM, and it will do so. Beyond that, it will "react" when the state(data) in our app changes and will update the DOM accordingly.

In a process called "reconciliation", React will detect that the state of the app has changed. Then it will update the virtual DOM, taking note of which nodes have changed due to the state changes. Finally, once it knows which nodes have changed, it will update only those specific nodes on the actual DOM.

## Anatomy of a React Component

```
import React from 'react';

const Intro = () => {
  return (
    <div>
      <h1> Hi Lambda!</h1>
    </div>
    );
};
```

This is an example of a react component. A "component" is a loose term to describe a discrete chunk of your site. A header could be a component or a footer.

So what's odd about this? Well, we're mixing two different syntaxes here. Part of this block is a regular JavaScript function and part is HTML:

JavaScript:
```

const Intro = () => {
  return (
    ...
    );
};
```

HTML:

```
<div>
  <h1> Hi Lambda!</h1>
</div>
```

This mixture of JavaScript and HTML is known as JSX and it's just a JavaScript object. In our initial example, it is translated into something like the following:

```
import React from 'react';

const Intro = () => {
  return (
    {
      type: 'div',
      props: {
        children: {
          type: 'h1',
          props: {
            children: "Hi Lambda!"
          }
        }
      }
    }
  );
};
```

So when we return what looks like HTML in a react component, what we've secretly return is a JavaScript object that describes the kind of HTML  we want to make.

The example above shows a hard coded h1 tag but React gives us the ability to dynamically control the app's content like this:

```

import React from 'react';

const Intro = () => {
  const greeting = "hi Lambda!";

  return (
    <div>
      <h1> {greeting}</h1>
    </div>
    );
};

```

Our code changed but the output is the same. This is because we're just in a regular JavaScript function and we're free to declare a variable the way we normally do.

In our JSX, react gives us the power to escape back into regular JavaScript and refer to the variable by using the curly brackets.


## 2 major pillars of React's design philosophy

1. Separation of concerns

How can we know the dancer from the dance?

In computer programming, "the separation of concerns" refer to a design philosophy that each piece of your code should do one and only one thing. Functions with a lot of moving parts are hard to debug. One large function might be tricky to test. If we can split that into smaller parts, they are easier to test individually and the application will be more robust and easier to understand.

At first glance, it might appear that our markup right next to our JavaScript is a violation of this principle, but the React team thinks otherwise. They argue that we can't truly separate a button tag from the function the button invokes. Separating the two, one in an HTML file and another in a JavaScript file isn't a separation of concerns, it's cutting one concern in half and putting the other half in another.

Consider the difference in the traditional way:

```
HTML file:
<button class="button"></button>

JS file:

let button = document.querySelector('.button');
button.addEventListener("click", (data) => {... logic} )
```

React way:

```
<button onClick={ () => { submitForm(data) } />
```

2. Imperative Programming vs Declarative Programming

We have an array

```

let myArray = [1,2,3,4,5];

```

And we want to iterate over it and double each number. Here are two ways we can go about it:

```
for (let i =0; i<myArray.length; i++){
  myArray[i]= myArray[i] * 2;
}
```

Or

```
const double = number => number* 2;
myArray.map(double);
```

The first approach is an example of imperative code and this is the kind of approach we know the most. It's explicit. The problem with imperative code is it's pretty difficult and in more complex examples, it can be hard to understand what the code does at a glance.

The second approach is declarative code. Instead of telling the computer step by step, how we want to do something, we just tel it what we want it to do.

The code says map over my array and double everything inside of it.

With practice, declarative code is easier to parse. This is important because as a developer, most of the time is spent reading and understanding other people's code.


#### Follow Along

Let's build a component that displays an image.

```
import React from 'react';

function App(){
  return (
    <div className="App">
      <img
      src="https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png"
      alt="lightbulb"
      />
    </div>
  );
}
```

Notice how we have a className instead of class in our JSX. That is because JSX is just JavaScript and class is a reserved word in JS.

Now one more trick we can do in JSX is evaluating JavaScript expressions so we can read variables, run functions, read data from objects or arrays. to do so, we use curly braces - {}.

```
import React from 'react';

const image = "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";
const titleObj = {
  title: "Light Bulb!"
};


function App(){
  return (
    <div className="App">
      <h2> {titleObj.title}</h2> // this evaluate the string "Light Bulb!"
      <img src={image} alt="ligthbulb" /> // this will evaluate the image.
    </div>
  );
};
```

#### Overview

Our application has states, similar to a traffic light showing red, green, or yellow.

```
import React from "react";
import { render } from "react-dom";
import "./styles.css";

const white = "https://image.flaticon.com/icons/png/512/32/32177.png";
const yellow =
  "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";

function App() {
  return (
    <div className="App">
      <img src={white} />
      <img src={yellow} />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
```

The following code has an issue as it has the assets we want but we only want one light bulb to show at a time.

```
import React, {useState} from 'react';
import {render} from "react-dom";
import "./styles.css";

const white = "https://image.flaticon.com/icons/png/512/32/32177.png";
const yellow = "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";

function App(){
  const [lightOn, setLightOn ] = useState();

  return (
    <div className="App">
      <img src={white} />
      <img src={yellow} />
    </div>
    );
}


const rootElement = document.getElementById("root");
render(<App />, rootElement);
```

A couple of things to notice here:
- Fire we are importing the useState hook from the React library to use it.
- second, we have this odd bit of syntax:

```
const [lightsOn, setLightOn ] = useState();
```

This is the useState hook, and it's fundamental to understanding modern React. If its syntax looks strange to you, you're not alone but we'll get back to why it looks like that.

For now, it should be understood that it's just declaring two variables in a similar manner to this:

```
let lightOn;
let setLightOn = (value) => {lightOn = value; };

(Note: Ignore the discrepancy between the use of const in the hook and let in the example)

The sharp-eyed among you might have noticed that lightOn does not have a value.
But you can see, if we were to invoke setLightOn, and pass a value in as an argument, we change the value of lightOn.

```
setLightOn("sup");
console.log(lightOn); // "sup"

But what if we don't want to have to assign a value to lightOn right away? What if we want that variable to be initialized with a value from the get-go? We can do that.

Let's change

```
const [lightOn, setLightOn] = useState();
```

to

```
const [lightOn, setLightOn ] = useState(false);
```

Now it's sort of saying it like this:

```
let lightOn = false;
let setLightOn = (value) => {lightOn = value;}:
```

In summation the useState hook works like this:

lightOn is a variable that use the value of whatever we passed in the useState. In this case, it's value is a boolean primitive false. setLightOn is a function that will change the value of lightOn. We'll also note that I could have named lightOn and setLightOn whatever I wanted.

#### Recap state:

- We know that state is in an application. We also know how to keep track of a state variable from within a component.
- We know how to initialize it with a value and how we can change that value.

What's missing?

- We still only have two light bulbs. We have a state variable initialized and a way to change it, but our lightbulbs don't know it exists. We have to make our lightbulbs aware of what the state is in some way so we can know when it changes.


## Conditional Rendering

Conditional rendering is a fancy name for a pattern in React. We don't want to see both lightbulbs at once. We only want to render one or the other based on some condition. In this case, if the lightOn is set to false, we want to see white lightbulb. If it's set to true, we want to see a yellow one.

```
import React, {useState} from 'react';
import {render} from 'react-dom';
import './styles.css";

const white = "https://image.flaticon.com/icons/png/512/32/32177.png";
const yellow = "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";

function App(){
  const [lightOn, setLightOn] = useState(false);

  return (
    <div className="App">
      {lightOn == false? <img src={white} /> : <img src={yellow} /> }
    </div>
    );
}

const rootElement = document.getElementById('root');
render(<App/>, rootElement);
```

Notice that the only part that changed is the following:

```
<div className="App">
  {lightOn === false ? <img src={white} /> : <img src={yellow} />}
</div>
```

This acts as a ternary operation which is an if/else statement.

It is saying if the lightOn is set to false, render white. If not, render yellow.

Changing the initial state to true, we're able to render the yellow lightbulb.

```
const [lightOn, setLightOn] = useState(true);
```

At this point, we've set up a condition on which to render one bulb or the other. That condition was based on our application's state. When we forced the state of the application to change, what appeared on the page reacted to taht changes.

The last step is to figure out how to change the state.

const [lightOn, setLightOn] = useState(false);

You'll recall that setLightOn is a function that can change the value of lightOn. Now we have to find a way to invoke this function.

## Overview

To use a click listener, we use onClick. This event listener will take in a callback function.


Before showing the right way, look at the wrong ways to do this as
1. It will help us think critically about how React works
2. You will make this mistake at some point and it'll help to know what to look for.

```
import React, { useState } from "react";
import { render } from "react-dom";
import "./styles.css";

const white = "https://image.flaticon.com/icons/png/512/32/32177.png";
const yellow = "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";

function App() {
  const [lightOn, setLightOn] = useState(true);

  return (
    <div onClick={setLightOn} className="App">
      {lightOn === false ? <img src={white} /> : <img src={yellow} />}
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
```

The irrelevant line is:

```
<div onClick={setLightOn} className="App">
```

The reason this is wrong is because setLightOn is expecting an argument. So we need to change the function to this:

```
<div onClick={setLightOn(false)} className="App">
```

Now our code looks like this:

```
import React, { useState } from "react";
import { render } from "react-dom";
import "./styles.css";

const white = "https://image.flaticon.com/icons/png/512/32/32177.png";
const yellow = "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";

function App() {
  const [lightOn, setLightOn] = useState(true);

  return (
    <div onClick={setLightOn(false)} className="App">
      {lightOn === false ? <img src={white} /> : <img src={yellow} />}
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
```

This is still broken. Essentially the portion
```
<div onClick={setLIghtOn(false)} className="App">
```

is invoking setLightOn(false) over and over again and each invocation is triggering a re-render. We stumble in an infinite loop.

To fix, we write it like this:

```
<div onClick= { () => setLightOn(false) } classname="App">
```

See the difference?

```
// Everything is on fire
<div onClick={ setLightOn(false) } className="App">

// Everything is fine
<div onClick={ ()=> setLightOn(false) } className="App">
```


The first invokes the function every nanosecond. The second only invokes it when you click the div.

There's still on little tweak needed to make the app work.

In this case, we're passing false as an argument to setLightOn everytime. That means the state will always be false, which means we're only ever going to hit one of our two  conditions in our render. Instead of passing false, let's pass the opposite of whatever the state is.

```
<div onclick = { () => setLightOn(!lightOn) } className="App">
```

The final code now look like this:

```
import React, { useState } from "react";
import { render } from "react-dom";
import "./styles.css";

const white = "https://image.flaticon.com/icons/png/512/32/32177.png";
const yellow =
  "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";

function App() {
  const [lightOn, setLightOn] = useState(true);

  return (
    <div onClick={() => setLightOn(!lightOn)} className="App">
      {lightOn === false ? <img src={white} /> : <img src={yellow} />}
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
```
