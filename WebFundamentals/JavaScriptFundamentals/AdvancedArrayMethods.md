# Advanced Array Methods

Callback functions come from a programming paradigm known as functional programming.

Take the following example into consideration:

```
const functionFeeder = function(callback){
  callback('Hello from the inside of the Function Feeder');
}
```

What we have done here is define a function called functionFeeder and passed a parameter called callback. So when functionFeeder is invoked, we can feed it a function as an argument. That function, in turn, will run the string Hello from the inside of Function Feeder back to the callback function it receives. And thus, when we call functionFeeder we can handle that string that comes back to us like so:

```
functionFeeder((string) => { // invoke the function
    alert(string); // alert a function that pops up a box in the browser.
})
```

functionFeeder respectively becomes what is known as a higher order function or a callback function, allowing it to take in a function as a parameter and executes a function when called with a function as the argument.


```
function sayHello(name){
  console.log(`Hello, ${name}`);
}
```

sayHello is a function with one purpose, to say hello to the name that is passed into it. Because we've build a function with such a straightforward goal, we can use it over and over again. Once we setup a function that will define the name we want passed to sayHello, all we'll have to do is pass it our function and let it perform is routin/action.

```
function callSayHelloWithLars(callback){
  const innerName = 'Lars';
  callback(innerName);
}
```

The callback in the above function will become sayHello when we invoke it like this:

```
callSayHelloWithLars(sayHello);
```

And callSayHelloWithLars executes sayHello as its Callback.

Now let's combine a few of the things we've learned today.

```
const items = ['feather', 'coupon', 'cup', 'drill'];
```

We could use a native for loop to loop over the list and log out every item.

```
for (let i = 0; i< items.length; i++){
  alert(items[i]);
};
```

or we can use the .forEach which is built into the language to allow us not to have to w rite that everytime so we could use something like this.

```
items.forEach(item => alert(item));
```

NOTICE this part is the callback item => alert(item)

Create a function called show first that passes back the first item in the given array:

```
function showFirst(array, callback){
  callback(array[0]);
}

showFirst(elements, (firstItem) => {
  alert(firstItem);
});
```

Create a function like showFirst but this time, show the length of the array passed.

```
function showLength(array, callback){
  callback(array.length);
}

showLength(elements, (length) => {
  alert(length);
})
```

```
const data = [
  {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
  {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
  {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
  {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
];
```

#### .map

.map asks us to create an array with just city and state names. We could do this by copying just city and state into a new array in a for loop like so:

```
const cityStates = [];
for(let i =0; i< data.length; i++){
  let mappedObj = {}
    mappedObj.city = data[i].city;
    mappedObj.state = data[i].state;
    cityStates.push(mappedObj);
    mappedObj = {};
}
```

.map is a higher level function that takes 2 arguments, a callback and a context. The callback is a function to be called "for" each item in the array, the context is the object value(s) to be used. You'll often see people say they are going to "map" data . That means they are going to apply a set of rules to a data set. For example "mapping" the array [1,2,3] times two would result in [2,4,6]

The map function can also take in a callback that passes back a couple of things to us. The three things you'd get back from a callback passed to Map would be:

- The current item of the array state
- The current index of the current item index
- The entire array data

In the example below, the value given in the callback is state since task 1 asks us to l ook at state data.

```
const mappedCityStates = data.map((state) => {
  return { 'city': state.city, 'state': state.state}
});
```

#### .filter

What if we only want to see states who's population is greater than 650,000? You can also do a for loop like follows:

```
const largStates = [];
for (let i = 0; i< data.length; i++){
  if (data[i].population >= 650000){
    largStates.push(data[i]);
  }
}
```

Now we can use .filter to iterate over all items in the array and return only what we want.

Filter takes exactly the same arguments as .map, namely, value, index, and array

```
const filterLargeStates = data.filter((state) => {
  return state.population >= 650000
});
```

Same results and cleaner code. The line return state.population >= 650000; tells JavaScript to return an object whose population is higher than 650000 and in turn, pass that object to a new array. The other objects( states with population lower than 650000) will be ignored since they don't pass this logic test.


#### .reduce

Reduce is slightly trickier than .map and .filter because it requires use of different arguments. Its powers though are endless. Essentially, reduce works to algorithmically simplify an array down to a single value.

Let's say we want a single number of all the state's population added together.

```
let statePopulations = 0;
for (let i =0; i< data.length; i++){
  statePopulations += data[i].population;
}
```

This is a relatively simple algorithm but let's look at it in terms of reduce function now. .reduce allows us to reduce all data to a single value. It is a perfect use here because we can aggregate the data and use .reduce to do so for us


```

const reduceStatePopulations = data.reduce((total, state) => {
  return total += state.population;
}, 0);
```

This is more succinct  but a lot is going on here. Importantly, we pass 0 as a second argument to our reduce function. This argument will become the starting value of our total, if not provided, would default to the first item in the array. In this case that would be disastrous because the first item in our array is an object, and we're trying to reduce our total to a single numerical value. Instead, we can provide a starting value for total and thus we set what our data type will reduce to. Remember the total also gets memorized or remembered by our function each pass.

The four items that get passed back from our callback function when using .reduce are:

- The current value of the total aggregated values
- We set the initial value at the end of the function.
- The current item in the array,
- The index again.
- The full array.

To sum up. These functions are fantastic and allows us to write clean, reusable code in a functional programming style. They give us the power to represent our data in an enjoyable way.
