/**
Given two strings s and t, return true if t is an anagram of s and false otherwise.

Example 1:

input: s = "anagram", t = "nagaram"
output: true

Example 2:

input: s = "rat", t = "car"
output: false

**/
/**
time complexity: O(n)
space complexity: O(n)

Steps:
1. initialize result object
2. go through first string and add to result object. If it doesn't exist, result = 1, otherwise add 1
3. go through second string. If result object exist, remove 1 or if value is one, change it to undefined to remove. If it doesn't exist, create a value.
**/
let isAnagram = function(s,t){
  if (s.length !== t.length){
    return false
  }
  let firstObj = {}
      for (let i = 0; i < s.length; i++){
          if (firstObj[s[i]] === undefined){
              firstObj[s[i]] = 1;
          } else {
              firstObj[s[i]]++
          }
      }

      for (let j = 0; j< t.length; j++){
          if (firstObj[t[j]] > 1){
               firstObj[t[j]]--
          } else if (firstObj[t[j]] == 1){
              delete firstObj[t[j]]
          } else {
              if (firstObj[t[j]] === undefined){
                  firstObj[t[j]] = t[j];
              }
          }
      }
      if (Object.keys(firstObj).length === 0){
          return true
      }
      return false
}


let s = "anagram"
let t = "nagaram"


let u = "rat"
let v = "car"

let a = "anagram"
let b = "banagram"

console.log(isAnagram(s,t))
console.log(isAnagram(u,v))
console.log(isAnagram(a,b))


/** Other way: create a charObj with a-z
let isAnagram = function(s,t){
  let charObj = {
    'a': 0,
    'b': 0,
    'c': 0,
    'd': 0,
    ...
  }

  if (s.length() !== t.length()){
    return false;

    for (let i = 0; i < s.length; i++){
      charObj[s.charAt(i)]++
      charObj[t.charAt(i)]--;
    }

    for (char in charObj){
      if (char !== 0){
        return false
      }
    }
  }
  return true;
}
**/
