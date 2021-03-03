## Scope

Scope is defined as which variables we currently have access to and where. So far in this course, we have mostly been working in global scope. In that we access any variables have created. There are a couple different levels of scope: block level scope is used in if statements and for loops. In block level scope, a variable declared using either let or const is only available within the statement or loop (lie i in a for loop). Similarly, there is function scope, where temperature exist inside a function, but not anywhere in the code file.

#### Function level scope

Function scope allows us to create variables inside of functions that are essentially private to that function. We can not reach into a function from the outside and get access to these variables. But we are free to use these variables anywhere within our function. conversely, we do have access to variables outside of the function.

```
const var 1 = 'Lambda';

function myFunc(){
  const var2 = 'School';
  console.log(var1);  // Lambda
  console.log(var2);  // School
}

console.log(var1);  // Lambda
console.log(var2);  // undefined

```

Because var2 is defined inside the function, it can't be accessed later on. var1, however, is global, and can be accessed anywehre.

#### Hoisting

Typically when we use varaibles we declare and initialize them in the same line. That looks something like thos:

```
// declare & initialize variable
var myVariable = "this is a variable";
```

According to the rules of JavaScript, we don't actually have to do it this way. For example, it is possible to declare the variables before initializing them.

```
// declare variables
var myVariable;
// initialize the variable
myVariable = 'this is a variable';
```

Another example:

```
console.log(myVariable);

var myVariable = 'this is a variable';
```

the console log will output undefined because of how the compiler runs. It first declares the variable with a value of undefined. then runs the script including the initialization of the variables with the values we give them.

How the example above is interpreted:

```
var myVariable;
console.log(myVariable);
myVariable = 'this is a variable';
```

Let's consider a function example

```
sayHello();

function sayHello(){
  console.log("hello"0;)
}
```

After declaring variables and functions, your compiler will also initialize functions. This means that functions can be used before they are declared or initialized. This only applies to declared functions, not function expressions.

All fo that encompasses the idea of hoisting. Hoisting is the ability to call functions and variables before they are declared. It is usually preferable to declare your function before you call it, but because of hoisting, you won't get an error either way. The only time you'd want to break that rule is if you wanted to invoke all the functions at the top of a file so that another developer looking at your file could see the tope what the file does.

We've mentioned minor differences between declaration types in the past. Those are explained by hoisting.

Declaration  with var and the function keywords are hoisted and can therefore be used anywhere in the script. These will return undefined if not yet initialized. Variables declared with let and const are not hoisted and thus cannot be used anywhere without throwing a ReferenceError. Basically, you can't use let variables or const variables before you've given them a value.


```

console.log('1a', myName1); //undefined
if (1){
  console.log('1b', myName1); // undefined
  var myName1 = 'Sunil';
}

console.log('2a', myName2); // error: myName2 is not defined
if (1){
  console.log('2b', myName2); // undefined
  let myName2 = 'Sunil'
}

console.log('3a', myname3) // error: myName3 is not defined
if (1){
  console.log('3b', myName3); // undefined
  const myName3 = 'Suni';
}
