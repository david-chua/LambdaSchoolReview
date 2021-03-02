## Arrays

Arrays allows you to work with lots of changing data efficiently to keep code DRY.

We can think of arrays as storage containers of data. Building an array is simple. Declare a variable set it to []. We can then add however many strings, numbers, or Booleans we want to the container and access those items whenever we want.

ie:

```
const flavors = ['chocolate chip', 'sugar', 'peanut butter', 'lemon crip'];
```

.length

This method counts the number of items in an array;

```
console.log(flavors.length); // 4
```


#### Accessing items in an array.

We can access an item in an array anytime. The items are given a numerical position (index). An array's numerical order ALWAYS starts at 0, so the first item is the 0 index, the second in the 1 index, etc.

In order to access the items, we type the array variable followed by a bracket containing the numerical Assignment

```
console.log(flavors[1]); // 'sugar'
```

Without knowing an array's length, it's still possible to access the last item using some simple logic. The return of the length property -1 will always return the last item in the array.

```
console.log(flavors[flavors.length-1]); // 'lemon crips'
```

#### .push & .pop

.push adds an item to the end of the array, incrementing its length by 1.

```
const flavors = ['chocolate chip', 'sugar', 'peanut butter', 'lemon crisp'];

flavors.push('carmel Pecan');

console.log(flavors);  // ['chocolate chip', 'sugar', 'peanut butter', 'lemon crisp', `carmel pecan`]
```

.pop removes the last item in the array, decrementing the length by 1.

```
const flavors = ['chocolate chip', 'sugar', 'peanut butter', 'lemon crisp'];

flavors.pop();

console.log(flavors);  // ['chocolate chip', 'sugar', 'peanut butter']
```


#### .unshift and .shift

.unshift(item) will put a new item in the first position of the array.

.shift will remove the first item in the array.

```
const flavors = ['chocolate chip', 'sugar', 'peanut butter', 'lemon crisp'];

flavors.unshift('carmel pecan');

console.log(flavors);  // ['carmel pecan', 'chocolate chip', 'sugar', 'peanut butter', 'lemon crisp']

flavors.shift();

console.log(flavors);  // ['chocolate chip', 'sugar', 'peanut butter', 'lemon crisp']
```
