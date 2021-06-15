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

/** solution explanation
1. create an object with opening brackets, closing brackets, and a matching bracket where obj['}'] returns its opening bracket type. This will be use to check if the brackets match. Also create a stack

2. go through each character in string, we only care about {},[],(), anything else will be ignored.
- in the loop, if it's an opening bracket, add it to stack .
- if it's a closing bracket type, we go through and check logic

3. inside closing bracket logic,
if stack length is already 0, return false because there's no pair
if last item in the stack is a matching of that closing bracket, remove it from the stack.
otherwise, return false since mix is incorrect.

4. return stack.length == 0 to make sure if there's a bracket that wasn't closed, it would show that the parenthesis amount is not valid. ie {[()] when you removed matching brackets, you'll be left with {. 



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
