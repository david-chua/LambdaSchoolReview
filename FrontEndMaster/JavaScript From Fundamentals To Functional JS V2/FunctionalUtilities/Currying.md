# Currying

When you create a function that can later be called multiple times with different arguments

_.curry(func, [arity=func.length])

var abc = function(a,b,c){
  return [a,b,c]
}

var curried = _.curry(abc);

curried(1)(2)(3);
// -> [1,2,3]

curried(1,2)(3);
// -> [1,2,3]



## Composing

const consider = (name) => {
  return `I think it could be ... ${name}`;
}


const exclaim = (statement) => {
  return `${statement.toUpperCase()}!`
};

const blame = _.compose(consider, exclaim);

blame('you');

--> 'I think it could be... YOU!'
