/**
Given a string s containing just the characters '(', ')', '{','}','[',']', determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

Example 1:

input: s = '()'
output: true

Example 2:

Input: s = "()[]{}"
output: true

Example 3:

Input s = "(]"
output: false

Example 4:
input: s = " ([)]"
output: false

Example 5:
input s = "{[]}"
output: true

s only consists of '()[]{}'
**/


var isValid = function(s){
  const openingBrackets = { "{": "{", "[": "[", "(": "("}
  const closingBrackets = { "}": "}", "]": "]", ")": ")"}
  const matchingBrackets = { "}": "{", "]": "[", ")": "("}
  const stack = [];

  for (let char of s){
    if (openingBrackets[char]){
      stack.push(char)
    } else if (closingBrackets[char]){
      if (stack.length === 0){
        return false
      } else if (stack[stack.length-1] === matchingBrackets[char]){
        stack.pop(char)
      } else {
        return false
      }
    }
  }
  return stack.length == 0;
}


s = "()[]{}"
s1 = " ([)]"

console.log(isValid(s));
console.log(isValid(s1));
