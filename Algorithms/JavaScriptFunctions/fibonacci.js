
// let fibonacci = function(n){
//   let arr = new Array(n);
//   let arr[0] = 0
//   let arr[1] = 1
//
//   for (let i = 2; i <= n; i++){
//     arr[n] = arr[n-1] + arr[n-2];
//   }
//
//   return arr[n];
// }

let fibObject = {}
let fibonacci = function(n, obj){
  if (n < 2){
    return n;
  }
  if (!obj[n]){
    obj[n] = fibonacci(n-1, obj) + fibonacci(n-2, obj);
  }
  return obj[n]
}


console.log(fibonacci(10, fibObject))


// 0 1 1 2 3 5
