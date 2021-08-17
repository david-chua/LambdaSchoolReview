/**
You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.




Example 1:

Input: s = "abbaca"
Output: "ca"
Explanation:
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
Example 2:

Input: s = "azxxzy"
Output: "ay"

**/

/**
Time complexity: O(n) - going through entire array once
Space complexity: O(n) - worst case is all string doesn't have adjacent duplicate.

steps:
1. create a stack
2. go through string
3. if stack's last item is equal to current character, remove char from array.
4. else push it to the stack
5. return a string version of the array.
**/
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = [];
    for (let char of s){

        let lastChar = stack[stack.length-1];
        if (char === lastChar){
            stack.pop()
        } else {
            stack.push(char)
        }

    }
    return stack.join('').toString()
};
