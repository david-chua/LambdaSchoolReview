/**
Given a string s that contains parentheses and letters, remove the minimum number
of invalid parentheses to make the input string valid.

Return all the possible results. You may return the answer in any order.

Example 1:

Input: s = "()())()"
Output: ["(())()","()()()"]
Example 2:

Input: s = "(a)())()"
Output: ["(a())()","(a)()()"]
Example 3:

Input: s = ")("
Output: [""]


Constraints:

1 <= s.length <= 25
s consists of lowercase English letters and parentheses '(' and ')'.
There will be at most 20 parentheses in s.
**/


/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    let str = "";
    let open = 0;
    // delete excess closing braces
    for (let i = 0; i < s.length; i++){
        if (s[i] == '('){
            open++;
        } else if (s[i] == ')' ){
            if (open == 0) continue
            open--;
        }

        str += s[i]
    }

    let result = "";

    // delete excess opening braces
    for (let i = str.length-1; i>= 0; i--){
        if (str[i] == '(' && open-- > 0)  {
            continue;
        }
        result = str[i] + result
    }

    return result
};

s1 = "()())()"
s2 = "(a)())()"
s3 = ")("


console.log(removeInvalidParentheses(s1));
console.log(removeInvalidParentheses(s2));
console.log(removeInvalidParentheses(s3));
