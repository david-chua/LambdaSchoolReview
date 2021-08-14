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
Steps:
1. we'll use 3 values, result, currentNumber, and lastNumber to keep track of the values.
2. first, we'll trim so any white spaces in beginnign and end are gone.
3. we'll keep track of the previous sign, we'll start at "+" as the first value
usually gets added first like (4 * 3) result + 4 * 3.
4. if a value is 14 or 140, we'll want to loop through the string and basically if it's 140
first iteration current value is 1
next iteration 1* 10 + 4 = 14
third iteration 14* 10 + 0 = 140
5. if value is a sign, we'll evaluate it like it's a stack so

"3+2/2" becomes
currentNumber 0 lastNumber 0 result 0
curChar = 3, currentNumber = 3 lastNumber = 0, result = 0
curChar = +, result = 0, lastNumber = 3, currentNumber = 0, sign = +
curChar = 2, result = 0, lastNumber = 3, currentNumber = 2, sign = +
curChar = /, result = 3, lastNumber = 2, currentNumber = 0, sign = /
curChar = 2, currentNumber = 2, lastNumber = 1, result = 3, currentNumber = 0.
result = 3 + 1 = 4
result = 4

Time complexity: O(n)
Space complexity: O(1) 

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let s1 = s.trim();
    let length = s1.length;
    if (length === 0) return 0;
    let currentNumber = 0;
    let lastNumber = 0;
    let result = 0;
    let sign = "+";

    for (let i = 0; i < length; i++){
        console.log('current number', currentNumber, 'lastNumber', lastNumber, 'result', result, 'current char', s[i]);
        let curChar = s1[i];
        if (curChar === ' ') continue;
        if (!isNaN(curChar)){
            currentNumber = (currentNumber * 10) + (curChar - '0');
        }
        if (isNaN(curChar) || i == length -1){
            console.log('sign? ', sign)
            if (sign == '+' || sign == '-') {
                result += lastNumber;
                lastNumber = (sign == '+') ? currentNumber : -currentNumber;
            } else if (sign == '*') {
                lastNumber = lastNumber * currentNumber;
            } else if (sign === '/') {
                let firstVal = lastNumber;
                let secondVal = currentNumber;
                lastNumber = Math.floor(lastNumber/currentNumber);
                if (lastNumber < 0 && (firstVal % secondVal) !== 0) {
                    lastNumber = Math.floor(lastNumber) + 1
                }

            }
            sign = curChar;
            currentNumber = 0;
        }
    }

    result += lastNumber;
    return result
};
