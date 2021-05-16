# Unit Testing

## Why do we test?

Testing is an important skill for a web developer to have. It's hard to anticipate everyway that a user might interact with your site. Not to mention, it is incredibly time consuming to manually test all of those options. That's where automated testing comes in. Any major company will use automated testing on its website as a safety net, to prevent regressions, and to get a better overall understanding of how an application works.

We'll quickly review what testing is before jumping into tooling we can use for automated testing. Generally speaking, testing is code that checks if the application code is correct.

If we don't have tests, it's safe to assume the following:

* application code has to be tested manually
* there is no way to know if a change broke another piece of code
* you cannot be sure if the code is correct
* manually testing takes a lot of unnecessary time
* adding new features become slow

## Advantages of Testing

* verifies edge cases
* developer can concentrate on current changes (safety net)

## Drawbacks of testing

* more code to write and maintain
* more tooling
* additional dependencies
* may provide a false sense of security
* trivial test failures may break the build
* regressions (when a new feature breaks existing code)

## What tools do we use for testing

**Jest**
We'll use the testing library jest in setting up our own test. Jest runs under the hood in react testing library, so a lot of what we do moving forward might look familiar. With create-react-app and react testing library, there was no need to install and set up Jest, there will be time and need to install and use Jest on its own.

Jest is a test runner and command line interface npm package. In addition to other types of tests we've seen, Jest can run asynchronous test, snapshot testing and provide coverage reports.

**Watch Mode**

You'll learn how to install and configure Jest in the tutorial below, but first, let's talk about watch mode. Instead of running tests manually, Jest has a built in feature called watch mode that will run tests automatically as files changes. Jest detects these changes automatically and only runs tests pertaining to the changes. This is one of the reason developers love Jest so much and hopefully one you'll find equally compelling.

## Follow Along - using jest

1. Install **Jest** npm as a development dependency
```
npm install -D jest
```

2. **Run Tests** - We can start Jest by typing npm test in a terminal window at the root of the project. However, since there are no tests written, it will return an error "No tests found" because there are no tests written yet.

3. **Create tests files** -By convention, jest will find your tests in two ways.
  * placing .js files in a folder called __tests__
  * ending the name of a file in **.test.js** or **spec.js**. Technically, you could give the __tests__ folder a different name, but then you'd need to manually change where Jest looks for test files.


## Unit Tests

You'll recall from a previous module that unit tests are where we isolate smaller units of software (often functions or methods). There are  usually many unit tests in a codebase and because these test are meant to be run often, they need to run fast. Unit tests are fast, they're simple to write and execute, and they're the preferred tool for test driven development (TDD) and behavior driven development (BDD). They are regularly used by developers to test correctness in units of code (usually functions).

## What Makes a good test?

A good unit test is independent, focused and only tests one unit of code. This type of tests focuses on one behavior or functionality (even if you have to make multiple assertions), therefore testing only what needs to be tested, and no more.

Another important consideration with testing is that you should try to avoid unnecessary preconditions. If your test relies on outside dependencies or other tests running first, you should factor to isolate the test (much like a pure function).

## Jest globals

* The **it** global is a method you pass a function to; that function is executed as a block of tests by the test runner.
* The **describe** is optional for grouping a number of related **it** statements, this is also known as a **test suite**.

### Hello world test

Let's consider a constant function. We'll use the simple **hello** function for testing purposes.

```
export const hello = () => "hello world!";
```

Next we'd move into our tests folder and set up a test asserting that we expect the return value of this functio to be hello world.

```
import { hello } from './App';
// arrange
describe("hello", () => {
  // act
  it("should return hello world!", () => {
    // assert
    expect(hello()).toBe("hello world!");
  })
})
```

The test should run automatically in the terminal thanks to our watcher.

## Import Globals in Jest

A few objects exists in the global scope like **describe** and **it**. You are already familiar with their used cases. When writing custom tests you may find that some tests need to be run more than once, like a test to render without crashing, for example, Jest has built in globals for this use case:

|  Global   |      Description   |
|-----------|--------------------|
| beforeAll | runs once before the first test |
| beforeEach |runs before the tests, good for setup code |
| afterEach | runs after the tests, good for clean up |
| afterAll  | runs once after the last test |

If there's ever a scenario in which you want to skip or isolate a test, use the following globals:

| Global   |     Description     |
|----------|---------------------|
| it.skip()| skips the test      |
| it.only() | isolates a test    |

## Follow Along - writing our own tests

We're going to write our own unit test for a JavaScript function called **averageTestScore**. This function takes an array of scores (numbers) and returns the average score.

Place this function in a file called **mathHelpers.js**

```
const averageTestScore = testScores => {
  let totalSumScores = 0;
  let numberOfScores = 0;

  for (let i = 0; i < testScores.length; i++){
    totalSumScores += testScores[i];
    numberOfScores++
  }

  return totalSumScores/ numberOfScores;
};

module.exports = averageTestScore;
```

In a mathHelpers.test.js file, we'll start creating the tests we want to run on our function. Remember, the **it** statements describe what the tests will do. While we're brainstorming, we can use **it.todo()** to capture ideas for future tests and fill up the test details one test at a time later. This will indicate to our test runner that we don't want to run that test yet, but to keep not of it instead.

```
describe('mathHelpers', () => {
    describe("averageTestScore", () => {
        it.todo("should calculate the average for an array of numbers");

        it.todo("should throw an error if the argument is not an array");
    })
})
```

After we've create the **it.todo()** statements, it's time to write the actual tests. We'll start by changing the **it.todo()** into **it()** globals. First, we'll set up dummy data and as usual, state the expected outcome in the form of a callback. For example, when we have a score array of [2,4,6,6,2], we expect the average to be 4.

```
const { averageTestScore } = requrie('./mathHelpers');

describe('mathHelpers', () => {
    describe('averageTestScore', () => {
        it('should calculate the average for an array of numbers', () => {
          const scores = [2,4,6,6,2]
          const average = averageTestScore(scores);

          expect(average).toBe(4);
        })

        it.todo("should throw an error if the argument is not an array", () => {
          expect(() => { averageTestScore(5) }).toThrow();
          expect(() => { averageTestScore("five and two") }).toThrow();
          expect(() => { averageTestScore({ number: 5 }) }).toThrow();
          expect(() => { averageTestScore(undefined).toThrow();
          expect(() => { averageTestScore(null).toThrow();
          expect(() => { averageTestScore(NaN).toThrow();
      })
    })
})
```

## Overview

Test driven development is the process of writing tests before code. In theory, when you start with end (the tests) in mind,  you can write much higher quality code. You might be familiar with similar philosophies in teaching (backwards planning) -- or from the famous book "7 habits of highly effective people".

Let's consider some unit of code. We want this function to take 2 numbers and return the first number to the power of the second number.

Some assertions we might want to check are:

* The function returns a number
* The function return a to the power of b
* The function does not return b to the power of a
* The function returns undefined if one parameter is not a number

There's really an endless amount of assertions we could check, but for test driven development it helps to think of the most likely scenarios where the unit could fail.

In this example, we'd write all of our tests in Jest. After that, we could start hacking away at the function. So as long as all the tests pass, you can be confident in what you've created.

## Follow Along

In this tutorial, let's consider an example where we want to write a function to accept a list of salaries and remove all the salaries less than $50,000.

Your list may contain some of the following ideas:

* The function should return an array shorter than the original array
* The array should contain numbers
* The function should remove all salaries less than 50,000.
* The function should allow for type coercion ("1" = 1).
* The function should not remove 50,000
* The function should not remove any salary above 50,000.

1. From the list genrated above, we'll wnat to start by writing a single assertion. This might look something like this:

```
describe("removeSalaries", () => {
    it ('should return an array of shorter length', () => {
        // assertions and mathers here
    })
})
```
2. Next, we want to write test. This is good practice for writing test writing from logic you are already familiar with. The final result will look something like this:

```
describe('removeSalaries', () => {
    it('should return an array of shorter length', () => {
        const salaries = [50000, 45000, 60000];
        expect(removeSalaries(salaries).toHaveLength(1));
    })
})
```

3. Once we've written the test, we can start writing code to make the test pass. Based on the test we've generated so far, we have a rudimentary idea of what our function needs to contain. We'll want to return an array of shorter length than our original array, and that return should filter based on salaries. One version of such a function is below, but there are plenty of options to make our tests pass.

```
// name function based on test
const removeSalaries = salaries => {
  // create an empty array
  const higherSalaries = [];
  // use conditional logic to add salaries to the new array
  for (x in salaries){
    if (salaries[x] < 50000){
      higherSalaries.append(salaries[x]);
    }
  }
  // return new array
  return higherSalaries;
}
```

4. Design a series of tests for a function that accept an array of object with the format **{name: "string", age: number}** and returns the names of all people who are over the age of 18.
Once our first test is passing, the process over and over again. As we write tests and refactor code, we develop something thorough and complete.

A final test file might look like this:

```
describe('removeSalaries', () => {
    it('should return an array of shorter length', () => {
        const salaries = [50000, 45000, 60000];
        expect(removeSalaries(salaries).toHaveLength(2))
    })

    it('should return numbers', () => {
        expect(removeSalaries(salaries).toContainType)
    });

    it('should remove all salaries less than 50,000', () => {
        const salaries = [50000, 45000, 60000];
        const expected = [50000, 60000];
        expect(removeSalaries(salaries).arrayContaining(expected));
    });

    it('should allow for type coercion', () => {
        const salaries = ["50000", "45000", "60000" ]
        const expected = [50000, 60000]
        expect(removeSalaries(salaries).arrayContaining(expected));
    });

    it('should not remove 50,000', () => {
        const salaries = [50000, 60000];
        expect(removeSalaries(salareis).toContain(50000));
    })
})
```
