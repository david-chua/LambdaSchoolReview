/**
You are given a string s and an integer k, a k duplicate removal consists of
choosing k adjacent and equal letters from s and removing them, causing the left
and the right side of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.



Example 1:

Input: s = "abcd", k = 2
Output: "abcd"
Explanation: There's nothing to delete.
Example 2:

Input: s = "deeedbbcccbdaa", k = 3
Output: "aa"
Explanation:
First delete "eee" and "ccc", get "ddbbbdaa"
Then delete "bbb", get "dddaa"
Finally delete "ddd", get "aa"
Example 3:

Input: s = "pbbcggttciiippooaais", k = 2
Output: "ps"

 **/

 /**
 Steps:
1. Initiate an empty Stack and a variable character-count
2. Loop through the input-string and push [character, current-character-count]
on to the stack
3. If the current current-character is the same as the one lying on the top of the
stack, add "1" to the count-value of the top element of the stack
4. Else reset the count to 1 and add this new character [char, count] to the top of
the stack.
5. If at any given time the value of count of the top element is Equal to "K",
Pop it off.
6. Loop through the stack, you can treat it as an array-list of [char, frequency]
to build result.

Time complexity: O(n)
Space complexity: O(n);

 /**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    let stack = [];
    for (let i = 0; i < s.length; i++){
        if (!stack || stack.length === 0){
            stack.push([s[i], 1])
        }  else if (s[i] === stack[stack.length-1][0]){
            stack[stack.length-1][1]++
        } else {
            stack.push([s[i],1])
        }

        if (stack[stack.length-1][1] === k){
            stack.pop();
        }
    };

    let result = "";

    for (let [char, frequency] of stack){
        while(frequency){
            result+= char;
            frequency--
        }
    }

    return result
};
