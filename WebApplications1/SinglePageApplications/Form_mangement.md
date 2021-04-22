# Form Management

Forms in websites and web apps have been around for a long time. They are one of the best ways for companies to gather data from their users and to get your users to interact with their software.

Every language and framework will handle form data a bit differently, but most of them will use the same basic HTML elements to build a form. Each will have their own responsibilities.

## Form

The HTML form element represents a document section that contains interactive controls for submitting information to a web server.

## Input

The HTML input element is used to create interactive controls for web-based forms in order to accept data from the user.

## Label

The HTML label element represents a caption for an item in a user interface.

In summary, a form contains interactive controls, input is the interactive control used to collect data from the user, and label is how we caption the input to provide better experience for our users.

## Follow along - a step by step login form with a blank text input

```
import React from 'react';
import "./App.css";

function App(){
  return(
    <div className="App">
      <form>
        <input />
      </form>
    </div>
  );
}

export default App;
```

This only renders the basic text input field, but already, we could ask a couple of questions.
- First, if all  we're rendering is an input, then why are we bothering to put it inside a form?
- Second, there are a lot of different kinds of input's, how does this one know to be a text input?

The answer to the first question has to do with the form being stateful. To some extent, the form tag will be able to keep track of what its children are doing.

The second question, a basic text field is what an input tag defaults to, but this isn't very semantic. Another way to say it is that this code isn't very "self-documenting", meaning other developers looking at our code in the future might have a harder time understanding what it's for. What's even worst is that screen readers might have difficulty parsing what it's for. A trivial effort from us can mean a world of difference for future developer or for someone using screen reader.

We can improve the code above by simply doing something like this:

```
import React from 'react';
import "./App.css";

function App(){
  return(
    <div className="App">
      <form>
        <label>
          Username:
          <input type="text" />
        </label>
      </form>
    </div>
  );
}

export default App;
```

## Overview:

Now that we've got a way for users to input text, the next step is to capture that value. In a regular DOM environment, each change to this input would create a "change event" that the DOM API would expose to us, but remember: React operates out of a virtual DOM. When React is deciding what to render to the page, the DOM doesn't even exist yet. That's why the React team created "synthetic events", which effectively simulate DOM events inside the virtual DOM.

The **onChange** handler on an input captures the typing event. The event object stores the new value from the input. WE get access to the typing event from **onChange**, because the event holds the value of the input. Because of this, we have access to what our user's input from the event object. This pathway is vital if we want to manage input values in react state.

```
// inline
<input onChange={event => console.log(event)} />

// function defined somewhere else
const logEvent = event => {
  console.log(event);
}

...
<input onChange={logEvent} />
```

Using react, we can use the following to stay in sync with the input data.

```
const Form = () => {
  const [inputValue, setInputValue] = useState('');

  const changeHandler = event => {
    setInputValue(event.target.value);
  };

  return(
    <div className="App">
      <form>
        <label>
          Favorite Ice Cream:
          <input type="text" onChange={changeHandler} />
        </label>
      </form>
    </div>
  );
};

```

### Follow along - handling input changes

```
import React, { useState } from 'react';
import "./App.css";

function App(){
  const [name, setName] = useState('');
  return(
    <div className="App">
      <form>
        <label>
          Username:
          <input type="text" onChange={event=> setName(event.target.value)} />
        </label>
      </form>
    </div>
  );
}

export default App;
```

The new form isn't different from vanilla JavaScript. We inform our input tag to listen for changes. Each change creates a synthetic event. We then pass the value of that event to our state setter and capture it in our **name** variable.

This isn't a bad start, but writing our function inline like this could get messy if we ever wanted to execute more than one statement per change(firing off an animation, for example).

```
import React, { useState } from 'react';
import "./App.css";

function App(){
  const [name, setName] = useSTate("");

  const handleChange = event => {
    setName(event.target.value);
  };

  return (
    <div className="App">
      {console.log(name)}
      <form>
        <label>
        Username:
        <input type="text" onChange={event => handleChange(event)} />
        </label>
      </form>
    </div>
    )
}

export default App;
```

This might seem like extra work but notice that within the body of our **handleChange** function, we can now execute as many lines of code as we want without cluttering up our markup.

## onSubmit

The data we have gathered from our users is very important to us, the software, and our company. So when a user fills out a form, we need to know how to let the user "submit" that data. The first thing we think about when we say "submit a form" is a button click. We'll look at how to handle button clicks for sure, but there's an even better solution for form submission.

Imagine you'll fill out a form with 10 input fields. You have been keying tab to navigate to each input. You get to the end, what is the most natural action at this point? Most people would hit **enter** to submit a form. Now imagine doing so, and nothing happens?

In order to give our users a great experience in our software, we also want to learn how to submit forms using the element's **onSubmit** event handler.

## Follow Along: Submitting form dat:

As mentioned above, in real applications, we'd probably be sending this information asynchronously to a server to authenticate them, but for now, let's just log the user to the console. to do this, we'll need a submit button and a function to handle that submit.

```
import React, { useState } from 'react';
import "./App.css";

function App(){
  const [name, setName] = useState('');

  const handleChange = event => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    console.log(name);
  }

  return(
    <div className="App">
    {console.log(name)}
    <form>
      <label>
        Username:
        <input type="text" onChange={event=> handleChange(event)}/>
      </label>
      <button onSubmit={()=> handleSubmit()}>Submit</button>
    </form>
  </div>
  )
}

export default App;
```

When we clicked our button, the page refreshed. IN the early days of the internet, when the spec for this stuff was written, that behavior was actually useful. Not anymore, in our case, with a single  page application, we definitely don't want our page refreshing. If it did so, it would clear out our state and cause all kinds of problems.

We need to block the default behavior of the onSubmit listener. To do that, we'll need to grab that event object again. We'll also need to peel the submit handler off our **button** and put it on the form itself. The form tag keeps track of what its children do.

If there's only one button inside a form, the form will know how to fire the function attached to its **onSubmit** listener. The form is also the element causing the default refresh of our page, and as such, it's the only thing that can prevent it, so we have to grab the event object from the form.

Updated code:

```
import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  const handleChange = event => {
    setName(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(name);
  };

  return (
    <div className="App">
      {console.log(name)}
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Username:
          <input type="text" onChange={event => handleChange(event)} />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
}

export default App;
```

## Multiple input - form submission

Handling multiple inputs can get a little awkward in web apps. If I asked you to add a second input to a form right now, you would first add an input to the JSX, then add a state property for that input, then add a new function to handle that input. That works but imagine doing that 5-10 times for larger forms. Or more!

to fix the problem, follow along:

```
import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(name);
    console.log(password);
  };

  return (
    <div className="App">
      {console.log({ name })}
      {console.log({ password })}
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Username:
          <input type="text" onChange={event => handleNameChange(event)} />
        </label>
        <label>
          Password:
          <input type="text" onChange={event => handlePasswordChange(event)} />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
}

export default App;
```

We had to change some of our names around now that we're handling two fields instead of one, but none of the underlying logic changed. Now, this code work.

But there's another piece of advice that we're familiar with: **Don't Repeat Yourself (DRY)**
We sure are repeating ourselves a lot here. We're keeping the information about one user in two completely separate state variables, and we've written two completely separate functions with identical logic.

How to improve?

We have to goals.
1. First we want to store both the username and password in a single state object.
2. We only want to write one single change handler function that will dynamically find the corect key in our state object to change.

To achieve these goals, we need to learn about two tools provided to us by ES6: the spread operator and computed properties.

### The Spread Operator

The spread operator is a swiss army knife for JavaScript. We're not going to delve into all its uses here. Our focus here is to highlight its ability to help us make copies of objects and arrays.

```
let foo = {key: "value"};

let bar = foo;

console.log(foo); // {key: "value"}
console.log(bar); // {key: "value"}

foo.key = "change";

console.log(foo); // {key: "change"}
console.log(bar); // {key: "change"}
```

This is counterintuitive. When we declared our **bar** variable, we thought we were making a copy of foo but we werent'. We were merely creating two separate references to the same object data stored in memory. When we change the data in that location and called upon their reference (**foo** and **bar**), they simply logged what they were told to point at. This is a little annoying, but really, it's the only way objects can work. If objects copied by default and said objects referred to each other, we'd be in an infinite loop.

Okay, so creating a new binding doesn't give us a new object. How can we create a new object? Well, there are a few ways, but one convenient(and arguably the most readable) methods is to use the **...** spread operator.

```
let foo = {key: "value"};

let bar = {...foo };

console.log(foo); // {key: "value"}
console.log(bar); // {key: "value"}

foo.key = "change";

console.log(foo) // {key: "change"}
console.log(bar) // {key: "value"}
```

This time, when we declared the **bar**, we take all the key value pairs inside foo (in this case, there's only one) and "spread" them out (copy them) inside a brand new object literal. This gives us the behavior we expected to see in the first place.

So what does this have to do with react? Two things.
When the state changes, your view layer reacts to the change and updates. To get a little more technical, something in our state changes. React triggers a re-render of every component that is using that data. If react doesn't think that state has changed, it won't trigger a re-render. Remember that our first goal was to keep the username and password in a single state object instead of repeating ourselves with two useStates?

```
import React, { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({ name: "", password: "" });

  const handleNameChange = event => {
    setUser({ name: event.target.value });
  };

  const handlePasswordChange = event => {
    setUser({ password: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(user.name);
    console.log(user.password);
  };

  return (
    <div className="App">
      {console.log(user)}
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Username:
          <input type="text" onChange={event => handleNameChange(event)} />
        </label>
        <label>
          Password:
          <input type="text" onChange={event => handlePasswordChange(event)} />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
}

export default App;
```

By using this method, we screw up since it only updates one of the keys on our state object. Instead, we're replacing the entire object. If we type a letter in the Username field, we'll have changed the value of the user from {name: '', password:''} to {name: [whatever the users types]}. Then if we type in Password field, we'll have changed the value of the user again to {password: [whatever the user types]}.

This is definitely not what we want. Thankfully, our trusty spread operator can save us. By changing the change handlers to the following:

```
const handleNameChange = event => {
  setUser({ ...user, name: event.target.value });
};

const handlePasswordChange = event => {
  setUser({ ...user, password: event.target.value });
};
```

Here, our spread operators are telling react "Please copy all the keys and values in the user object into this new object literal, then overwrite the name and password keys respectively with the specific value."

So we've condensed our state into a single object, but we still have two change handlers with identical logic. This form only has two fields. Imagine if it had 10 or 100. Our change handlers would grow unwieldy very quickly. To make our form code DRY-er, we need to look at computed properties.

## Computed Properties

Another extremely useful tool from ES6, computed properties, lets us compute the properties of objects, as the name implies. 
