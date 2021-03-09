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
