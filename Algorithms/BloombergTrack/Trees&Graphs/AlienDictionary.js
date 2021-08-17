/**
There is a new alien language that uses the English alphabet. However, the order among the letters is unknown to you.

You are given a list of strings words from the alien language's dictionary, where the strings in words are sorted lexicographically by the rules of this new language.

Return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. If there is no solution, return "". If there are multiple solutions, return any of them.

A string s is lexicographically smaller than a string t if at the first letter where they differ, the letter in s comes before the letter in t in the alien language. If the first min(s.length, t.length) letters are the same, then s is smaller if and only if s.length < t.length.

Example 1:

Input: words = ["wrt","wrf","er","ett","rftt"]
Output: "wertf"

Example 2:

Input: words = ["z","x"]
Output: "zx"

Example 3:

Input: words = ["z","x","z"]
Output: ""
Explanation: The order is invalid, so return "".

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] consists of only lowercase English letters.
**/

/**
overview:
Topological sort - Directed Acyclical Graph - directed edges but no cycles
goal: try to figure out order of words
given: sorted based on how words work.
return string of unique string in increasing order
if no solution: ""
DFS solution - using post order dfs - adding last items first and going backwards
loop detection - having processed or seen
two things: visited and want to know if node is in current path.

time complexity: number of characters.
**/


let alienOrder = function(words){
  let graph = {};

  // initializes graph like
  //words { w: [], r: [], t: [], f: [], e: [] }
  words.forEach((word) => {
    word.split('').forEach((char) => graph[char] = [])
  });

  // go through word list and look at every pair of words
  for (let i = 0; i < words.length-1; i++){
    // two words to compare
    let top = words[i]
    let down = words[i+1]
    let minLength = Math.min(top.length, down.length);
    // if length of word 1 is greater than length of word 2
    // and if they have the same prefix
    // we know we have an invalid ordering
    // return empty string
    if(top.length > down.length && top.startsWith(down)){
      return ""
    }
    // go through every single character between two words
    // find the first differing characters
    //
    for (let j = 0; j < minLength; j++){
      if (top[j] != down[j]){
        graph[top[j]].push(down[j]) // push values into graph[char] array.
        break; // break since we only need to find the first unmatching pair
      }
    }
  }

  console.log('graph', graph);

  // here we start our DFS
  let visiting = new Set();
  // False means character has been visited,
  // True has been visited and in the current Path.
  let visited = new Set();
  let result = [];

  let dfs = function(char){
    if (visiting.has(char)) return false;
    if (visited.has(char)) return true;
    visiting.add(char);

    // go thorugh each neighbor of that character
    for (let n of graph[char]){
      if (!dfs(n)) return false
    }
    visiting.delete(char);
    visited.add(char);
    result.push(char);
    return true
  }

  // if dfs returns true, we detect a loop
  for ([key,val] of Object.entries(graph)){
    if (!dfs(key)) return "";
  }
  return result.reverse().join('');
}

let words = ["wrt","wrf","er","ett","rftt"]

console.log(alienOrder(words));
