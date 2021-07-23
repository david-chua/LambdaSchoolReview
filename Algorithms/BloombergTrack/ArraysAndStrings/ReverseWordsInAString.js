/**
Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.



Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
Example 4:

Input: s = "  Bob    Loves  Alice   "
Output: "Alice Loves Bob"
Example 5:

Input: s = "Alice does not even like bob"
Output: "bob like even not does Alice"
**/


/**
Time: O(n) going through each word
Space: O(n) result string

Steps:
1. trim and turn word into array
2. create a result variable
3. loop through array in reverse
- trim current word so all spaces in front and behind is gone
- if there's a character that doesn't have a value, skip
- if it's the first word, don't add a space but add it to result
- else, add word to result string but add space to make room for next word

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.trim().split(' ')
    let result = ''
    for (let i = arr.length-1; i >= 0; i--){
        let word = arr[i].trim();
        if (word == ''){
            continue
        }
        if (i == 0){
            result += word
        } else {
            result += word + ' ';
        }
    }

    return result

};
