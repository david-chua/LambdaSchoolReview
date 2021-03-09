# Classes

Because the original prototype system in JavaScript is rather clunky, we now have the class keyword to simplify creating classes. with introduction of class keyword, we gain a lot of abstraction, which is why it is extremely important to achieve inheritance with what is known as the pseudo-classical inheritance pattern.

with ES6, we gained the ability to use what is known as the class keyword. This keyword is what we call "syntactic sugar" on top of the object built into JavaScript and the object's prototype system. The class keyword is not a new way of achieving object oriented inheritance in JavaScript.

```
class Rectangle {
  constructor(height, width){
    this.height = height;
    this.width = width;
  }
}

```

You can think of the constructor function as the foundation of every class. When present, you'll be building your object's properties inside the constructor's body on the this keyword.

any properties you bound to your created object can be passed in through the constructor method. In this case, we have height and width as attributes that we'd like to store on our created object.

declaring a new Rectangle

```
const newRect = new Rectangle(400, 800);
console.log(newRect) // Reactangle { height: 400, width; 800 }
```

## Inheritance with Classes

Inheritance is where classes shine. The extends keyword and super() function make it trivial to bind our classes together to achieve some simple object inheritance. The extends keyword will abstract away any of the Class.call syntax that we're used to. super() tells a parent's constructor to be concerned with the child's attributes and abstracts away the object.create(this, Class) syntax that is trickier to understand.

```
class Animal {
  constructor(name){
    this.name = name;
  }

  speak(){
    console.log(this.name + ' make a noise.');
  }
}
```

the speak method will not be a method on the object but will live on the object's prototype instead.

If we wanted to creat a sub class from our Animal subclass, it's effortless

```
class Dog extends Animal {
  constructor(name){
    super(name)
  }

  speak(){
    console.log(this.name + ' barks.');
  }
}
```

And using this child class:

```
const doggy = new Dog('Grizzly');
doggy.speak(); // 'Grizzly barks.'

```

### Overview

Some critical notes on classes:

* The object our class returns will have attributes assigned to it from the constructor() function.
* All methods attached to the class body will be stored on the Objects prototype in a special way. There is a bit more magic here than just Object.create(Foo.prototype) and class.call(this, attrs).
* The extends keyword is used to extend a parent object. A clue to finding out if a class is a subclass is to look for extends.
* Finaly, if you're going ot use extend, super() needs to be called from within the constructor function. This is to pass any new attributes back up to the constructor of the parent object.

Examples found below as we refactor the prototypes into classes:

```

function Person(attributes){
  this.age = attributes.age;
  this.name = attributes.name;
  this.homeTown = attributes.homeTown;
}

Person.prototyp.speak = function(){
  return `Hello, my name is ${this.name}`;
};


class Person{
  constructor(attributes){
    this.age = attributes.age;
    this.name = attributes.name;
    this.homeTown = attributes.homeTown;
  }

  speak(){
    return `Hello, my name is ${this.name}`;
  }
}

```

Reviewing the code above:
- speak is now assigned to the object prototype.
- this is a single class, meaning it is not extending a parent class.


Classes come in handy hen we have children objects that will be sub-classes of their parents. We accomplished this in the previous module with Child (see below):

```

function Child(childAttrs){
  Person.call(this, childAttrs); // this is a special sauce
  this.isChild = childAttrs.isChild; //this wil be a special attribute to child.
}

Child.prototype.checkIfChild = function(){
  if (this.isChild){
    console.log(`${this.speak} and I am a child object`);
  }
}

```

With classes, it can be written as such:

```
class Child extends Parent{
  constructor(chidlAttrs){
    super(childAttrs);
    this.isChild = childAttrs.isChild;
  }

  checkIfChild(){
    if(this.isChild){
      console.log(`${this.speak} and I am a child object`);
    }
  }
}

```
