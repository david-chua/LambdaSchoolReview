# Testing Web Applications

In this lesson, we are going to dive into implementing integration tests. The what and why of testing remains the same between all type of automated tests.

In this module, we will use the react-testing-library to run tests. Unlike previous testing libraries, react-testing-library is designed with the user in mind, testing components via DOM nodes, similar to how a user would interact with front end of a website.

react-testing-library recently underwent a major overhaul, we used to use a different library. Enzyme and Jest, for tests that cared more about the internal management of props and state. Now though, we can use react-testing-library to test props, state, output and more.

The "hello world" of the react-testing-library is a test to check if a component loads without crashing. Here, we declare a test, name it, and check if the App renders.

```
test("renders App without error", () => {
  render(<App/>);
})
```

Earlier, we discussed about the "Arrange, Act, Assert" structure for testing. There's a technical first step, import - we'll look at all of them below.

The following matches the structure we've studied and is slightly simplified version of what you'll find in the documentation. What we'll walk through in the tutorial is even more simple but this example is good for illustration.

Here we are testing the greeting component to see if our expected greeting ("hello lambdalorians") appears in the browser as we expect it will per the code below. Important note here, our tests work with text because that's what the user sees and what the user experiences - the test does not test on classes. For example, because that's an implementation detail and not a rendered element.

```
import React from 'react';

const Greeting = () => {
  return <h1 class="my-greeting">Hello Lambdalorians!</h1>
} ;

export default Greeting;
```

## Import

As with any library, we need to import react-testing-library before we can use it, this should look familiar from imports we've done before. You'll notice that "Arrange, Act, and Assert" are yet to be filled out.

```
// import dependencies;
import React from 'react';

// imporrt react-testing methods
import {render, screen } from '@testing-library/react';

// add Greeting
import Greeting from './Greeting';

test("render greeting on Greeting Component", async ()=>{
    // Arrange
    // Act
    // Assert
})
```

## Arrange

The render method renders the React element into a virtual DOM. Recalling our definition of "arrange", this is basically the part where we set ourselves up for success.

```
test("renders greeting on Greeting component", async() => {
    // Arrange
    render(<Greeting/>);
})
```

## Act

The **screen.getByText()** method can be used to "query" the DOM for a specific node by its text that we expect to see in the browser. We will use it here to test that our greeting ("hello lambdalorians") is being rendered by the **<Greeting />** component.

```
test("renders greeting on Greeting component", async() => {
    // Arrange
    render(<Greeting/>);

    // Act
    const greeting = screen.getByText(/hello lambdalorians!/i);

    // Assert
})
```

A quick note here you may notice is that "hello lambdalorians!" is written with **/** instead of **"**s. This is regex syntax and is commonly used in testing. The i designates our text as case insensitive so even though we have the string "hello lambdalorians" written, our test will pass even if "hElLo LamBdAlOriAns" is displayed in the browser.

## Assert

Finally, we need to assert that the greeting has indeed been rendered. Here we use a couple of new function - **expect** is a Jest function that is made globally available with create-react-app. The other, **toBeInTheDocument(), comes from JestDOM, a companion library to react-testing-library that provides custom matches for Jest.

```
test("renders greeting on Greeting component", async() => {
    // Arrange
    render(<Greeting/>);

    // Act
    const greeting = screen.getByText(/hello lambdalorians!/i);

    // Assert
    expect(greeting).toBeInTheDocument();
})
```

## Running Tests

Follow along:

See follow-along-testing project

Notes:

Now a few things about the export:

React has to be in scope because we will be using JSX. react-testing-library exposes a render function and a screen object that we are importing with import {render, scree } syntax.

* render allows us to render React components so we can test them.
* screen gives us access to the query functions needed to query the "screen" for different elements to test.

## Overview:

We test pieces of interface by capturing what we expect to see (or not see) in the DOM queries. What should (or should not) be there is rendered to the virtual DOM by the library's renderer. This is the DOM node of interest (a certain button, a label containing a specific text, an input with some specific value). We can run matchers against that piece of DOM to assert, for example, that the selection exists in the document, or that it's visible.

Let's consider the example of an increment counter that increases by one every time when the increment button is clicked.

```
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return(
    <div>
      <h2> {count} </h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count -1)}> Decrement</button>
    </div>
  )
}

export default Counter;
```

Our test would then look something like the following:

```
import React from 'react';

import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

test("increments count when increment button is clicked", async() => {
  //Arrange
  render(<Counter />);
  //Act
  const count = screen.getByText(/0/i);
  // get the button node
  const button = screen.getByText(/increment/i);
  // simulate a user click
  userEvent.click(button);
  // Assert
  expect(count).toHaveTextContent("1") // passes with 1 because we expect it to be 1 after a click.
  expect(count).not.toHaveTextContent('0');
});
```

## Break the test

We'll tell you to break the test often. In the example above there are multiple expect statements as an attempt to "break the test", this is important and intentional. When testing, we want to "break the test" as much as we possibly can, this is the best(and really the only) way to ensure that your website won't break when a user goes and tries to use it. 
