# Objects

## Assignment with Dots

```
var person = {};

person.name = "Mrs. White";
person.name; //?? --> This returns 'Mrs. White' as a string.

var person = {
  "name": "Mrs. White"
}
```

## Access with Dots

```
var person = {};

person.name = "Mrs White";

var who = person.name;

var person = {
  "name": "Mrs White";
}

console.log(who) // returns "Mrs. White"
```

## Access with Dots pt 2
```
var person = {};

person.name = "Mrs. White"

var who = person.name;

who; // --> Mrs. White

person.name = "Mr. White"

who; // --> Mrs. White
```

storing a value by reference or value.
we store primitive value by value (string, number, null, undefined)
primitive value is passed by value
nonprimitive is passed by reference.

if you reference a primitive, it gets a new memory pointed
if you reference a non-primitive, it points to the same area in memory. Changing it causes the reference to be updated which is why person.name gets updated.
