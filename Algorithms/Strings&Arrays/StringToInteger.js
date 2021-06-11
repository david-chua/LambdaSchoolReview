var myAtoi = function(s) {
  let index = 0
  let negative = false
  let max = 2**31-1
  let min = 2**31 * -1;
  s = s.trim(); // removes white space

  while (index < s.length){
    if (s[index] == '-'){
      negative = true
      index++
    }

    if (!Number.isInteger(s.charAt(index)) ){
      let count = 0
      while (!Number.isInteger(s.charAt(index)) && index < s.length){
        count = 10* count + (s.charAt(index) - 0)
        index++
      }

      if (negative && -count <= min) return -2147483648
      if (!negative && count >= max) return 2147483647

      return negative ? -count : count
    }
  }
  return 0
}


s = "42"

console.log(myAtoi(s))
