# Testing React

Today we're going to continue working with React Testing Library to test rendered DOM elements. In this objective, we will focus on testing data being passed as props and testing props changes that may happen in a component.

In some cases, when props are updated, you'll want to run a secondary test on the same component. With our previous knowledge of react testing library, this would have been difficult. But thanks to a built in method called **rerender()**, this allows us to look easily at components with new props.

In order to do this, we need to add the **rerender** function when setting up our tests for use in testing the component after the props has been updated.

Let's look at an example where we have some component called **PhoneNumber** that the user will update their phone number. We want to show an error message when the component is empty but passe the test after user puts in a number between 0-10.

```
//name test
test("entering an invalid value shows an error message", () => {
    // pull in testing properties - add rerender and debug.
    const { getByLabelText, getByRole, rerender }  = render(
      <PhoneNumber />
    );

    const input = getByLabelText(/favorite number/i);
    // update prop
    fireEvent.change(input, { target: { value: "2025550113" } });
    // test component
    expect(getByRole("alert")).toHaveTextContent(/the number is invalid/i);
    // test prop updates
    rerender(<PhoneNumber phoneNumber={"2025550113"} />);
});
```

How does this work in practice? In the example above, we are interested in a component called PhoneNumber. Since the first test is testing the component before the updates, the test will fail and show an error message. Once the user inputs their number however, the second test (the rendering) should pass.

## Assert Content is not Rendered

In some cases, we want to make sure that content is not rendering on the DOM. For example, if a component should show up on click or, really any time after pageload. React testing library isn't exactly built for this as all **getBy** assertions return an error if they can't find the thing they're searching for (if a return is **null**). Luckily there is a workaround here - the assertion called **queryByRole** or any **queryBy** assertion, will return null instead of an error. This let's us query for something that isn't supposed to be on the DOM. It allows us to use an assertion like **.tobeNull()** or **toBeFalsy()**. and then tests will start passing even when no content is rendered.

```
test("entering an invalid shows an error message", () => {
    // pull in testing properties - add rerender.
    // render the component without a prop.
    const { getByLabelText, getByRole, queryByRole, rerender } = render(
      <PhoneNumber/>
    );

    const input = getByLabelText(/favorite number/i);
    // etest component
    expect(getByRole("alert")).toHaveTextContent(/the number is invalid/i);
    // test prop updates by rerendering component with different props.
    rerender(<PhoneNumber phoneNumber={"2025550113"} />);
    // assert that the error message is NOT being rendered (optional);
    expect(queryByRole("alert")).toBeNull();
});
```

## Follow Along

In this example there is a parent component that is in charge of fetching the data from dog.ceo, and a child component that receives that data as a prop and displays the dog images on the page. For this example, we will render the dog images into a new component after the initial rendering of the page. We need to test is the dog image appear on rerender.

This means we want to test the child component. We will test that it gets a "getting data" message when it is passed an empty array as a prop. Then we will re-render the component and pass down our actual data, to simulate the parent component receiving data from the API and passing that data down to this child component.

Note that this means we don't have to test the async function or even the event that kicked off the API call. We just render what this component looks like when it first mounts with no data and what it looks like when it receives new props and re-renders.

1. Create test and pull in relevant matches from the react-testing library.

```
//import libraries
import React from 'react';
import { render } from '@testing-library/react';
import DoggoImages from './DoggoImages';

test("renders dog images from API", () => {
    // Render the component with an empty array.
    const { getAllByTestId, rerender } = render(<Doggos images={[]} />);

    // Assert that there are no dog immages rendered yet.
    expect(getAllByTestId(/doggo images/i)).toHaveLength(0);
})
```

2. Update props by passing a user input. Test update prop using rerender.

```
// import libraries
import React from 'react';
import { render } from "@testing-library/react";
import DoggoImages from './DoggoImages';

test('render dog images from API', () => {
    const doggoUrls = [
    'url-one.jpg', 'url-two.jpeg', 'url-three.jpg'
    ]

    const { getAllByTestId, rerender } = render(<DoggoImages images={[]} />);

    expect(getAllByTestId(/doggo images/i)).toHaveLength(0);

    // we will rerender the component with our dummy data passed in as the new props.
    rerender(<DoggoImages images = {doggoUrls} />);

    // assert that we now have dog images rendering!
    expect(getAllByTestId(/doggo images/i)).toHaveLength(3);
});
```

## Overview

A function in testing may have inconvenient dependencies on other objects. To isolate the behavior of the function, it's often desirable to replace the other objects with mocks that simulate the behavior or real objects. Replacing objects is especially useful if the real objects are impractical to incorporate into the unit teest.

Another use of mocks is as "spies" because they let us spy on the behavior of a function that is called by some other code. Mock functions can keep track of calls to the functions, as well as the parameters in those calls. We can even define an implementation for the mock, but that's optional. Simpler mocks that implement only enough behavior to execute test code are sometimes called "stubs".

## Follow along

Let's implement a helper function with an uncomfortable dependency that makes the helper impure (reliant on something outside of its scope) and therefore, harder to test:

1. Install the uuid npm library using **npm i uuid**. Make use of it in the following simple component.

```
import uuid from 'uuid';

export const makeUser = (firstName, lastName) => {
  return {
    id: uuid(),
    fullName: `${firstName} ${lastName}`
  };
};
```

2. Testing expected output against actual output would be hard, because uuid() generates a new random id each time. We can give it a try though. Note the use of .toEqual() to make our assertion. It compares nested properties of objects, which we need to check here.

```
import { makeUser } from '../utils/makeUser';

test('generates a user with an id and a full name', () => {
      // Arrange
      const expect = { id: "abcde", fullName: "Peter Parker"};

      // Act
      const actual = makeUser("Peter", "Parker");

      // Assert
      expect(actual).toEqual(expected);
})
```

This would result in an error due the uuid function outputting a random ID.

This type of test is called a unit test - a test for a single unit of code, like an isolated function like **makeUser**.

3. To get around this problem, we can stub out (create) a fake version of **uuid** that will replace the real one during the execution of the test. Outside of the test block, at the top level of the test file, place the following code:

```
jest.mock("uuid", () => () => "abcde");
```

Let's break it down. As the first argument to **jest.mock**, we pass the path to the module we want to replace. As the second argument, we pass a callback that returns whatever it is we want the faked thing to be. We wish for the "uuid" to become a silly stub function that always returns the same string: uuid() // "abcde". Our test should be passing now.

## Overview - Asynchronous

An asynchronous test is a special kind of test that does not complete right away, as it needs to wait for the result of one or more asynchronous operations. When writing asynchronous code, like when dealing with APIs, it's important to write asynchronous tests because other tests won't work as you expect.

React testing library has a couple helper functions for us to write these tests. The **waitFor** function from react testing library lets us tell the test that we need to wait for the async call to finish before continuing our assertions.

As mentioned before, we will also use the **jest.mock** function to make mocks of the asynchronous functions so we won't have to wait for the actual call to be made.

In the following tutorial, we'll walk through an example using API data. Just like we did with non asynchronous tests, we need to import components, render components, simulate event, and run the test - the difference here is simply a few added functions to make calls asynchronous.

## Follow Along

Let's say we have a component that fetches data from the dog.ceo API when the user pushes a "Fetch Doggos" button. The component uses a function called **fetchDoggos** to make the API call. We have pulled this function out of the component and into an **/api** directory in our file structure to make it easier to test. We would write ea test for this component following these steps.

### Import:

As usual, we need to import the required libraries for testing. In addition to our normal libraries, we'll import **waitFor** to make our function run asynchronously, and we'll import our component **fetchDoggos** and **mockFetchDoggos** so that we don' thave to wait for the actual call to be made.

* Import the regular **react** and **@testing-library/react** dependencies
* Also import **waitFor** from rtl
* Import **fetchDoggos** from the /api directory, and rename it to the **mockFetchDoggos** so we know that it will be mocked - remember that a mock allows us to isolate a function from its dependencies.  

```
// import libraries

import React from 'react';
import {render, fireEvent, waitFor } from '@testing-library/react';
import { fetchDoggos as mockFetchDoggos } from '../api/fetchDoggos';
import Doggos from './Doggos';

// set up test
test("renders dog images from API", async () => {});
```

### Mocking the Async Function

Next we need to set up the mock. Like before, we will create the mock outside of the test block to mock the fetchDoggos async function. Then inside the **test** block, we will tell the mock function with what data it should resolve. When the component makes the async request using our mocked function, it will resolve quickly with our data.

```
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { fetchDoggos as mockFetchDoggos } from "../api/fetchDoggos";
import Doggos from "./Doggos";

// create mock *before* setting up test
jest.mock('../api/fetchDoggos');

// set up test
test('render dog images from API', () => {
  // mock resolve dresults
  mockFetchDoggos.mockResolvedValueOnce({
    message: [
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg"
    ]
  })
})
```

### Render, Query, and Fire Events

Render the component, query for the necessary elements, and fire the onClick event with userEvent. This step should look familiar

```
//import libraries
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { fetchDoggos as mockFetchDoggos } from "../api/fetchDoggos";
import Doggos from "./Doggos";

// set up tests
jest.mock('../api/fetchDoggos');

test('renders dog images from API', () => {
  mockFetchDoggos.mockResolvedValueOnce({
    message: [
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg"
    ]
  });

  const { getByText } = render(<Doggos />);

  const fetchDoggosButton = getByText(/fetch doggos/i);
  fireEvent.click(fetchDoggosButton);
});
```

### Async/Await

At this point, the async call has been made. We need to tell our test that it is going to handle an async function by adding async right after the test name string, and before the callback function. This is using JavaScript async/await syntax. Basically this will tell the function that it's going to do an async operation.

```
// add async function
test("render dog images from API", async () => {
  // mock resolved results
  mockFetchDoggos.mockResolvedValueOnce({
      message: [
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg"
    ]
  })

  const { getByText }  = render(<Doggos />);
  const fetchDoggosButton  = getByText(/fetch doggos/i);
  fireEvent.click(fetchDoggosButton);
})
```

### await and the waitFor function

Tell the function which async operation it needs to wait for. There are two related parts we need to set up here, then we'll be able to make our assertion.

* Use the **await** keyword to tell the function we're awaiting for the async operation to finish.
* Use the **waitFor()** function to wait for RTL to update the DOM so we can query for the dog images.
* Write an assertion in the **waitFor** function callback function. Note that wait is usually required but certain assertions can work without it, you'll need to do research on a case by case basis to determine whether or not wait is required.

```
test("renders dog images from API", async () => {
  mockFetchDoggos.mockResolvedValueOnce({
    message: [
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg"
    ]
  });

  const { getByText, getAllByTestId } = render(<Doggos />);

  const fetchDoggosButton = getByText(/fetch doggos/i);
  fireEvent.click(fetchDoggosButton);
  // add await
  await waitFor(() => expect(getAllByTestId(/doggo-images/i)).toHaveLength(3));
});
```

### One Last Assertion

Finally, we will make sure that the correct function was called by adding an extra assertion.
```
expect(mockFetchDoggos).toHaveBeenCalledTimes(1);
```

Like follow:

```
test("renders dog images from API", async () => {
  mockFetchDoggos.mockResolvedValueOnce({
    message: [
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg"
    ]
  });

  const { getByText, getAllByTestId } = render(<Doggos />);

  const fetchDoggosButton = getByText(/fetch doggos/i);
  fireEvent.click(fetchDoggosButton);

  // add new assertion
  expect(mockFetchDoggos).toHaveBeenCalledTimes(1);

  await waitFor(() => expect(getAllByTestId(/doggo-images/i)).toHaveLength(3));
});
```
