/**
A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

Every adjacent pair of words differs by a single letter.
Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
sk == endWord
Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.



Example 1:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
Example 2:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.


Constraints:

1 <= beginWord.length <= 10
endWord.length == beginWord.length
1 <= wordList.length <= 5000
wordList[i].length == beginWord.length
beginWord, endWord, and wordList[i] consist of lowercase English letters.
beginWord != endWord
All the words in wordList are unique.
**/
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    // if endword is not part of the word list, it doesn't exist. return 0.
    if (!wordList.includes(endWord)){
      return 0;
    }

    // This is the start. We'll use a queue for BFS where first element is the word and second is the
    // initial step.
    const queue = [[beginWord, 1]];
    const wordSet = new Set(wordList);


    while (queue.length){
      // set the current word to look into form the queue
      let curWordDetail = queue.shift();

      for (let word of wordSet){
        // see which word has one edit away.
        if (oneEditEqualLength(curWordDetail[0], word)){
          // if we visit end word, return the steps + one because we do not need
          // to put end word on the queue
          if (word === endWord){
            return curWordDetail[1] + 1;
          }

          // once we evaluate the word, we delete it from the wordSet
          wordSet.delete(word);

          // push the word and the current steps should be incremented by 1
          // because we found the word that has 1 edit distance.
          queue.push([word, curWordDetail[1]+1]);
        }
      }
    }

    //  return 0 if it's impossible for 2 words to have 1 edit distance
    return 0;
};

// this is for checking how many edit differences between 2 words
const oneEditEqualLength = function(word1, word2){
  // if word length is different exit already as one letter difference won't apply
  if (word1.length !== word2.length){
    return false
  }

  let i = 0;
  let j = 0;
  let diffs = 0;

  while (i < word1.length){
    if (word[i] !== word2[j]){
      diffs++;
    }

    if (diffs > 1){
      return false;
    }

    i++;
    j++;
  }

  if (diffs == 0){
    return false
  }

  return true
}





























.
