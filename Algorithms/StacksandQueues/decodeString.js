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

var decodeString = function(s) {
    let numStack = []
    let strStack = []
    let answer = ""
    let index = 0

    while(index < s.length){
        if (!isNaN(s.charAt(index))){
          count = 0;
          while (!isNaN(s.charAt(index))){
            count = 10 * count + (s.charAt(index) - 0)
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
            tempStr += answer
          }
          answer = tempStr.toString();
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

s2 = "abc10[cd]xyz"

console.log(decodeString(s2))

s3 = "a2[bc2[d3[ab]]]"

console.log(decodeString(s3))
