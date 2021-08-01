/**
Given a non-empty list of words, return the k most frequent elements.

Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

Example 1:
Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
Output: ["i", "love"]
Explanation: "i" and "love" are the two most frequent words.
    Note that "i" comes before "love" due to a lower alphabetical order.
Example 2:
Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
Output: ["the", "is", "sunny", "day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
    with the number of occurrence being 4, 3, 2 and 1 respectively.
Note:
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Input words contain only lowercase letters.
Follow up:
Try to solve it in O(n log k) time and O(n) extra space.
**/

/**

time complexity: O(klogk) where k is the numbers of items in a bucket.
space: O(n) - for the wordObj and bucket and output all occupying at most n values.

steps:
1. initialize an object with key as the word and value as the frequency
2. use bucket sort by creating an array with an array of words based on the frequency used using object in step 1.
3. loop through bucket list backwards from most used to least used.
4. sort the array while all the contents in the output array.
5. if output array length exceeds k amounts, or equal to it, slice array to fit only the certain needed amount.
**/

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
let topKFrequent = function(words, k) {
  let wordObj = {}
  let bucket = [];
  let output = [];

    for (let word of words){
        if (wordObj[word] === undefined){
            wordObj[word] = 1
        } else {
            wordObj[word]++
        }
    }

    for (const [key, value] of Object.entries(wordObj)){
        if (bucket[value] === undefined) bucket[value] = [key];
        else bucket[value].push(key);
    }

    for (let i = bucket.length-1; i >= 0; i--){
        if (bucket[i] === undefined) continue;
        output.push(...bucket[i].sort())
        if (output.length >= k) return output.slice(0,k)
    }
};
