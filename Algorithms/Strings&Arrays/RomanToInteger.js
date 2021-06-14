/**
Roman numerals are represented by seven different symbols
I,V,X,L,C,D, and M.

For example 2 is written as II. 12 is written as XII which is simply X + II.

Roman numerals are typically written largest to smallest from left to write.
However, the numeral 4 is not IIII, instead it's IV.

I can be placed before V(5) and X(10) to make 4 and 9.
X can be placed before L(50) and C(100) to make 40 and 90
C can be placed before D(500) and M(1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

Example:

Input s = "III"
output = 3

Input s = "IV"
output = 4

Input s = "IX"
output = 9 

Input s = "LVIII"
output = 58
Explanation: L = 50, V = 5, III = 3

Input s = "MCMXCIV"
output = 1994
Explanation M = 1000, CM = 900, XC = 90, and IV = 4.
**/


// while loop
var romanToInt = function(s){
  let roman = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }

  let total = 0;
  let firstPointer = 0;
  let secondPointer = 1;

  while (firstPointer < s.length){
    let currentInt = roman[s.charAt(firstPointer)];
    let nextInt = roman[s.charAt(secondPointer)];

    if(nextInt){
        if (currentInt >= nextInt){
            total += currentInt;
            firstPointer++
            secondPointer++
        } else {
            total += (nextInt-currentInt);
            firstPointer += 2
            secondPointer += 2
        }
    } else {
      total += currentInt
      firstPointer++
    }
  }
  return total;
}

// For loop
var romanToInt = function(s) {
    let roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let total = 0;

    for (let i = 0; i< s.length; i++){
        let currentInt = roman[s.charAt(i)];
        let nextInt = roman[s.charAt(i+1)];

        if(nextInt){
            if (currentInt >= nextInt){
                total += currentInt;
            } else {
                total += (nextInt - currentInt);
                i++
            }
        } else {
            total += curr
        }

    }



  return total;
};
