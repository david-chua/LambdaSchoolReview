/**
Given an unsorted array of integers nums, return the length of the longest
consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4].
Therefore its length is 4.

Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
**/

/**
steps:
1. create a set from the number array.
2. go through each number of the set.
3. if a num has no consequent value before it, start a new streak.
4. while there's a value above the current value, increase streak and
change currentValue to number + 1.
5. evaluate max between current longest streak and current streak. change
if needed.
6. when done, return longest streak value.
**/

var longestBruteConsecutive = function(nums){
  let longestStreak = 0;
  for (let i = 0; i < nums.length; i++){
    currentNum = nums[i];
    currentStreak = 1;
    while (nums.includes(currentNum +1)){
      currentNum += 1;
      currentStreak +=1;
    }
    longestStreak = Math.max(longestStreak, currentStreak);
  }
  return longestStreak;
}

let nums = [100,4,200,1,3,2]
console.log(longestBruteConsecutive(nums));

var longestConsecutive = function(nums){
  let set = new Set(nums);
  let longestStreak = 0;

  for (let num of set){
    if (!set.has(num-1)){
      let currentNum = num;
      let currentStreak = 1;

      while (set.has(currentNum+1)){
        currentStreak +=1;
        currentNum += 1;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }
  return longestStreak

}
