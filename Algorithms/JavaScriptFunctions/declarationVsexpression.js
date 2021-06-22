console.log(funcD());
console.log(funcE());


function funcD(){
  console.log('function declaration');
}


let funcE = function(){
  console.log('function expression');
}


// function declaration can be used
// before it's definition

// function expresion is not becauase
// it is saved as a variable.

// when you want to pass a varaible to a function, you need to use function expression.
