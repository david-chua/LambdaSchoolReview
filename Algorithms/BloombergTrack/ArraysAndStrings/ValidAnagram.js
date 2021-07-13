/**
Given two strings s and t, return true if t is an anagram of s and false otherwise.

Example 1:

input: s = "anagram", t = "nagaram"
output: true

Example 2:

input: s = "rat", t = "car"
output: false

**/

let isAnagram = function(s,t){
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
                  firstObj[t[j]] = 1;
              } else {
                  firstObj[t[j]]++
              }
          }
      }

      if (Object.keys(firstObj).length === 0){
          return true
      }
      return false  
}
