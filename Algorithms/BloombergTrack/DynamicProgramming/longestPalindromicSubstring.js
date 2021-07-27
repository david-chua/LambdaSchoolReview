/**
Given a string s, return the longest palindromic substring in s.

Example 1:

Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
Example 3:

Input: s = "a"
Output: "a"
Example 4:

Input: s = "ac"
Output: "a"

**/

/** time: O(n^3)
Brute force
for loop
  for loop
     create all permutation
       check if reverse string is equal to string.

**/

/**
recursion
time complexity: O(n^2)
space: O(1)

Steps:
1. check if string exist
2. have starting point and end point
3. for each letter, check if palindrom exist (2 cases, odd and even palindrome)
4. compare largest strings.
5. if current length is longer than current longest, change values
6. once you've gone through entire array, return the substring starting from start to end.

**/


var longestPalindrome = function(s) {
    if (s == null || s.length < 1){
        return "";
    }

    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++){
        let len1 = expandFromMiddle(s, i, i);
        let len2 = expandFromMiddle(s, i, i+1);

        let len = Math.max(len1,len2);

        if (len > end - start){
            start = Math.ceil(i - (len-1)/2);
            end = i + (len/2);
        }
    }

    return s.substring(start, end + 1);
};


let expandFromMiddle = function(s, left, right){
    if (s === null || left > right) return 0;

    while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)){
        left--;
        right++;
    }

    return right - left - 1;
}
