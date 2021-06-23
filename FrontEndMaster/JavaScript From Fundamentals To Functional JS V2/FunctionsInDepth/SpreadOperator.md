const createTuple = (a,b,c,...d) => {
  return [[a,c], [b,d]];
}

createTuble('It', 'be', 'could', 'anyone', 'noone');
// -> [['It', 'be'], ['could', ['anyone', 'noone']]]



Argument Keyword:

const createTuple = (a,b,c,d) => {
  console.log(arguments); // undefined because of arrow functions
  return [[a,c], [b,d]]
}


const createTuple = function(a,b,c,..d){
  console.log(arguments);
  return [[a,c], [b,d]];
}


# ES5 Rewrite Solution

const add = function(a,b = 2){
  console.log(arguments);
  return a + b;
};

add(3);


const add = function(a,b){
  b = b || 2
  console.log(arguments)
  return a+b;
}


# Array Like Object

const constructArr = function(){
  const arr = Array.prototype.slice.call(arguments);
  arr.push('the billiars room?');
  return arr.join(' ');
};

constructArr('was', 'it', 'in');


## Result

const constructArr = function(){
  const arr = Array.prototype.slice.call(arguments);
  // --> ['was', 'it', 'in']
  arr.push('the billiars room?');
  // --> ['was', 'it', 'in', 'the billiards room?']
  return arr.join(' ');
  // --> was it in the billiards room?
};

constructArr('was', 'it', 'in');



## Array.from ( turns argument into actual array)

const constructArr = function(){
  const arr = Array.from(arguments);
  arr.push('the billiards room?');
  return arr.join(' ');
}

constructArr('was', 'it', 'in');



Implement _.from()


const from = arr => {
  return Array.prototype.slice.call(arr)
}
