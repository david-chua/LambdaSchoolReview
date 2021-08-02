let testArr = [1,2,3,4];


// function productArr(arr){
//   let finalArr = new Array(arr.length).fill(1);
//
//   for (let i = 0; i < arr.length; i++){
//     for (let j = 0; j < finalArr.length; j++){
//       if (i === j){
//         continue
//       }
//       finalArr[j] = finalArr[j] * arr[i];
//     }
//   }
//
//   return finalArr
// }



// function productArr(arr){
//   const arrLength = arr.length ;
//   let leftProduct = new Array(arr.length).fill(1);
//   let rightProduct = new Array(arr.length).fill(1);
//   let finalArr = new Array(arr.length).fill(1);
//
//   leftProduct[0] = 1;
//   rightProduct[arrLength-1] = 1;
//
//
//   for (let i = 1; i< arrLength; i++){
//     leftProduct[i] = arr[i-1] * leftProduct[i-1]
//   }
//
//   for (let i = arrLength-2; i >= 0; i--){
//     rightProduct[i] = arr[i+1] * rightProduct[i+1];
//   }
//
//   for (let i = 0; i < arrLength; i++){
//     finalArr[i] = leftProduct[i]*rightProduct[i];
//   }
//   return finalArr;
// }


function productArr(arr){
  let length = arr.length;
  let outputArr = new Array(length).fill(1);

  for (let i = 1; i < length; i++){
    outputArr[i] = arr[i-1] * outputArr[i-1];
  }
  let rightVar = 1;

  for ( let i = length-1; i >= 0 ; i--){
    outputArr[i] = outputArr[i] * rightVar;
    rightVar = rightVar * arr[i];
  }

  return outputArr
}
console.log(productArr(testArr))
