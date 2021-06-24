# Higher Order Functions and Callbacks

## Higher Order functions

1. Takes a function as an input (argument)

```
element.addEventListener("change", () => {
  console.log("Our evidence is updated");
})
```

2. Returns a function as the output

```
const newClue = (name) => {
  const length = name.length;

  return (weapon) => {
     let clue = length + weapon.length;
     return !!(clue % 1);
  };
};
```

## Callbacks


### Example 1:

const ifElse = (condition, isTrue, isFalse) => {
  return condition ? isTrue: isFalse
};


// --> This will return the function, not the console.log as the function was not invoked.
ifElse(true,
  () => {console.log(true); },
  () => {console.log(false);}
);


### Example 2:

const ifElse = (condition, isTrue, isFalse) => {
  return condition ? isTrue(): isFalse()
};

const logTrue = () => {console.log(true); }
const logFalse =  () => {console.log(false);}

ifElse(true, logTrue, logFalse);


## Passing Arguments

var increment = function(n) { return n+1 };

var square = function(n) { return n *n };

var doMathSoIDontHaveTo = function(n, func){ return fun(n);};

doMathSoIDontHaveTo(5, square);  // 25
doMathSoIDontHaveTo(4, increment); // 5

## Translate into ES6 exercise

var increment = function(n) { return n+1 };

var square = function(n) { return n *n };

var doMathSoIDontHaveTo = function(n, func){ return fun(n);};

doMathSoIDontHaveTo(5, square);  // 25
doMathSoIDontHaveTo(4, increment); // 5


Translation:

const increment = (n) => { return n+1 }
const square = (n) => { return n*n }
const doMathSoIDontHaveTo = (n, func) => {return func(n)}

## Passing Arguments

// How do we pass arguments
const ifElse = (condition, isTrue, isFalse) => {
  return condition ? isTrue() : isFalse();
}

Result:
const ifElse = (condition, isTrue, isFalse, p ) => {
  return condition ? isTrue(p) : isFalse(p);
}


// args

const ifElse = (condition, isTrue, isFalse, ...args) => {
  console.log(args)
  return conditoin ? isTrue(...args): isFalse(...args)
  isTrue('Hi', "Bye", "HOLA")
};

ifElse(true, fn1, fn2, 'HI', 'BYE', 'HOLA');


// Before ES6

const ifElse = (condition, isTrue, isFalse) => {
  const args = [].slice.call(arguments, 3)

  return conditoin? isTrue.apply(this,args) : isFalse.applye(this,args);
};

const logTrue = (msgs) => { console.log(msgs) };
const logFalse = (msgs) => {console.log(msgs) };

ifElse(true, logTrue,logFalse);
