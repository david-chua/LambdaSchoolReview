/**
write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.

Sample:
array = [1,2,3,5,6,8,9]
output: [1,4,9,25,36,64,81]


Note that some values maybe in the negatives. So squaring the value would result in -5 becoming 25. Thus ruining the result of the initial array being sorted.

ie:

array = [-3,2,5,10,12]
squared without organizing: [9,4,25,100,144] < -- not sorted
output = [4, 9, 25, 100, 144]
**/

// Brute Force Solution
/**
Steps:

1. Do a 4 loop and square the array values
2. Sort the result
**/

// This is a possible solution ONLY if question didn't specify to "return a new array" 
// In place
// time complexity: O(nlog(n)) - due tosorting algorithms
// space: O(1) - no additional space were added due to squaring in place.
function sortedSquaredArray(array){
  for(let i =0; i<array.length;i++){
    array[i] = array[i]*array[i];
  }

  return array.sort((a,b) => a-b);
}

let array1 = [-3,2,5,10,12]

console.log("in place", sortedSquaredArray(array1))

// New array method
// time complexity: O(nlog(n)) - due to sorting
// space: O(n) due to creating a new array.

function sortedSquaredArray2(array){
  let squaredArray = new Array(array.length).fill(0);
  for(let i = 0; i< array.length; i++){
    squaredArray[i] = array[i]*array[i];
  }

  squaredArray.sort((a,b) => a -b)
  return squaredArray
}

let array2 = [-3,2,5,10,12]
console.log("new array", sortedSquaredArray2(array2))

// Two pointer method
// time complexity: O(n)
// space complexity: O(n)
function sortedSquaredArray3(array){
  let squaredArray = new Array(array.length).fill(0);
  let leftPointer = 0;
  let rightPointer = array.length-1;

  for (let i = array.length-1; i >= 0; i--){
    let leftValue = array[leftPointer]
    let rightValue = array[rightPointer];

    let leftSquared = leftValue*leftValue;
    let rightSquared = rightValue* rightValue;

    if (leftSquared > rightSquared){
      squaredArray[i] = leftSquared
      leftPointer++
    } else {
      squaredArray[i] = rightSquared
      rightPointer--
    }
  }
  return squaredArray
}

let array3 = [-3,2,5,10,12]
console.log("new array", sortedSquaredArray3(array3))
