/**
Missing Number

Given an array nums containing n distinct numbers in the range [0,n]. return the only number in the range missing from the array.

Could you implement a solution using O(1) space and O(n) runtime complexity?

Example 1:
Input: nums = [3,0,1]
Output: 2
Explanation n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

Example 2:

Input: nums =[0,1]
Output: 2.
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

Example 3:
Input: nums = [9,6,4,2,3,5,7,0,1]
output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 9 is the missing number that does not appear in nums.

Example 4:

Input: nums = [0]
Output: 1
Explanation: n = 1, since there is 1 number, so all numbers are in range of [0,1]. 1 is the missing number.

var missingNumber = function(nums) {
    let sum = addNum(nums.length);
    for (let numIndex = 0; numIndex < nums.length; numIndex++){
        sum = sum - nums[numIndex]
    }
    return sum
};

// Helper function
var addNum = function(numLength){
    let total = 0
    for (let i = numLength; i > 0; i--){
        total += i
    }
    return total
}
