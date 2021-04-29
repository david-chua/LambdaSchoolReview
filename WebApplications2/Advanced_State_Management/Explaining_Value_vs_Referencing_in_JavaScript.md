Article Link: https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0

Notes:

JavaScript has 5 data types that are passed by value:
1. Boolean
2. null
3. undefined
4. String
5. Number

Other 2 not referenced by the author:

6. bigint
7. symbol

We'll call this primitive types.

JavaScript has 3 data types that are passed by reference:
1. Array
2. Function
3. Objects

These are all technically objects, so we'll refer to them collectively as Objects.

## Primitives:

If a primitive type is assigned to a variable, we can think of that variable as containing the primitive value.

var x = 10;
var y = 'abc';
var z = null;

x contains 10, y contains 'abc'.

When we assign these variables using =, we copy the variable to the new variable. They are copied by value.

```
var x = 10;
var y = 'abc';

var a = x;
var b = y;

console.log(x,y,a,b); // --> 10, 'abc', 10, 'abc'
```

Both a and x now contains 10. Both b and y now contains 'abc'. They're separate, as the value themselves were copied.

Changing one does not change the other. Think of variables has having no relationship to each other.

```
var x = 10;
var y = 'abc';

var a = x'
var b = y

a = 5;
b = 'def';

console.log(x,y,a,b); // -> 10, 'abc', 5, 'def'
```

## Objects:

Variables that are assigned a non-primitive value are given a reference to that value. That reference points to the object's location in memory. The variables don't actually contain the value.

Objects that are created at some location in your computer's memory. When we write arr = [], we've created an array in memory. What the variable arr receives is the address, the location, of that array.

Let's pretend that address is a new data type that is passed by value, just like number or string. An address points to the location, in memory of a value that is passed by reference. Just like a string is denoted by quotation marks ('' or ""), an address will be denoted by arrow brackets, <>.

When we assign and use a reference type varaible, what we write and se is

```
1. var arr = [];
2. arr.push(1);
```

The array in memory is what changes. When we use arr to do something such as pushing a value, the JavaScript engine goes to the location of arr in memory and works with the information stored there.

### Assigning by Reference

When a reference type value, an object, is copied to another variable using =, the address of that value is what's actually copied over as if it were a primitive. **Objects are copied by reference** instead of by value

```
var reference = [1];
var refCopy = reference;
```

Each variable now contains a reference to the same array. That means that if we alter reference, refCopy will see those changes.

```
reference.push(2);
console.log(reference, refCopy); // -> [1,2], [1,2]
```

We've pushed 2 into the array in memory. When we use reference and refCopy, we're pointing to the same array.

### Reassigning a reference

Reassigning a reference variable replaces the old variable.

```
var obj = { first: 'reference'}
```

When we have a second line:

```
var obj = { first: 'reference' };
obj = {second: 'ref2'};
```
The address stored in obj changes. The first object is still present in memory and so is the next object.

When there are no references to an object remaining, as we see for the first reference, the JavaScript engine can perform garbage collection. This just means that the programmer has lost all references to the object and can't use the object anymore, so the engine can go ahead and safely delete it from memory. In this case, the object { first: 'reference'} is no longer accessible and is available to the engine for garbage collection.

## == and ===

When the equality operators, == and ===, are used on reference type variables, they check the reference. If the variable contain a reference to the same item, the comparison will be true.

```
var arrRef = ['Hi!'];
var arrREf2 = arrRef;

console.log(arrRef === arrRef2) // -> true
```

If they're distinct objects, even if they contain identical properties, the comparison will return false.

```
var arr1 = ['Hi!'];
var arr2 = ['Hi!'];

console.log(arr1 === arr2); // -> false
```
If we have two distinct objects and want to see if their properties are the same, the easiest way to do so is to turn them both into strings and then compare the strings. When the equality operators are comparing primitives, they simply check if the values are the same.

```
var arr1str = JSON.stringify(arr1);
var arr2str = JSON.stringify(arr2);
console.log(arr1str === arr2str); // true
```

Another option would be to recursively loop through the objects and make sure each of the properties are the same.

## Passing Parameters through function

When we pass primitive values into a function, the funciton copies the values into its parameters. It's effectively the same as using =.

```
var hundred = 100;
var two = 2;

function multiply(x,y){
  // PAUSE
  return x * y;
}

var twoHundred = multiply(hundred, two);
```

In the example above, we give hundred the value 100. When we pass it into multiply, the variable x gets that value. The value is copied over as if we used an assignment. Again, the value of hundred is not affected.


## Pure Functions

We refer to functions that don't affect anything in the outside scope as pure functions. As long as function only take primitive values as parameters and doesn't use any variables in its surrounding scope, it is automatically pure, as it can't affect anything in the outside scope. All variables created inside are garbage collected as soon as the function returns.

A function that takes in an Object, however, can mutate the state of its surrounding scope. If a function takes in an array reference and alters the array that it points to, perhaps by pushing into it, variables in the surrounding scope that reference that array see that change. After the function returns, the changes it makes persists in the outer scope. This can cause undesired side effects that can be difficult to track down.

Most native array functions, including Array.map and Array.filter are therefore written as pure functions. They take in an array reference in internally, copy the array and work with the copy instead of the original. This makes it so the original is untouched the outer scope is unaffected, and we're returned a reference to a brand new array.

Let's go into an example of pure vs impure function.

```
function changeAgeImpure(person){
  person.age = 25;
  return person;
}

var alex = {
  name: 'Alex',
  age: 30
};

var changedAlex = changedAgeImpure(alex);
console.log(alex); // -> {name: 'Alex', age: 25 }
console.log(changedAlex); // -> {name: 'Alex', age: 25 }
```

this impure function takes in an object and changes the property age on that object to be 25. Because it acts on the reference it was given, it directly changes the object alex. Note that when it returns the person object, it is returning the exact same object that was passed in. alex and alexChanged contains the same reference. It's redundant to return the person varaible and to store the reference in a new varaible.

Let's look at a pure function.

```
function changeAgePure(person){
  var newPersonObj = JSON.parse(JSON.stringify(person));
  newPerson.age = 25;
  return newPersonObj;
}

var alex = {
  name: 'Alex',
  age: 30
}

var alexChanged = changeAgePure(alex);

console.log(alex); // -> {name: 'Alex', age: 30}
console.log(alexChanged); // -> { name: 'Alex', age: 25 }
```

In this function, we use JSON.stringify to transform the object we've passed into a string, and then parse it back to an object with JSON.parse. By performing this transformation and storing the results in a new variable, we've created a new object. There are other ways to do the same thing such as looping through the original object and assigning each of its properties to a new object, but this way is the simplest. The new object has the same properties as the original but it is a distinctly separate object in memory.
