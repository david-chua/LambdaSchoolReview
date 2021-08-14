

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


x = 101

reverse = 0
while 101 > 0
   reverse = 0 * 10 +


reverse = 1
x = 10

reverse = 1 * 10 + x/10 = 10
x = 1


reverse = 10* 10 + 1 = 101
x = 0 
