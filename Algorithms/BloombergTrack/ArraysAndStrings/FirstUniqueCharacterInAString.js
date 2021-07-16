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

/** solution explanation

Create a character object which stores the character and the amount of times they're seen.
Do another loop to find the first character object that's only been seen once.
**/


var firstUniqChar = function(s) {
    let charObj = {}
    for (let char of s){
        if (charObj[char] === undefined){
            charObj[char] = 1
        } else {
            charObj[char]++
        }
    }

    for (let i = 0; i < s.length; i++){
        if (charObj[s[i]] === 1){
            return i
        }
    }
    return -1
};
