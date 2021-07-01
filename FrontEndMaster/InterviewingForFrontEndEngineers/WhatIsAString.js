/**
Knowledge: Strings

- primitive type but contains methods

contain:

.split()
.toLowerCase()
.substring()
.startsWith()

**/


// Reverse a string

// Create a function to reverse a string

/**
 reverse('Hello, world!'); // !dlrow, olleH
**/


// function reverse(str){
//   return str.split('').reverse().join('');
// }
//
// let hello = "Hello, world";


/**
Built in methods

* Object.entries()
* Array.from()
* [...item]
* .isArray()
* .filter() - returns a new array
* .reduce() - returns whatever
* .concat() - returns a new array
* .join()
. pop() - returns an item
. push() - doesn't return anything
* .map() - returns a new array

**/


let array = ['apple', 'mixture', 'lesson', 'texture', 'water'];


let getFiveLetter = function(arr){
  let result = arr.filter((item) => {
    return item.length <= 5
  })
  return result
}


console.log(getFiveLetter(array))


let aLetterWord = function(arr){
  let result = arr.filter((item) => {
    return item.startsWith('a');
  })
  return result;
}

console.log(aLetterWord(array))
