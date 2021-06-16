# Destructuring

```
var obj = { first: "Dan", last: "Coelho"}

var first = obj.first;
var last = obj.last


## for arrays
const [ first, second ] =  [ true, false] // destructuring
```


```
const j = {x: 1}
j // {x: 1}
j.x = 3
3
j
{x: 3}
j.y = 4

j // {x: 3, y : 4}
```

```
{"name": "Rusty", "room": "kitchen", "weapon": "candlestick"}

const { name, room, weapon} = {"name": "Rusty", "room": "kitchen", "weapon": "candlestick"}
```


```
// Destructuring arrays
var [ a, b] = [1,2];
console.log(a,b) // 1,2

// Omit certain values
var [a, ,b] = [1,2,3];
console.log(a,b) // 1, 3

// combine with spread/rest operator( accumulats the rest of the value)

var [ a,...b] = [1,2,3]
console.log(a,b) // 1, [2,3]

// swap variables easily without temp
var a =1, b = 2;

//old way:
var temp = a
a = b
b = temp ;

// new way:
[b,a] = [a,b]


// Advanced deep arrays
var [a, [b,[c,d]]] = [1,[2,[[[3,4],5], 6]]];
console.log("a:", a, "b", b, "c", c, "d", d);
// a: 1, b: 2, c: [[3,4], 5], d: 6


// Objects
var { user: x} = {user: 5}
console.log(x) // 5

// fail-safe
var {user: x} = {user2: 5}
console.log(x) // undefined
