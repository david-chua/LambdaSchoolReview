// Two Number Sum

/**
Write a function that takes in a non empty array of distinct integers and an integer representing a target sum.
If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order.
If no two numbers sum up to the target sum, the function should return an empty array.

You can assume that there will be no more than 1 pair summing up to the target sum.


Sample Input:

array = [3,5,-4, 8, 11, 1,-1,6]
targetSum = 10

Sample output: [-1,11] // numbers can be in reversed order.
**/

// Brute Force method
/**
We use a double for-loop where the inner loop(j) is always 1 value ahead of the outerloop(i)
This allows i and j to never use the same index point as that will give issues when you have a targetSum of 6 and a value of 3.
Evaluating the same value will provide a correct two value but the index should not be the same.

Time Complexity O(n^2)
Space Complexity O(1) -> Only created two storage values firstValue and secondValue
**/
function twoNumberSumBruteForce(array, targetSum){
  for (let i = 0; i < array.length; i++){
    let firstValue = array[i];
    for (let j = i+1; j< array.length; j++){
      let secondValue = array[j];
      if (firstValue+secondValue === targetSum){
        return [firstValue, secondValue]
      }
    }
  }

  return [];
}


sampleArray = [3,5,-4, 8, 11, 1,-1,6]
sampleSum = 10

console.log("Brute Force", twoNumberSumBruteForce(sampleArray, sampleSum));


/**
This method uses sorting algorithm followed by a two pointer approach.
Once the array is sorted, we can use two pointers to see if the target sum is equal to the sum of the two pointers.
If targetSum is greater, it means, we need to increase the value, so we move our left pointer one up.
If targetSum is less, it means, we need to decrease the value, so we move our right pointer one down.
We continue this until the left pointer is greater than or equal to the right pointer, meaning all possible compinations are exhausted.
If no two values are found, return an empty array []

Time complexity: O(nlog(n))
Space complexity: O(1)
**/

function twoNumberSumSortedSolution(array, targetSum){
  let sortedArray = array.sort((a,b) => a-b)

  let firstPointer = 0;
  let secondPointer = sortedArray.length - 1

  while (firstPointer < secondPointer){
    if (array[firstPointer] + array[secondPointer] === targetSum){
      return [array[firstPointer], array[secondPointer]]
    }
    if (firstPointer + secondPointer < targetSum){
      firstPointer++
    } else{
      secondPointer--
    }
  }
}

sampleArray = [3,5,-4, 8, 11, 1,-1,6]
sampleSum = 10

console.log("Sorting", twoNumberSumSortedSolution(sampleArray, sampleSum))


// sampleArray2 =  [1, 2, 3, 4, 5, 6, 7, 8, 9],
// sampleSum2 =  17
//
// console.log(twoNumberSumSortedSolution(sampleArray2, sampleSum2))

/**
The third solution uses hashmap.
In this solution, we check the current value and check if the difference of the targetSum - currentValue is in the hashmap, if it is, return the solution.

Time complexity: O(n)
Space complexity: O(n) -> Since we crete a new hashmap, we might have to store all by 1 of the values in the hashmap.

This gives us a trade off between the two different values
**/

function twoNumberSumHashTableSolution(array, targetSum){
  const hash = {};
  for (let i = 0; i < array.length; i++){
    currentValue = array[i]
    missingNum = targetSum - currentValue
    if (hash[missingNum] !== undefined){
      return [missingNum, currentValue]
    }
    hash[currentValue] = currentValue
  }
}

sampleArray = [3,5,-4, 8, 11, 1,-1,6]
sampleSum = 10

console.log("Hash solution", twoNumberSumHashTableSolution(sampleArray, sampleSum))


/**
In Leetcode, there's a similar problem where index has to be returned rather than the value.
In this method, sorting is not a viable solution since we need to keep the same index as what's currently there.

For Brute Force method, simply return the i and j values:
**/

function twoNumberSumBruteForceIndexSolution(array, targetSum){
  for (let i = 0; i < array.length; i++){
    let firstValue = array[i];
    for (let j = i+1; j< array.length; j++){
      let secondValue = array[j];
      if (firstValue+secondValue === targetSum){
        return [i,j]
      }
    }
  }

  return [];
}


sampleArray = [3,5,-4, 8, 11, 1,-1,6]
sampleSum = 10

console.log("Brute Force", twoNumberSumBruteForceIndexSolution(sampleArray, sampleSum));


/**
In terms of two number solution, it's a little different.
We find the missingNum, and search it if it's there. If it is, we return that object and the current index.
If the missingNum is not found, we will store the current value with the key as the array value and the value as the array index.
In this way, we are able to keep track of the missing index. 
**/

function twoNumberSumHashTableSolutionIndexSolution(array, targetSum){
  const hash = {};
  for (let i = 0; i < array.length; i++){
    currentValue = array[i]
    missingNum = targetSum - currentValue
    if (hash[missingNum] !== undefined){
      return [hash[missingNum], i]
    }
    hash[currentValue] = i
  }
}

sampleArray = [3,5,-4, 8, 11, 1,-1,6]
sampleSum = 10

console.log("Hash solution", twoNumberSumHashTableSolutionIndexSolution(sampleArray, sampleSum))
