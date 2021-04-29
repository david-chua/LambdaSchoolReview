// Testing gives us confidence in our code.

/**
3 main types of test:

1. end-to-end (Cypress)
  Run your project in an actual browser. Run as many user scenarios as possible
  Take a long time to run and takes a lot of computing power.

2. integration test (React Testing Library, Enzyme);
  Test how different pieces of your code work (integrate) together.

3. unit test (Jest)
  Test a single unit of code to make sure it always run correctly under many different scenario

**/

// jest - test runner
// - used for assertions (global functions)
// - uss global functions to structore our tests
// - test, describe, it
test('test name', () => {
  // if test does not throw an error, the test will pass.
  //throw new Error(); // we will not throw eerors in our test.. that is built into RTL
  // throw new Error("This test broke because of X,Y,Z");
})

// describe can have multiple tests by having nested it. 
describe('testing', () => {
  it ('should pass all the tests', () => {
    console.log("it passed");
  })
})
