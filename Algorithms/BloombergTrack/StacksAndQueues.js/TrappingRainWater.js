/**
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9

**/

/**
time complexity: O(n)
space complexity: O(n)

steps:
1. check if height is null and return 0 if it is
2. go from left to right, and fill maximum possible height in each index.
3. go from right to left and fill maximum possible height in each index
4. calculate total water by finding minimum between left two arrays - height of building at that index.
5. return total Water.
**/

let trap = function(height){
  if (height === null){
        return 0;
    }

    let totalWater = 0;
    let length = height.length;
    let leftMax = [];
    let rightMax = [];
    leftMax[0] = height[0];

    for (let i = 1; i < length; i++){
        leftMax[i] = Math.max(height[i], leftMax[i-1])
    }

    rightMax[length-1] = height[length-1];
    for (let i = length-2; i >= 0; i--){
        rightMax[i] = Math.max(height[i], rightMax[i+1]);
    }

    for (let i = 1; i < length-1; i++){
        totalWater += Math.min(leftMax[i], rightMax[i]) - height[i]
    }

    return totalWater
}
