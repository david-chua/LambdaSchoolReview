/**
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.



Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:

Input: nums = [1]
Output: 1

Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
**/



//Brute force:
// Space: O(1), Time: O(n^2)
var maxSubArray = function(nums){
  let maxSub = -Infinity;
  for (let i = 0; i < nums.length; i++){
    let currentSubArray = 0;
    for (let j = i; j < nums.length; j++){
      currentSubArray += nums[j];
      maxSubArray = Math.max(maxSub, currentSubArray)
    }
  }
}


/**
 * @param {number[]} nums
 * @return {number}
 */
 // space: O(1), time: O(n)
var maxSubArray = function(nums) {
    let maxSub = nums[0]
    let curSum = 0

    for (let i =0; i < nums.length; i++){
        if (curSum < 0){
            curSum = 0
        }
        curSum += nums[i]
        maxSub = Math.max(maxSub, curSum)
    }

    return maxSub
};
