/**
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.



Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
**/

/**
binary search algorithm
left, right mid pointers, 

time: O(log n)
space: O(1) - only creating an array of 2 items.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    let left = 0;
    let right = nums.length-1;


    while (left <= right){
        let mid = Math.ceil((left+right)/2)
        if (nums[mid] == target){
            return expandOut(nums, mid);
        } else if (nums[mid] > target){
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return [-1,-1]
};


let expandOut = function(nums, mid){
    let l = mid;
    let r = mid;
    while (nums[l] === nums[mid]){
        l--
    }

    while (nums[r] === nums[mid]){
        r++
    }
    return [l+1,r-1]
}
