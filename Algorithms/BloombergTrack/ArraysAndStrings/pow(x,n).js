/**
Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

Example 1:

Input: x = 2.00000, n = 10
Output: 1024.00000
Example 2:

Input: x = 2.10000, n = 3
Output: 9.26100
Example 3:

Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
**/

/**
OOTB:
initial solution: x**n
**/

/**
using fast power algorithm
where basically if n = 10 it's the same as 2 * 5
**/

var myPow = function(x, n) {
    if(n === 0) {
        return 1;
    }
    let absN = Math.abs(n)
    let pow = 1;
    
    while(absN) {
        if(absN % 2 !== 0) {
            pow = x * pow;
        }
        x *= x;
        absN = Math.floor(absN / 2);
    }
    return n > 0 ? pow : (1 / pow);
}

/**
2^4 * 2^4 * 2 * 2
**/
