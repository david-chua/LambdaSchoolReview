import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// CRA projects now come with Jest installed and working out of the box.

//Now a few things about the export:
// React has to be in scope because we will be using JSX
// react-testing-library exposes a render function and a screen object that we are importing
// with import {render, scree } syntax.
// render allows us to render React components so we can test them.
// screen gives us access to the query functions needed to query the "scree" for different elements to test.


// it('renders without crashing', () => {
//   render(
//     <span className="greet">hellow world</span>
//   )
// })

// Note: Yoou would probably not need all three of these assertions to give you confidence that the code is working.

// it('renders without crashing', () => {
//   render(
//     <span className="greet">hellow world</span>
//   )
//
//   // the querying functionality is acccessed through the screen object.
//   const element = screen.queryByText(/hello/i);
//
//   expect(element).toBeTruthy(); // jest matcher.
//   expect(element).toBeInTheDocument(); // jest-dom matcher
//   expect(element).toBeVisible(); // jest-dom matcher
// })

it('renders "all about kittens" text', () => {
  render(<App/>);
  // IMPORTANT
  // queryByText() returns either the node or null
  const hasKittensText = screen.queryByText(/all about kittens/i);
  // expect(hasKittensText).toBeInTheDocument();
  // expect(screen.getByText(/all about kittens/i));

  // no matcher needed, although it may be added to improve readability
  // expect(screen.getByText(/THIS WILL MAKE THE TEST CRASH AND BURN/i));


  // many other queries are available to us. In our component, we have an aria-labeledby attribute
  // on the section to inform screen readers that the element <h2> is actually a label for the section
  // element. 
  expect(screen.getByLabelText(/All About Kittens/i));
})
