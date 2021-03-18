# Classes

With ES6, we gained the ability to use what is known as the class keyword. The class keyword is what we call "syntactic sugar" on top of the object built into JavaScript and the object's prototype system.

You already know how to work with classes because you know all about constructor, functions, and object prototype. Working with constructor functions to achieve object creation in JavaScript in fundamental to understanding how classes work.

There are two ways we can work with and define classes - class expressions and class declarations.

Class declaration:

```
class Rectangle {
  constructor(height, width){
    this.height = height;
    this.width = width;
  }
}
```

Here we have declared a Rectangle class. It looks similar to the constructor function that we're used to. However, we're deliberately placing it inside of the class.

Any property you bound to your created object can be passed in through the constructor method. In this case, we have height and width as attributes that we'd like to store on our created object. Remember, classes will return us objects.

Now if we wanted to use this class to create an object, it would look very much the same as constructor functions. All you have to do is declare some variable and assign it to the class using the **new** keyword.

```
const newRect = new Rectangle(400,800);
console.log(newRect);

Logs out:

Rectangle {height: 400, width: 800}
```

## Inheritance with Classes

Inheritance is where classes shine. The extends keyword, and super(); function make it trivial to bind our classes together to achieve some simple object inheritance. The extends keyword will abstract away any of the Class.call syntax that we're used to. super() tells a parent's constructor to be concerned with the child attributes and abstracts away the Object.create(this, class) syntax that is trickier to understand.

Here's how inheritance works with classes:

```
class Animal{
  constructor(name){
    this.name = name;
  }

  speak(){
    console.log(this.name + ' makes a noise');
  }
}
```

Notice that speak() is a method with some special syntax in this class. This method will not be a method on the object, but will live on the objects' prototype instead, which is nifty when you're worried about memory and such.

If I want to create a sub-class from the Animal class you can do so by this:

```

class Dog extends Animal {
  constructor(name){
    super(name);
  }

  speak(){
    console.log(this.name + ' barks');
  }
}
```

And using this child class, you can create the following object:

```
const doggy = new Dog('Grizzly');
doggy.speak(); // 'Grizzly barks.';
```
