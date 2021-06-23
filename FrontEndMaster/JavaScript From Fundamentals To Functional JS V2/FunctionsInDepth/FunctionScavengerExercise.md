var nameImprover = function(name, adj){
  return 'Col ' + name + ' Mc' + adj + ' pants';
};


$('body').hide();

myArr.forEach(function(val){ console.log(val)});

$('button').on('click', function(){
  console.log('Don\'t press my buttons!');
})


## function definition
1. function(name, adj){ ...etc }
2. function(val){ console.log((val)}
3. function(){ console.log("Don't press my buttons")}

function name:
1. nameImprover
2. .forEach
3. .on
4. .log()
5. $ - jquery function.


## function body:

1. {
  return 'Col ' + name + ' Mc' + adj + ' pants';
};
2. { console.log(val)}
3. {
  console.log('Don\'t press my buttons!');
}

Function bodies does not get ran until function is invoked.

## Invocation/ Call- Time
1. .log() gets invoked when function is called
2. .hide()
3. .forEach()
4. $()

## Arguments and Parameters
Arguments - actual value of Parameters
Parameters - variable names

Parameters
1. name, adj
2. val in function(val)


Argument
1. 'body'
2. val in console.log(val)
3. function(val){console.log(val);} in the forEach() function.

## Return/Side Effects

Return

1. return 'Col ' + name + 'Mc' + adj + ' pants';


Side Effect - anything that reaches beyond curly brace of function.
1. console.log(val);
2. console.log("Don't press my buttons!")
3. .hide(); - anything on the DOM is going to be a side-effect.
