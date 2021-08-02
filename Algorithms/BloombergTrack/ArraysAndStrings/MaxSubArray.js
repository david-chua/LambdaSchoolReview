/**
Maximum SubArray Problem
Kadane's Algorithm

The idea is to look at each index
Index 0, maximum subarray is 1
Index
[1,-3,2,1,-1]

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
