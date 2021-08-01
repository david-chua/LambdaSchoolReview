/**
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:

Input: nums = [1], target = 0
Output: -1

Constraints:

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is guaranteed to be rotated at some pivot.
-104 <= target <= 104
**/
/**
Overview:
Since it's increasing, we know there will be two parts, left side and right side but two halfs are sorted.

for binary search, we have 3 pointers: left, mid, right
left is always <= right

[4,5,6,7,0,1,2]
if middle is 6
if target is greater than 6, we know left side i not greater than 6.
if target is less than middle value, we compare left sorted portion, left sorted portion, we check if target is smaller than first item in left, we run binary in right.
if target is greater or equal to 4, we run binary on right side.

if we're on right portion of array, if our target is less than 1, we have to search left side of our binary search.
if it's greater than or equal to middle, we use edge most value of right side. if target is greater than mid and greater than edge, we check left side. if it's less than middle and less than edge, we check right side.


[4,5,6,7,0,1,2]
L = 4
M = 7
R = 2
T = 0

0 < 4, so we check right side,
this means we eliminate the left side and the middle
[0,1,2] where L = 0 and R = 2 and new M = 1

compare middle to target again.
target is greater or equal to 0 which means we go left.
and since 0 is the target, we return the index.
**/

/**
steps:
1. two pointers
2. if target == mid, return mid index
3. if left is less than mid,

For left portion
4.  if target > mid or if target < nums[l], adjust mid to be l = mid + 1 
 else r = mid - 1
 for right portion
 if target < mid or if target > right
  r = mid -1
  else l = mid + 1


5. if you go through loop and find no match, return -1


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0;
    let r = nums.length -1

    while (l <= r){
        let mid = Math.ceil((l + r) / 2)

        if (target === nums[mid]){
            return mid;
        }

        // left sorted portion
        if (nums[l] <= nums[mid]){
            if (target > nums[mid] || target < nums[l]){
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        // right sorted portion
        else {
            if (target < nums[mid] || target > nums[r]){
                r = mid -1
            } else {
                l = mid + 1
            }
        }
    }
    return -1
};
