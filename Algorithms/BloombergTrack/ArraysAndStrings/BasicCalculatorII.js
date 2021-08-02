/**
Given a string s which represents an expression, evaluate this expression and return its value.

The integer division should truncate toward zero.

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().



Example 1:

Input: s = "3+2*2"
Output: 7
Example 2:

Input: s = " 3/2 "
Output: 1
Example 3:

Input: s = " 3+5 / 2 "
Output: 5


Constraints:

1 <= s.length <= 3 * 105
s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
s represents a valid expression.
All the integers in the expression are non-negative integers in the range [0, 231 - 1].
The answer is guaranteed to fit in a 32-bit integer.
**/

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    if (s.length === 0 || s == undefined){
        return 0;
    }

    let stack = [];
    // organize the s into stack to be calculated
    for (let i=0; i<s.length; i++) {
        // ignore white spaces
        if (s[i] === ' ') continue

        // this detects if the current s[i] is a number and if the last orgArr's element is also a number
        // this combines them together as they belong together
        if (!isNaN(stack[stack.length-1]) && !isNaN(s[i])) {
            stack[stack.length-1] += s[i]
            continue
        }

        // also combines for ex. 3-4, [3, -4] instead of [3, -, 4] just so adding them is easier
        if (stack[stack.length-1] === '-' && !isNaN(s[i])) {
            stack[stack.length-1] += s[i]
            continue
        }
        stack.push(s[i])
    }

    for (let i = 0; i < stack.length; i++){
        if (stack[i] == '+' || stack[i] == '-'){
            continue
        }

        // for dealing with all '/' and '*' before adding together
        if (stack[i] == '*' || stack[i] == "/"){
            let tempSum = 0;
            if (stack[i] == '/'){
                tempSum = Math.floor( Number(stack[i-1]) / Number(stack[i+1]))

                if (tempSum < 0 && (Number(stack[i-1]) % Number(stack[i+1])) !== 0){
                    tempSum += 1
                }
            }

            if (stack[i] == "*"){
                tempSum = Number(stack[i-1]) * Number(stack[i+1])
            }

            let sep = stack.splice(i-1, 3, tempSum.toString())

            i = i-1
        }
    }

    let totalSum = 0

    for (let i = 0; i < stack.length; i++){
        if (stack[i] == '+' || stack[i] == '-'){
            continue
        }
        totalSum += Number(stack[i])
    }

    return totalSum
};
