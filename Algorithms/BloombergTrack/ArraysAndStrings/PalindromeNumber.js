/**
Brute force:
1. set number to string
2. split string into array and reverse and join and set to number.

**/

/**
palindrome -
reverse * 10 + x % 10 until x is less than 0.
x = Math.floor(x/10).
**/

/**
101
reversed = 0
reversed = 0 + 1 = 1
x = 10
reversed = 1*10 + 10 % 10 = 10+ 0 = 10
x = 1
reversed = 10* 10 + 1 * 10 = 101
**/

var isPalindrome = function(x){
  if (x < 0){
    return false;
  }

  return x === reversedInteger(x);
}


var reversedInteger = function(x){
  let reversed = 0;

  while (x > 0){
    reversed = (reversed * 10) + (x % 10);
    x = Math.floor(x/10);
  }

  return reversed
}
