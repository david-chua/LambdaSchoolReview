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
