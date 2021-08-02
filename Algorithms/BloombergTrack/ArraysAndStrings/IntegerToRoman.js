/**
Integer to Roman

Given an integer, convert it to roman numeral
**/

let roman = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [3, "I"]
]

var intToRoman = function(num){
  let result = ""
  for (let i = 0; i < roman.length; i++){
    let numSymbol = Math.floor(num/roman[i][0]);
    if (numSymbol != 0){
      let addedChar = roman[i][1].repeat(numSymbol);
      result += addedChar
      num = num % roman[i][0]
    }
  }
  return result
}
