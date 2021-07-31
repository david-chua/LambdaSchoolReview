/**
Given a string s, sort it in decreasing order based on the frequency of characters, and return the sorted string.

Example 1:

Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

Example 2:

Input: s = "cccaaa"
Output: "aaaccc"
Explanation: Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.

Example 3:

Input: s = "Aabb"
Output: "bbAa"
Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
**/

/**
Optimized solution
time: O(n)
space: O(n)

steps:
1. create a hashmap
2. create an array
3. have output strings
4. loop through string and fill hashmap with key - character, value: num times seen in string
5. loop through finished object and fill in bucket with
frequency as index which contains a sorted letters
6. for loop looks like n^2 but in reality, bucket length is as many characters and buckets[i] can only be up to string length. 

**/

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const freqMap = {}
    const bucket = [];
    let output = ''

    for (let char of s){
        if (freqMap[char] === undefined){
            freqMap[char] = 1
        } else {
            freqMap[char]++

        }
    }

    for (let [key, value] of Object.entries(freqMap)){
        console.log(key,value)
        if(bucket[value] === undefined) bucket[value] = [key];
        else bucket[value].push(key);
    }


    for(let i = bucket.length-1; i >= 0; i--) {
        if(bucket[i] === undefined) continue;

        for(let char of bucket[i]) {
            output += char.repeat(i);
        }
    }
    return output;
};
