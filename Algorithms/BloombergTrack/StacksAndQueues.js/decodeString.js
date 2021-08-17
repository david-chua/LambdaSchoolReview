/**
Decode String

Given an encoded string , return its decoded string.

The encoding rule is k[encoded_string], where encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid. No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k.

Examples

sample 1:
Input s = "3[a]2[bc]"
output: aaabcbc

sample 2:
input: s = "3[a2[c]]"
output: "accaccacc"

sample 3:
input s = "2[abc]3[cd]ef"
output: abcabccdcdcdef

sample 4:
input s = "abc3[cd]xyz"
output = abccdcdcdxyz
**/

/**
steps:
1. have 4 variables, numStack in case we have a nested number in the string
2. have a string stack to keep track of any nested strings.
3. answer - result string
4. index where we start.
while loop - go through entire string
4 if else conditions
if s[index] is a number start a count variable and keep going through the stack
- this will tell us if there's a multi digit number
if s[index] is opening bracket, we'll push th current answer into the string stack
- set answer back to ""
- increase index

if s[index] is a closing bracket, we'll first pop the top of the string stack
then we'll pop the top of the numStack.
then based on number from numstack, add current answer string to the temp string
multiple times
like 2[a] in this part will have "a" as the answer and so looping will
start temp string as "" then a then aa.
this part set answer = tempStr.

last condition is that it's a string then we just add that string to the index


once done,
return answer.

**/
var decodeString = function(s) {
    let numStack = []
    let strStack = []
    let answer = ""
    let index = 0

    while(index < s.length){
        if (!isNaN(s.charAt(index))){
          count = 0;
          while (!isNaN(s.charAt(index))){
            count = 10 * count + (s.charAt(index)-0)
            index++;
          }
          numStack.push(count)
        } else if (s.charAt(index) == '['){
          strStack.push(answer)
          answer = ""
          index++
        } else if (s.charAt(index) == ']'){
          let tempStr = strStack.pop();
          let count = numStack.pop();
          for (let i = 0; i < count; i++){
            console.log("tempStr", tempStr);
            tempStr += answer
            console.log('after', tempStr)
          }
          answer = tempStr
          index++
        } else {
          answer += s.charAt(index);
          index++
        }
    }
    return answer

};

s = "3[a]2[bc]"
console.log(decodeString(s));
// aaabcbc

// s2 = "abc10[cd]xyz"
//
// console.log(decodeString(s2))
//
// s3 = "a2[bc2[d3[ab]]]"
//
// console.log(decodeString(s3))
