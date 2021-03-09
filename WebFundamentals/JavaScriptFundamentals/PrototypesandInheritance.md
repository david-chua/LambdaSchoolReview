# 'This'

There are four rules to this discovery. They all concern an object's bounds. Remember, JavaScript has global objects that exists wherever JavaScript lives. In the browser, this is called 'window', and in node it's called 'global/console'.

## Principle 1: Window/Global Object Binding

- When in the global scope, the value of 'this' will be the window/console object;

```
function sayName(name){
  console.log(this);
  return name;
}

sayName("D'Artagnan");
```

## Principle 2: Implicit Binding

- Whenever a preceding dot calls a function, the object before the dot is 'this'.

```
const myObj = {
  greeting: 'Hello',
  sayHello: function(name){
    console.log(`${this.greeting} my name is ${name}`);
    console.log(this);
  }
};

myObj.sayHello('Ryan');
```

Another example is the following:

```
const sayNameFunc = obj => {
  obj.sayName= function(){
    console.log(`Hello my name is ${this.name}`);
    console.log(this);
  };
};
const me = { name: 'David'}
const you = { name: 'Freddy'}
sayNameFunc(me);
sayNameFunc(you);


me.sayName();
you.sayName();
```

In the example above, we can see that the function that receives an objects as an argument. Depending on the object being passed in, we get a different context for 'this', so when we log out the 'this' keyword, we get a different object each time its run.

## Principle 3: New Binding

- Whenever we use a constructor function, this refers to the specific instance of the object that is created and returned by the constructor function.

```
function CordialPerson(greeter){
  this.greeting = 'Hello ';
  this.greeter = greeter;
  this.speak = function(){
    console.log(this.greeting + this.greeter);
    console.log(this)
  };
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');

jerry.speak();
newman.speak();
```

## Principle 4: Explicit binding

Whenever we use JavaScript's call or apply method, this is explicitly defined.

WE can override how we set CordialPerson constructor objects by taking the object-oriented appraoch. WE do so by calling them explicitly with new functions, .call and .apply.


## Prototypes

All objects in JavaScript have a protoytype property by default. this property is used as an object to attach methods and other properties that can be delegated down to other child function/objects.

The constructor function is a way we can build objects.

```
function Animals(object){
  this.name = object.name;
}
```

A constructor function "contrcuts" objects. You can think of it as a template. The function itself needs to take in an object literal of some sort so that it can map that object literal's properties to a new object that will be returned once instantiated.

```
function Person(attributes){
  this.age = attributes.age;
  this.name = attributes.name;
  this.homeTown = attributes.homeTown;
  this.speak = function(){
    return `Hello, my name is ${this.name}`;
  };
}
```

We call Person with the new keyword and we feed it an object literal that will map to those attributes specified in the Person block.

* when new is called, the constructor function can essentially create  context for a 'this' object. Then what gets returned from that constructor function is that particular 'this' object with the new properties added to it.

```
const fred = new person({
  age: 35,
  name: 'Fred',
  homeTown: 'Bedrock'
});
```

#### Prototypes

the prototype is a mechanism by which all JavaScript objects inherit from one another.  You can think of prototype as an object that objects use to hold onto values that can be passed down to other objects.

Example above is great when doing single objects with specified attributes in the constructor.

refactoring example above to remove the speak function from the object, we will introduce  the .prototype.

```
function Person(attributes){
  this.age = attributes.age;
  this.name = attributes.name;
  this.homeTown = attributes.homeTown;
}
```

```
Person.prototype.speak = function(){
  return `Hello, my name is ${this.name}`;
};
```

Now that we have added the speak function to the prototype of Person, it will no longer be on the object fred. the Person prototype wholly owns speak. Person is now able to pass down speak to each instance of Person without creating a new property on any new objects.


```
function Child(childAttributes){
  Person.calll(this, childAttributes); // binding this to Person
  this.isChild = childAttributes.ischild; // this will be a special attribute to child.
}
```

The problem with Child is that it doesn't necessarily know about the person prototype yet. We have to manually tell Child about using Object.create();

```
Child.prototype = Objecvt.create(Person.prototype);
```

We now have linked the Person prototype together with the Child prototype. Eventually we'll get this linking for free with the class keyword, but seeing Object.create() is good because it demonstrates how the class keyword works under the hood.

```
const pebbles = new Child({
  age: 3,
  name: 'Pebles',
  homeTown: 'Bedrock'
  });
```

```
Child.prototype.checkIfChild = function(){
  if (this.isChild){
    console.log(`My name is ${this.name} and I am a child object`);
  }
}
```

#### Follow Along

Create a fruit constructor function that can build all instance of fruit with four properties
- type
- name
- isRipe
- calories

After those properties, our object should have two prototype methods added to it.

- calculateCalories - which logs the number of calories in a specified fruit * 100
- shipped - which takes in a destination and logs out the fruit's name was shipped to destination.  

code:

```

function Fruit(attrs) {
  this.type = attrs.type;
  this.name = attrs.name;
  this.isRipe = attrs.isRipe;
  this.calories = attrs.calories;
}

Fruit.prototype.shipped = function(destination){
  console.log(`Shipping ${this.name} to ${destination}`);
};

Fruit.prototype.shipped = function(){
  console.log(`Calories in ${this.name} are ${this.caloreis* 100}`);
}
```

Creating a child constructor called Banana

```
function Banana(bananaAttrs){
  Fruit.call(this, bananaAttrs);
  this.doMonkeysLikeIt = bananaAttrs.doMonkeysLikeIt;
}
```

Now to 'inherit' the prototype methods from the Fruit's prototype, we need to use the following code:

```
Banana.prototype = Object.create(Fruit.prototype);
```

Now we're going to want to add a method to our Banana's prototype called checkIfMonkeysLikeIt that will log out if the monkeys like bananas.

```
Banana.prototype.checkIfMonkeysLikeIt = function(){
  if (this.doMonkeysLikeIt){
    return true;
  } else {
  return false;
  }
}
```

NOTE The function above only belong to instances of Banana and NOT instances of Fruit.

Now that we have our Banana constructor and it is leveraging the power of the Fruit parent. Let's create a Kiwi constructor and add a special attribute to it called isFuzzy.

```
function Kiwi(kiwiAttrs){
  Fruit.call(this.kiwiAttrs);
  this.isFuzzy = kiwiAttrs.isFuzzy;
}
```

And then add a prototype method to kiwi called checkIfFuzzy;

```
Kiwi.prototype.checkIfFuzzy = function(){
  if (this.isFuzzy){
    return true
  } else {
    return false
  }
}
```

Now creating the objects from the constructor functions:

```
const newBanana = new Banana({
  doMonkeysLikeIt: true,
  type: 'Tree',
  name: 'Banana',
  isRipe: false,
  calories: 0.1
});

const newKiwi = new Kiwi({
  isFuzzy: true,
  type: 'Tree',
  name: 'Kiwi',
  isRipe: false,
  calories: 0.7
});
```

And check if things are all linked up properly.

newKiwi.shipped('Alaska');
newBanana.shipped('Colorado');
newBanana.checkIfMonkeysLikeIt(); // returns true
newKiwi.checkIfMonkeysLikeIt(); // won't work
newKiwi.checkIfFuzzy(); // returns true
newBanana.checkIfFuzzy(); // won't work
newBanana.calculateCals();
newKiwi.calculateCals();
