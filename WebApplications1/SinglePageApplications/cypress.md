the# Cypress.io

Writing good quality code isn't possible without tests. It's simply too difficult to catch every error on your own. In your careers, you'll be expected to write and understand different types of testing in order to speed up your work flow, prevent bugs, and integrate systems. There are four types of tests JavaScript developers write and tests work together to help diagnose problems.

The classification of the different types of tests are more to do with scopes, cost, and speed. In short, all forms simply automates manual processes.

## Static

Static test catch typos and errors as you write your code. If you have any type of debugging software in your IDE, it's running static tests.

## Unit

Unit testing verifies that individual, isolated parts of your code (like functions) work as expected.
ex. unit testing can verify that a return is of a certain type or that a particular string or image is rendered on a page.

## Integration

Integration testing works to test several units at one time - verifying that they work together as expected.

ex. If you have a function that relies on the output of another function, you might write an integration test to confirm that they're working together as expected. This can be done by simulating a user action to enter login credentials and submit a form, then verify that the submission links a user to a new page. Here, you're not testing the full app, but not testing just one function either.

## End-to-End

End to end testing looks at the entire user experience, from end to end. End to end testing basically asks "can a user accomplish an action?." This type of testing focus on UI and mimic how a user might interact with the app, simulating real events like button clicks, scrolls, form submits, and the like. You can picture end to end tests like imaginary friends, who use your app and point out all the non-intuitive parts, or bugs that users would encounter while using your website.

This section would focus on end to end testing of a unit tool called cypress.

## Arrange, Act, Assert

Al testing, of all kinds use the framework "arrange, act, assert" where a test is written to do the following.

1. Arrange - Setup a webpage, form input, etc.
2. Act - Simulate a user action, like a button click or form input
3. Assert - Verify that the simulated user action resulted in the expected output.

## Follow along:

Consider the examples below and classify each as **End to End** or other types of testing.

### Example 1:

A test that loads a web page and simulates user sign up, login, and navigation processes.

- This is an example of end to end testing because it simulates the entire user experience.

### Example 2:

A tool that debugs a js file, highlighting locations that are missing semi-colons, parenthesis, or other syntax.

- This is not an example of E2E testing, even though it focuses on a whole file because it works at the static-test level to catch typos and errors as you write code.

### Example 3:

A test that mimics a user filling out a registration form to verify that the user can submit a username and password on a button click.

- This is a tricky one because it's one of those places where the lines between integration testing and unit testing is blurry. It's important to remember that all of these tests are important in their own way. There is a different tool for every job, and a different test for every code.

## What is Cypress?

Cypress is an awesome testing tool for unit, integration, and E2E tests. Coincidentally it is also great for learning, thanks to its visual, guided user interface (GUI). Like React, Cypress is written in a way that is easy to understand, using English language functions like visit(url) and fire(event) that makes syntactic coding easier.

In traditional end to end testing, developers have to use and choose from a variety of frameworks, assertion libraries, wrappers, and more. Cypress was designed as an "all in one" testing framework where tests can be written in a single language (JavaScript) and run graphically in a browser.

### Install and Run cypress
To install, run the following command:
```
npm install --save-dev cypress
```

Once it's been installed, we can open Cypress with this command:

```
npx cypress open
```

Opening cypress for the first time you'll see a list of example tests. We recommend you run through all these examples on your own by clicking **Run all specs**

When you do this, you will visually see user simulations animated on a webpage in our browser as the tests are run. On your left side you can view test names and pass/fail icons while on the write you can view simulated user actions(remember our arrange/act/assert framework).

While this may be somewhat interesting to watch, our goal here is to write and run our own test. In order to do that, we'll practice by creating some really simple tests within an existing project structure.

### Testing structure

Synthactically, testing in Cypress looks something like this: Every test will start with a describe higher order function, and will accept a test as a callback function. Within the callback function there will be some **it** statement, as well as actions and assertions. We'll get into those more in the next objective. Here, we'll use a simple **expect** assertions and **visit** actions which work exactly as expected.

**cy.visit()** will simulate a user visiting a pag e.

**expect()** will verify that some expectation is met. (More on both below).

```
describe('Name Test', function() {
  it('Explain what it does', function(){
    // actions and assertions go here.
  })
})
```

### Interacting with elements

Just like we can inspect elements in a browser, we can use the selector playground to show the code needed to interact with certain elements.

When we go to write more useful tests, we'll use this often to grab components on a page.

### Follow along

Run in the fun bus project -

1. Install cypress locally with **npm install --save-dev cypress**.
2. Since there is no package.json in this project, we'll need to create one and add the following code to our new file:

```
{ "scripts":
  {"cypress:open": "cypress open"
  };
}
```

3. Run **npm run e2e** in terminal which will create a cypress.json file and a cypress folder within your website directory. Inside the cypress folder, you'll find four more folders, including the example files we looked at earlier.
4. To write our own tests, we'll need to create a new test file. You can call it anything you want but best practices suggest that the file name should match the function of the test. In this case, the file name would be **sample_test.js**.
5. From the cypress GUI, click on the file **sample_test.js** to run in the browser.
6. At this point, you should see **No tests found** error message as well as a default blank page.

## My First Test

Now let's return to the **sample_test.js** file and write a very basic tests. For setup purposes, we can write a test called My First Test and check to see if it equals true. This will always pass.

```
// arrange
describe('My First Test', function(){
// act
  it('Does not do much', function(){
// assert
      expect(true).to.equal(true);
  })
})
```

Until this point, we've been running tests on the default blank page. If we want to run tests on our own index.html file, we need to add the action **visit** into the //act portion of our test.

1. IN order to do this, we'll need to add a base URL to cypress.json file. You should use the format "http://localhost:8080/" such that the addition looks somethign like the below. Note that you can visit a URL without setting the baseURL, but then you would need the full file path in **cy.visit()**. That said, using **localhost:8080** is considered a best practice because it prevents an annoying automatic default refresh that happens under the hood.

```
{
  "baseUrl": "http://localhost:8080/"
}
```
2. Now that a baseUrl exists, you can run a second test to load your index.html page with **cy.visit()**.

```
describe('My Second Test', function(){
  // Arrange
  it('Visits a new site', function(){
    // Act
    cy.visit('index.html');
  })
})
```

### Interacting with Elements

The tests covered in the previous objectives are basically the simplest possible tests we can run. More practically, we'll want to test how a user interacts with the webpage such that we don't have to manually click around a page looking for bugs. To do that, we'll use a variety of cypress actions and assertions.

### Actions

We will primarily use Cypress to test whether or not user actions give the returns we expect them to. Actions in cypress are designed to simulate a user actions like a click event, a double click event, a scroll, or a checked box which are all the things we've been working in this unit.

### Visibility

Another important test we'll run is visibility, which are tests to check whether or not an element is hidden. Visibility tests can be chained with the actions above to see how elements appear and disappear depending on user actions.

In addition to actionability and visibility, Cypress allows us to test scrolling, covering, readonly animations, and more.

### Best practices

The following cheat sheet of best targeting elements is taken directly from the Cypress documentation.

Example 1:

```
cy.get('button').click()
```

Recommended: Never
Notes: Way too generic, no context.

Example 2:

```
cy.get('.btn-btn-large').click()
```

Recommended: Never
Notes: Bad: Coupled to styling. Highly subject to change.

Example 3:

```
cy.get('#main').click()
```

Recommended: Sparingly
Notes: Better, but still coupled to styling or JS event listner.

Example 4:

```
cy.get('[name=submission]').click()
```

Recommended: Sparingly
Notes: Coupled to the name attribute which has HTML semantics

Example 5:

```
cy.contains('Submit').click()
```

Recommended: Depends
Notes: Much better. But still coupled to text content that may change.

Example 6:

```
cy.get('[data-cy=submit]').click()
```

Recommended: Always
Notes: Best. Isolated from all changes.

### Assertions

After we set up the simulated user actions we will want to test that some expectation has been met: text has rendered on the page, a new page has loaded, etc. We'll do this using assertions.

The most common assertion is **.should()**: we'll assert that some element should contain some content or do a specific thing. Since Cypress code syntax is English-like, let's look at an example which tests that a link navigates to a new page.

```
describe('Link Navigation', function(){
    it('Asserts that the word instagram.com l ink to instagram.com', function(){
        cy.visit('index.html')

        cy.contains('Instagram.com').click()

        // Should be on a new URL which includes '/commands/actiosn'
        cy.url().should('include', 'instagram.com/')
    })
})
```

We saw **.contains()** in the example above. This will check if the selected element contains some specified content (like text or an image). Contains is a little tricky because it can also be used in either the **assertion** or **action** phase of your test. Contain can be used in place of id selectors to select elements based on text. For example, you could use **cy.contains('submit').click()** to simulate a user clicking a button or **cy.contains('Intagram.com')** to grab any element containing the text Instagram.com

### Testing DOM elements:

1. Arrange - First we need to set up our test with a name and function declaration. As covered in the previous objectives.

```
describe('Header Text', function(){
    it('Checks if header exists', function() { })
})
```

2. Act - Next we need to act. Our action here will simply be loading up the web page with **cy.visit**

Current code at this point:

```
describe('Header Text', function(){
    it('Checks if header exists', function(){
      cy.visit('index.html')
    })
})
```

3. Assert - Finally, we'll grab the header element of interest and assert that it contains the text "Fun Bus" with **cy.get('.logo-heading').contains('Fun Bus');

Final test code:

```
describe('Header Text', function(){
    it('Checks if header text exists', function(){
        cy.visit('index.html');
        cy.get('.logo-heading').contains('Fun Bus');
    })
})
```

### Failing Test

A test will fail when the expectation or assertion, is false. In our example above, if the logo-heading file doesn't contain the given text, the test would fail. To illustrate how these work, we could change the .contains() text to "Fun Bus!" and as expected, the test would time out because it can't find what it's looking for:

Example of failing test:

```
//Test will fail because header text does not contain the full string

describe('Header Text', function() {
    it('Checks if header text exists', function () {
        cy.visit("index.html");
        cy.get('.logo-heading').contains('Fun Bus!');

    })
})
```

### Running Cypress in console:

Cypress Run

- This command is used to run all cypress tests. By default, this command will run all tests, including the example tests. There are a plethora of options we can add in order to tailor the command to our needs. A full list of these options can be found in the documentation, but hte most important for us is **--spec**

## --spec

**--spect** or **-s** will specify which tests to run. So, **npx cypress run --spec "cypress/integration/sample_test.js" will run only the tests in the **sample_test.js** file.

You can specify multiple files by separating filenames with a, all inside of the quotation marks.

## Other Commands

The **cypress run** command is by far the most commonly utilized but **cypress open**, **cypress, verify**, **cypress version**, and **cypress cache** are all accepted as valid.

open - Opens the Cypress Test Runner in interactive mode.
verify - Verify that Cypress is installed correctly and is executable
version - returns package version and binary version for debugging (rarely used)
cache - view or clear cache
