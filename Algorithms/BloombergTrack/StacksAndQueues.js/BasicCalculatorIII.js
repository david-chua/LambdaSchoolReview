/**
Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, '+', '-', '*', '/' operators, and open '(' and closing parentheses ')'. The integer division should truncate toward zero.

You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().



Example 1:

Input: s = "1+1"
Output: 2
Example 2:

Input: s = "6-4/2"
Output: 4
Example 3:

Input: s = "2*(5+5*2)/3+(6/2+8)"
Output: 21
Example 4:

Input: s = "(2+6*3+5-(3*14/7+2)*5)+3"
Output: -12
Example 5:

Input: s = "0"
Output: 0


Constraints:

1 <= s <= 104
s consists of digits, '+', '-', '*', '/', '(', and ')'.
s is a valid expression.
**/

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    if (s.length == 0 || s == undefined){ return 0; }
    let stack = [];
    let index = 0;

    while (index < s.length){
        char = s[index]

        if (char == ')'){
            tempStack = [];
            while (stack[stack.length-1] !== '('){
                tempStack.unshift(stack.pop());
            }
            stack.pop();

            stack.push(calculateHelper(tempStack));

        } else {
            if (!isNaN(char)){
               if (!isNaN(stack[stack.length-1]) && !isNaN(char)){
                   stack[stack.length-1] += char
                   index++
                   continue
               }
            }

            stack.push(char);
            index++
        }
    }

    return calculateHelper(s)

};


let calculateHelper = function(s){
    if (s.length == 1) return s[0];

    let index = 0;
    let stack = [];
    let prioritySigns = { "/": true,  "*": true}
    while (index < s.length){
        char = s[index];

        if (prioritySigns[char]){
            pre = stack.pop();
            index += 1
            nxt = s[index]

            if (char == '/'){
                if (pre < 0) {
                    pre *= -1
                }
                stack.push(Math.floor(pre/nxt));
            } else {
                stack.push(pre*nxt);
            }
        } else {
            stack.push(char)
        }
        index++
    }

    total = stack[0]
    if (stack.length == 1){
        return total;
    }

    for (let i = 1; i < stack.length; i + 2){
        sign = stack[index]
        digit = stack[index+1]

        if (sign == '+'){
            total += digit
        } else {
            total -= digit
        }
    }

    return total;

}

let s = "2*(5+5*2)/3+(6/2+8)"

console.log(calculate(s));
