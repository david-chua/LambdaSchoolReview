/**
Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input s = "bbbb"
Output: 1
Explanation: The answer is "b" with the length of 1.

Example 3:
Input s = "pwwkew"
Ouput: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a string.
**/

// Time complexity: O(n) - due to while loop
// space complexity: O(n) - due to wordbank
var lengthofLongestSubstring = function(s){
  let max = 0;
  let currentSum = 0;
  let wordBank = {};
  let left = 0
  let right = 0;
  while (right < s.length){
    if (wordBank[s.charAt(right)] == undefined){
      wordBank[s.charAt(right)] = s.charAt(right)
      right++;
      currentSum++
      max = Math.max(max, currentSum)
    } else {
      delete wordBank[s.charAt(left)]
      left++;
      currentSum--
    }
  }
  return max;
}

let str = "pwwkew"

console.log(lengthofLongestSubstring(str))

// What if we want to return the string

var findLongestSubstring = function(s){
  let max = 0;
  let currentSum = 0;
  let wordBank = {};
  let left = 0;
  let right = 0;
  while (right < s.length){
    if (wordBank[s.charAt(right)] == undefined){
      wordBank[s.charAt(right)] = s.charAt(right)
      right++;
      currentSum++
      max = Math.max(max, currentSum)
    } else {
      delete wordBank[s.charAt(left)]
      left++;
      currentSum--
    }
  }
  return s.slice(left,left+max)
}

let str1 = "pwwkew"

console.log(findLongestSubstring(str1))
