/**
Given an array of integers and an integer target, return indices of two numbers such as that they add up to target.

You may assume that each input would have exactly one solution and you may not use the same element twice.

You can return the answer in any order.

Example 1:

input: nums = [2,7,11,15], target = 9
output: [0,1 ]

Example 2:

input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

**/


/** Double for loop solution
time complexity: n^2
space: O(1)
**/

/**
var twoSums = function(nums, target){
  for (let i = 0; i < nums.length; i++){
    for (let j = 1; j < nums.length; j++){
      if (nums[i] + nums[j] === target){
        return [i,j]
      }
    }
  }
}
**/


/** Sorted Solution
time complexity: O(nlogn)
space: O(1)

Only would work if using actual values, not indices
**/

// var twoSums = function(nums, target){
//   nums = nums.sort((a,b) =>  a - b)
//   let leftPointer = 0;
//   let rightPointer = nums.length-1;
//
//   while (leftPointer < rightPointer){
//     total = nums[leftPointer] + nums[rightPointer]
//     if (total == target){
//       return [leftPointer, rightPointer]
//     } else if (total > target){
//       rightPointer--
//     } else if (total < target){
//       leftPointer++
//     }
//   }
// }

/** Hashmap Solution
time complexity: O(n)
Space: O(n)
**/

var twoSums = function(nums, target){
  let hashObj = {}
  for (let i = 0; i < nums.length; i++){
    let missingNumber = target - nums[i]
    console.log(hashObj)
    if (hashObj[missingNumber] !== undefined){
      return [hashObj[missingNumber], i]
    }
    hashObj[nums[i]] = i
  }
}

nums = [2,7,11,15]
nums1 = [3,2,4]
nums2 = [3,3]


console.log(twoSums(nums, 9))
console.log(twoSums(nums1, 6))
console.log(twoSums(nums2, 6))
