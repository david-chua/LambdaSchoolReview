

// function flattenArray(arr){
//   let finalArray = [];
//   for (let i = 0; i < arr.length; i++){
//     if (Array.isArray(arr[i])){
//       flattenHelper(arr[i], finalArray);
//     } else {
//       finalArray.push(arr[i])
//     }
//   }
//   return finalArray;
// }
//
// function flattenHelper(arr, finArr){
//   for (let i = 0; i < arr.length; i++){
//     if (Array.isArray(arr[i])){
//       flattenHelper(arr[i], finArr)
//     } else {
//       finArr.push(arr[i])
//     }
//   }
// }


let testArr = [1,2,[3,4], [2,[3,4]]];

// console.log(flattenArray(testArr))
console.log(testArr.flat(Infinity));
