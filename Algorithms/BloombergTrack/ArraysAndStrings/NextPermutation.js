/**
Implement next permutation, which rearranges numbers into the lexicographically next greater
permutation of numbers.

If such an arrangement is not possible, it must rearrange it as the lowest possible order
(i.e., sorted in ascending order).

The replacement must be in place and use only constant extra memory.


Example 1:

Input: nums = [1,2,3]
Output: [1,3,2]

Example 2:

Input: nums = [3,2,1]
Output: [1,2,3]

Example 3:

Input: nums = [1,1,5]
Output: [1,5,1]

Example 4:

Input: nums = [1]
Output: [1]


Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 100
**/

/**
time: O(n)
space: O(1)

steps:
- from i-2 check if there's a value where nums[i+1] > nums[i]
- swap those two numbers.
from end - find the value that's less from the front
- if entire thing is from descending order, reverse number in place using two pointers
basically where the i < j is where the next permutation is lower

like 3 4 5 2 since 2 is less than 5, switching both will produce the next higher permutation.
since teh two values are the "least valuable"

if it's already in descneding order 3 2 1 flip the number using two pointers 123


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i = nums.length -2;

    while (i >= 0 && nums[i+1] <= nums[i]){
        i--;
    }

    if(i >= 0){
        let j = nums.length-1;
        while (nums[j] <= nums[i]){
            j--;
        }
        swap(nums, i, j);
    }
    reverse(nums, i+1);
};


let reverse = function(nums, start){
    let i = start;
    let j = nums.length-1;
    while (i < j){
        swap(nums, i, j);
        i++;
        j--;
    }
}

let swap = function(nums, i, j){
    let temp = nums[i];
    nums[i] = nums[j]
    nums[j] = temp;
}
