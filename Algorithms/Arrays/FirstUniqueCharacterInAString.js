/**
Given a string, return the first non-repeating character in it and return its index. If it does not exist, return -1.

Example:

Input s = "leetcode"
output: 0

Example 2
input: "loveleetcode"
Output: 2

Example 3

input: s="aabb"
output: -1
**/

var firstUniqueChar = function(s){
  let charObj = {}
  for (let char of s){
    if (charObj[char] === undefined){
      charObj[char] = 1
    } else {
      charObj[char]++
    }
  }

  for (let i = 0; i < s.length; i++){
    let currentChar = s.charAt(i)
    if (charObj[currentChar] === 1){
      return i
    }
  }

  return -1
}

let s = "leetcode"
let s1 = "loveleetcode"
let s2 = "aabb"


console.log(firstUniqueChar(s))
console.log(firstUniqueChar(s1))
console.log(firstUniqueChar(s2))
