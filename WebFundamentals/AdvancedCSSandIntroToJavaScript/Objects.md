## Objects

Objects used a concept called key:value pairs to house data. The key is the identifier and the value is the value we want to save to that key. The syntax is "key:value".

Objects can hold many key:value pairs. They must be separated by a comma. Keys are unique in an object. There can be only one key of that name. Although, multiple keys can have the same value.

Values can be any JavaScript type like string, number, Boolean, arrays, function, or even another object.

Creating a user object example:

```

const user = {
  username: "david.chua",
  password: "abcd123",
  lovesJavaScript: true,
  favoriteNumber: 3
}

```

#### Accessing Values

Once we have key value pairs, we can access those values by calling the object name and key. There are two different ways to do this, dot notation and bracket notation.

With dot notation, we call the object name, a dot, and the key name. This is similar to the .length property on an array.

```
user.lovesJavaScript; // true
user.username; // david.chua
```


Bracket notation is just like calling an item on an array, although with brackets, we MUST use a string or number, or variable pointing to a string or number. Each key can be called by wrapping it with quotes.

```
const passString = 'password';
user['lovesJavaScript']; // true
user['username']; // david.chua
user[passString]; // abcd123
```

#### Assigning Values

We can assign the values when we create the object, or later on with dot or bracket notation.


```
const newUser = {
  isNew: true,
}


const loveJSString = 'lovesJavaScript';
newUser.username = 'new.username';
newUser['password'] = '12345';
newUser[loveJSString] = true;
```

#### Removing Properties

If we want to remove a property, we can use the delete keyword.

```
const newObject = {
  removeThisProperty = true,
}

delete newObject.removeThisProperty;
```

It is rare we will see the use of the delete keyword. Many consider  it as best practice to set the value of the keyword to undefined.

## Properties and Methods

Properties allows us to access data from a data type.

```
const school = 'Lambda';
school.length; // 6
```

Methods allows us to manipulate a data type. Methods are different from properties in that they need to have parenthesis on the end. It's important to note that other methods are just functions and in order to invoke, you use a parenthesis.


The method we will look at here is the toString method. It will convert a Number or Boolean to a string.


```
const num = 42;
num.toString(); // "42"
```

#### Global Objects and Methods

JavaScript has a number of built in objects for us to use. These global objects extends the functionality of the language for us for free.

Methods

In addition to built in methods, we can create methods inside objects. We have used plenty of methods so far throughout the course. We can set a key to name, and value to a function.

```
const newObject = {
    sayHiMethod: function(){
      console.log("Hi Everyone!");
    },
}

newObject.sayHiMethod(); // Hi Everyone!
```


#### for ... in Loops

Sometimes we want to iterate over each key:value pair in our object. With arrays, we use a standard for loop and an index number variable. Objects do not contain numerical indexes so the standard loop will not work for objects. JavaScript has a second type of for loop built in called "for..in" loop.

The syntax for the "for..in" loop is slightly different from our first for loop and a bit more intuitive. After the for key word in the parenthesis, we will declare a variable (let variableName), use the keyword in, and then state the name of the object. This will loop over each key in teh object and finish when all of the keys have been iterated over.

```

const user = {
  username: 'david.chua',
  password: '12345',
  lovesJavaScript: true,
  favoriteNumber: 3
};


for (let key in user){
  console.log(key);
  console.log(user[key]);
}

// username
// 'david.chua'
// password
// '12345'
// lovesJavaScript
// true
// favoriteNumber
// 3
```


The 'this' keyword

Objects have a self-referential keyword that may be applied in each object called this. When called inside of an object, it is referring to that very object. this can be  used to access other keys in the same objects.

```
const user = {
  username: 'david.chua',
  password: '12345',
  lovesJavaScript: true,
  favoriteNumber: 3,
  userSaysHi: function(){
    console.log( this.username + ' says hi!');
  },
};

user.userSaysHi(); // david.chua says hi!

```

Note: the this keyword can sometimes be one of the more difficult topics in JavaScript.
