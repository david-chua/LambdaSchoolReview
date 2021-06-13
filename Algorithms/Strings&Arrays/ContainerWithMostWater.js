/**
Given n non-negative integers a1, a2...,an, where each represents a point at coordinate (i,ai). n vertical lines are drawn such taht two endpoints of lines i is at (i, ai) and (i,0). Find two lines, which together with x-axis forms a container, such taht the container contains the most water.
**/

// two nested loops solution:
// time complexity: n^2
// space: O(1) 
var maxArea = function(height){
  let max = 0;
  for (let i = 0; i< height.length; i++){
    for (let j = i+1; j < height.length; j++){
      let min = Math.min(height[i], height[j])
      max = Math.max(max, min*(j-i));
    }
  }

  return max;
}

// time complexity: O(n)
// space complexity: O(1)
var maxAreaOnePass = function(height){
  let max = 0;
  let left = 0;
  let right = height.length-1;
  while (left < right){
    let min = Math.min(height[i], height[j]);
    max = Math.max(max, min*(j-i));
    if (height[i] < height[j]){
      left++
    } else {
      right++
    }
  }
  return max;
}
