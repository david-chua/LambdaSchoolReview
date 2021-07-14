/**
Given an integer array nums, return all triplets
[nums[i], nums[j], nums[k]] such that
i !== j
i != k
and
j != k

Notice that the solution set must not contain triplets

Example 1:

Input: nums= [ -1,0,1,2,-1,-4]
Output: [[-1,-1,2], [-1,0,1]]

Example 2:

Input: nums = []
Output: []

Example 3:

Input: nums=[0]
Output: []
**/

/**
steps:
sort an array
initialize an array for results
loop through sorted Array

if index is greater than 0 and value of sortedArray[i] is equal to sortedArray[i-1]
  skip, since we've already look at this value
**/

let threeSum = function(nums){
  sortedArray = nums.sort((a,b) => a-b);
  let result = [];

  for (let i = 0; i < sortedArray.length; i++){
    if ( i > 0 && sortedArray[i] === sortedArray[i-1]){
      continue
    }
    let left = i+1
    let right = sortedArray.length - 1;
    while (left < right){
      total = sortedArray[i] + sortedArray[left] + sortedArray[right]
      if (total > 0){
        right--
      } else if (total < 0){
        left++
      } else {
        result.push([sortedArray[i], sortedArray[left], sortedArray[right]])
        left++
        while (nums[left] === nums[left-1] && left < right){
          left++
        }
      }
    }
  }
  return result
}


let nums =[-1,0,1,2,-1,-4]

console.log(threeSum(nums))
