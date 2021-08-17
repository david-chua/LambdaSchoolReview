let testArr = [1,2,3,4];


/**
brute force
for loop
nested for loop - if i and j are the same, skip
other wise, keep multiplying.
**/


function productArr(arr){
  let finalArr = new Array(arr.length).fill(1);

  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < finalArr.length; j++){
      if (i === j){
        continue
      }
      finalArr[j] = finalArr[j] * arr[i];
    }
  }

  return finalArr
}

/**
time: O(n)
space: O(3N) - O(n)
/**
3 array all filled with 1.
1. start with 1 on leftProduct 0
2. start with 1 on rightProdcut's last index.
3. for leftArray
- multiply arr[i-1] with leftProduct's[i-1]

4. for rightArray
- multply arr[i+1] with rightProduct's[i+1];

5. for final array, multiply both right and left product on the same index.

return final array
**/

function productArr(arr){
  const arrLength = arr.length ;
  let leftProduct = new Array(arr.length).fill(1);
  let rightProduct = new Array(arr.length).fill(1);
  let finalArr = new Array(arr.length).fill(1);

  leftProduct[0] = 1;
  rightProduct[arrLength-1] = 1;


  for (let i = 1; i< arrLength; i++){
    leftProduct[i] = arr[i-1] * leftProduct[i-1]
  }

  for (let i = arrLength-2; i >= 0; i--){
    rightProduct[i] = arr[i+1] * rightProduct[i+1];
  }

  for (let i = 0; i < arrLength; i++){
    finalArr[i] = leftProduct[i]*rightProduct[i];
  }
  return finalArr;
}

/**
you can also do this with only 1 output array by having the final array only
create output array with all 1's.
from index 1 since index 0 will be the item without multiply by itself, like in the
left array.
mulitply like the left product from previous

for right side backwards, loop through by setting a rightVar and multiply the last item
with this value then start going backwards and multiplying this value
with the right rightVar
then rightVar = rightVar * arr[i]

return output Array
**/

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
