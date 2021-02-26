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

## Primitive Data Types (String, Number, Boolean)

Primitive data types, also known as basic data types are the simples data type in JavaScript. They're sort of like the primary colors in that all other data types are made of these types.

#### Strings

Strings are block of text. They will always be defiend with quotation marks around them (either single quotes or double). Any text with quotes around it (even numbers) are strings.

```
const dog = 'Fido';
const string = '2';
```


Numbers

Numbers are just that, numbers. Numbers do NOT have quotes around them. They can be negative as well. JavaScript does have a limitation on the size of a number (+/- 9007199254740991), but only very rarely will that limitation come up.

```
const answer = 42;
const negative = -13;
```


Booleans

Booleans are an important relic from the origins of computer science. It is a dichotomous concept that powers binary code. The only booleans in JavaScript are true and false, traditionally written in lowercase characters. These variables are useful when you need to employ some kind of dichotomous (or "yes"/"no") logic in your code.


```
const iLoveJavaScritp = true;
const isThisaString = false;
```


#### Undefiend and Null

There are a couple of JavaScript objects that don't really fit into any types. Those are the values undefined and null. You will get undefined when you are looking for a variable that does not have a value yet. undefined simply means what you are asking for does not exist.

```
console.log(unknownVar); //undefined
```

null is an object that we, the developers, set when we want to tell other developers that the item they are looking for exists, but there is no value associated with it. While undefined is set by the JavaScript language is set by the developers. If you ever receive null, it means that another developer has set that value to null.

let phoneNumber = '123-456-7890';
phoneNumber = null;

phoneNumber; // null

Both undefined and null are neither strings.


#### Math Operators

Standard Operators

```
1 + 1; // 2
2 * 2; // 4
2 - 2; // 0
2 / 2; // 1

const num1 = 2;
const num2 = 2;

num1 + num2 // return 4

const string1 = 'My name is'
const string2 = ' Bob';

string1 + string2 // 'My name is Bob'

#### %

Something you may not have seen before is the module operator (%). This math operator will divide two numbers (integers or floats) and return only the remainder. For example 10/3  is 3 with a remainder of 1, so 10 % 3 will return 1.

21 % 5 // 1
21 % 6 // 3
21 % 7 // 0

```

#### Math.pow

We can use the pow method on Math to return a number raised to an exponent. It will take two numbers. The first is the base and the second is the power. For example, Math.pow(5,2) calculate 5 squared, which is 25.

```
Math.pow(2,2) // 4
Math.pow(3,2) // 9
Math.pow(3,3) // 27
```

#### Math.round, Math.floor, Math.ceil

.round rounds a number to the nearest whole number.
.floor will round a number down to the nearest whole number.
.ceil will round up to the nearest whole number.

```
Math.round(6.5) // 7
Math.round(6.45) // 6
Math.floor(6.999) // 6
Math.ceil(6.001) // 7
```

#### Truthiness

When using an if statement or other statements that expect a Boolean value (such as the !, NOT), if the expression given is not a Boolean v alue, JavaScript will do something called type coercion and transform whatever it is given into a Boolean value. This is known as "truthy" or "falsey".

```
// items that are interpreted as true
true
1
' '
[] // an array
{} // an object
function() {}


// items that are interpreted as fasle
false
0
undefined
null
''

```

#### Comparison Operators

JavaScript has a number of comparison and logical operators. These operators work just as they would in math: greater th an, less than, greater than or equal to, and all the rest. We use these operator to evaluate two expressions. As the computer runs the code, the operator will return either a true (if the statement is true) or a false (if the statement is not true).


```
1 > 2; // false
2 < 3; // true
10 >= 10; // true
100 <= 1; // false]

````

The "triple equal" sign (===) must not be confused with the single equal sign (which indicates assigning a value to a variable). The triple equal will compare everything about the two items, including type, and return if they are exactly equal or not. (Something to note: There is also "double equal" (==) which will compare two items but will allow type coercion so a string and an integer can be considered equal (1 == '1') // true).

```
1 === 1;  // true
1 === '1'; // false
'cat' === 'cat'; // true
'cat' === 'Cat'; // false

```

### Logical Operators

#### &

The first logical operator we will look at is the "AND" operator.

This will evaluate both expressions and will return true if BOTH expressions are true. If one or both is false, then the operator will return false.

#### ||

The "OR" operator will check the two expression and return true if either one is true. It will re turn false only if BOTH expressions are false.

```
(100 > 10 || 10 === 10) // true
(10 == 9 || 10 > 9) // true
(10 === 9 || 1 > 9) // false
```

#### !

"NOT" operator. The NOT operator will return the opposite of Boolean value.

```
(!false) // true
(!(1===1)) // false
```

Note about Logical Operators:

- The expressions are evaluated in order, and the computer will skip any redundant expression. In an && statement, if the first expression is false, the second expression will not be evaluated because BOTH expressions need to be true. Same for the || statement. If the first expression is true, the second will not be evaluated because there only needs to be the one true statement to fulfill the requirements.

- Use parenthesis. As we saw in the second ! operator example, we use parenthesis to evaluate what was inside the parenthesis FIRST, and then applied the ! operator.
