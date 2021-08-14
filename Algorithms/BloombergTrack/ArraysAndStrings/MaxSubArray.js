/**
Maximum SubArray Problem
Kadane's Algorithm

The idea is to look at each index
Index 0, maximum subarray is 1
Index
[1,-3,2,1,-1]

**/

/**

Brute force:
one for loop, one while loop and add all possible sums.
- O(n^2)

Optimize:
time: O(n)
space: O(1)

step:
have maxSubArray and currentSum.
if value is less than 0, start from 0 and add currentindex.
- if it's positive, it could still be greater going through, but
if it goes negative, there's no way it will be greater.
**/


let testArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

let maxSubArray = function(arr){
  maxSub = arr[0]
  curSum = 0;

  for(let i = 0; i < arr.length; i++){
    if (curSum < 0){
      curSum = 0;
    }
    curSum += arr[i]
    maxSub = Math.max(maxSub, curSum)
  }

  return maxSub
}


console.log(maxSubArray(testArray));
