/**
Given a string s, find the length of the longest string without repeating characters.

Example 1:

input: s = "abcabcbb"
output: 3


Example 2:
input: s = "bbbbb"
output: 1

Example 3:
input: s = "pwwkew"
output: 3

Example: 4:
input: s = ""
output: 0

**/


let lengthOfLongestSubstring = function(s){
  if (s.length === 0 ){
    return 0;
  }

  let maxLength = 0;
  let maxLeftIndex = 0;
  let currentLength = 0;
  let uniqueLetters = {}
  let leftPointer = 0;
  let rightPointer = 0;

  while (rightPointer < s.length){
    let rightChar = s.charAt(rightPointer)
    let leftChar = s.charAt(leftPointer);
    if (!uniqueLetters[rightChar]){
      uniqueLetters[rightChar] = rightChar
      rightPointer++
      currentLength++
      maxLength = Math.max(maxLength, currentLength);
    } else {
      delete uniqueLetters[leftChar]
      leftPointer++
      currentLength--
    }
  }
  return maxLength;
}


s = "abcabcbb"
s1 = "bbbbb"
s2 = "pwwkew"

// console.log(lengthOfLongestSubstring(s))
// console.log(lengthOfLongestSubstring(s1))
// console.log(lengthOfLongestSubstring(s2))

let lengthOfLongestSubstringString = function(s){
  if (s.length === 0 ){
    return 0;
  }

  let maxLength = 0;
  let currentLength = 0;
  let uniqueLetters = {}
  let leftPointer = 0;
  let rightPointer = 0;

  while (rightPointer < s.length){
    let rightChar = s.charAt(rightPointer)
    let leftChar = s.charAt(leftPointer);
    if (!uniqueLetters[rightChar]){
      uniqueLetters[rightChar] = rightChar
      rightPointer++
      currentLength++
      if (maxLength < currentLength){
        maxLeftIndex = leftPointer
      }
      maxLength = Math.max(maxLength, currentLength);
    } else {
      delete uniqueLetters[leftChar]
      leftPointer++
      currentLength--
    }
  }
  return s.slice(maxLeftIndex, maxLeftIndex+maxLength);
}




console.log(lengthOfLongestSubstringString(s))
console.log(lengthOfLongestSubstringString(s1))
console.log(lengthOfLongestSubstringString(s2))
