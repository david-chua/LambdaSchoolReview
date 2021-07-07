/**
Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input strs = ["flower", "flow", "flight"]
Output: "fl"

Example 2:

Input strs = ["dog", "racecar", "car"]
output: ""
Explanation: There is no common prefix among input strings

**/

/**
Method:
first: create a result string
second: check if array is emtpy and if it is, return empty string.
third: use first word as base for checking the rest of strings
fourth: write a for loop checking each letter of the comparison word
fifth: for each index, check if the letters are the same.
If not, return longest string which is the similarities that's been found.
If all letters are the same, increase comparison index and add the letter to the result string.
**/

var longestCommonPrefix = function(strs){
  let longest = '';

  if (strs.length == 0){
    return longest;
  }

  let comparisonWord = strs[0];
  let comparisonIndex = 0;

  for (let comparisonLetter of comparisonWord){
    for (let i = 1; i < strs.length; i++){
      let currentWord = strs[i];
      let currentLetter = currentWord.charAt(comparisonIndex);

      if (comparisonLetter !== currentLetter || comparisonIndex > currentWord.length){
        return longest;
      }
    }
    comparisonIndex++;
    longest += comparisonLetter
  }
  return longest;
}
