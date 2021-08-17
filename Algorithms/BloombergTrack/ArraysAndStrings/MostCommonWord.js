/**
Most Common Word

Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.
It is guaranteed there is at least one word that isn't banned and that the answer is unique.

Words in the list of banned words are given in lowercase and free of punctuation. Words in the paragraph are not case sensitive. The answer is in lowercase.

Input:
paragraph: "Bob hit a ball, the hit BALL flew far after it was hit"
banned: ["hit"]
output: "ball"
**/


// Solution
/**
1. create a set of banned word to access it easily
2. create an array from the paragraph and remove all punctuations.
go through each word of the array.
3. change word to lowercase.
4. if the word is not part of the banned Set.
- if it's undefined for the validWord,
- set to 0
- add frequency.
- if validWordFrequency is more than  mostcommon frequency,
change most Common to the word.
return most common.

**/

var mostCommonWord = function(paragraph, banned){
  let bannedSet = new Set(banned);
  let validWordFrequency = {};
  let mostCommon = '';

  let words = paragraph.split(/\W+/);

  for (let word of words){
    let lowerCaseWord = word.toLowerCase();

    if (!bannedSet.has(lowerCaseWord)){
      if(validWordFrequency[lowerCaseWord] === undefined){
        validWordFrequency[lowerCaseWord] = 0
      }
      validWordFrequency[lowercase]++;
      if (mostCommon === '' || validWordFrequency[lowerCaseWord] >
      validWordFrequency[mostCommon]){
        mostcommon = lowerCaseWord;
      }
    }
  }

  return mostCommon
}
