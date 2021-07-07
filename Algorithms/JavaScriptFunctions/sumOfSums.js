// create a function that triggers
// sum(a)(b)(c)(d)() = sume of a + b + c + d
// ie: sum(1)(2)(3)(4)() = 10

let sum = function(num1){
  return function(num2){
    if (num2){
      return sum(num1 + num2)
    }
    return num1
  }
}


console.log(sum(1)(2)(3)(4)())
