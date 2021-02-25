# Intro to JavaScript

JavaScript is the backbone of interactive web pages. This module will tackle basic syntax and logic in JavaScript including variables, math, conditionals, loops and functions.


## What is JavaScript and why do we use it?

JavaScript is a programming language that was first created in 1994 as a way to add functionality and interactivity to a website. If we think back to our analogy of a web page as a house, we will remember that we said that the JavaScript is the electricity, plumbing, and gas.

JavaScript vs Java

Creators of JavaScript is not the same as Java. Although they share similar names that is where the similarities end.

The creator of JavaScript wanted to borrow concepts from other programming languages, such as Scheme, Java, and C. Those of you with backgrounds in other languages may see things that look very familiar, mainly the use of classes and Object-Oriented programming (OOP) architecture. JavaScript is not a "true" OOP language. and many things you are familiar with from another language does not work with JavaScript.

JavaScript is considered a 'loosely' typed language, in which types do exists but they are not enforced. You do not have to declare a type when creating a variable or an array for instance.

How to 'run' JavaScript.

most JavaScript runs from a file with the extension of .js (ie: filename.js) and loaded into your browser via the script tag in your HTML.

## Variables


#### var

At the heart of the JavaScript  are variables. A variable is a way to store, change, and use data in code. To explain this concept, consider your favorite web page. There are lots of changing pieces on these pages. Instagram has likes and usernames, a video game has character selection, game score, and many more. Everyone of those changing bits are stored in a variable. The variable called score, for example, starts with 0, and changes every time you gather points in the game.

There are three keywords used to declare variables: var, let, and const. Each word comes with slightly different use cases, mostly based around what happens when you change the value of the variable.

```
var firstName= 'John';
let lastName = 'Smith';
const favoriteFood = 'Taco';

```

var is the ES5 way of declaring a variable. This is a generic variable. Variables created with var can be changed without causing errors. While that sounds like a good thing, using var too often can lead to buggy code.

Example:

```
var firstname =  'Alice';
firstName = 'Bob';
```

#### const

const variable is a variable that cannot be changed later in the code. It's short for "constant".

```
const firstName = 'Alice'
firstName = 'Bob'  // <- this would cause an error

```

This fixes the bug issue, but we know that sometimes variables do need to change.

#### let

Let is a new ES6 variable keyword. This will assign a variable much like var, but with a little different behavior. Most notably, it differs by creating "block level scope".

```
let firstName = 'Alice':
firstName = 'Bob'
```

There's a scoping difference between var, let, and const.

var

- Function scoped
- Duplicate identifiers are permitted
- Value is mutable

let

- Block scoped
- Duplicate identifiers are NOT permitted.
- Value is mutable

const

- Block scoped
- Duplicate identifiers are NOT permitted.
- Value is immutable.

Variable Scope

```

Function scoped

function example() {
  if (true){
    var myVar = 'Hello';
  }
  // Logs out Hello
  console.log(myVar);
}
example();

Block Scope


function example() {
  if (true) {
    let myLet = 'Hello';
  }
  // Reference error
  console.log(myLet);
}
example();

```

Global variables

```
globalVar = 'Do not do this';

let alsoGlobal = 'Global';

function example(){
  // Logs out Global
  console.log(alsoGlobal);
}

example();
```

Example:

```
var myVar = 'I am a var';
var myVar = 'I am a new var!';

console.log(myVar); // "I am a new var!"


let myLet = 'I am a let';
let myLet = 'I am another let';

console.log(myLet); // Duplicate declaration 'myLet';

let myLet = 'I am a let';
myLet = 'I am an updated let value';

console.log(myLet); // I am an updated let value


const myConst = 'I am a const'
console.log(myConst) // "I am a const"


const myConst = 'I am a const'
const myConst = "I am a new const"
console.log(myConst) //Duplicate declaration 'myConst';

const myConst = 'I am a const';
myConst = "I am a new const"
console.log(myConst); // TypeError: Assignment to constant variable

```


Block  scope example:

```
function myFunction(){
  if (true){
    let letScope = "Yes, we can use let!";
    var  varScope = "Yes, we can use var!";
    console.log("Can we access let here? " + letScope);
    console.log("Can we access var here? " + varScope);
  }

  console.log("Can we access var in function scope? " + varScope);
  console.log("Can we access let in function scope? " + letScope);
}

Output:

"Can we access let here? Yes, we can use let!"
"Can we access var here? Yes, we can use var!"
"Can we access var in function scope? Yes, we can use var"
// Uncaught referenceError: letScope is not defined

```
