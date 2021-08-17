/**
Given a string s and a dictionary of strings wordDict,
return true if s can be segmented into a space-separated
sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused
multiple times in the segmentation.


Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false
**/


/**
dp solution -  go from bottom up approach
go from end of length of string and go down

ie:

s = "leetcode" wordDict = ["beet","leet", "code"]
dp[8] = True
dp[7] = check s[7] which is e. Then check if there's any word that matches
from the word dict. since it's 1 letter, there's none, so it stays false.
dp[6] = same as, s[6] which is d, does any word dict from this point forward
match - false.
dp[5] -  also false
dp[4] - we see that code matches this part so we set this to dp[i+ wordlength]
dp[3] - false
dp[2] - false
dp[1] - false 
dp[0] = true cuz of "leet"

bottom up approach
time complexity: O(n^3)
space: O(n) - depth of recursion
**/




let wordBreak = function(s, wordDict) {
    let dp = new Array(s.length+1).fill(false);
    dp[s.length] = true;

    for (let i = s.length-1; i >= 0; i--){
        for (let word of wordDict){
           if ((i + word.length) <= s.length &&
           s.substring(i, (i+word.length)) == word){
               dp[i] = dp[i + word.length]
           }
            if (dp[i]){
                break;
            }
        }
    }
    return dp[0]
};
