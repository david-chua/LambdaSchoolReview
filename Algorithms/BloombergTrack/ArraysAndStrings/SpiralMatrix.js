/**
Given an m x n matrix, return all elements of the matrix in a spiral order

Example 1:
[
  [1,2,3]
  [4,5,6]
  [7,8,9]
]

Ouput: [1,2,3,6,9,8,7,4,5]

Example 2:

[
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12]
]

Output: [1,2,3,4,8,12,11,10,9,5,6,7]

/**
Time: O(n)
Space: O(n)

Steps:
1. initiate result array
2. check for edge case if matrix is nonexistent or length = 0, return empty array.
3. set boundaries
- top - index 0
- bottom - index: matrix.length -1 (to keep it in bound)
- left = 0
- right: matrix[0].length-1
4. initiate end point when result array contains all items of matrix: (height * width)
5. Start while loop to keep going when array result is smaller than matrix items
6. go top row left to right
7. add 1 to top row boundary so it won't get added again
8. add from top right to bottom right
9. subtract 1 from right row, so last  items are not added again.
10. go from bottom right to bottom left
11. subtract 1 from bottom row, so bottom are not added again.
12. go from bottom left to top left and add items
13. add 1 to left side so left items are not added again.
14. When loop breaks, return result
**/

let spiralOrder = function(matrix){
  let result = [];
  if (matrix === null || matrix.length ===0){
    return result;
  }

  let top = 0;
  let bottom = matrix.length-1;
  let left = 0;
  let right = matrix[0].length-1;
  let size = matrix.length * matrix[0].length; // height * width to get total

  while (result.length < size){
    for (let i = left; i <=right && result.length < size; i++){
      result.push(matrix[top][i])
    }
    top++
    for (let i = top; i <= bottom && result.length < size; i++){
      result.push(matrix[i][right]);
    }
    right--
    for (let i = right; i >= left && result.length < size; i--){
      result.push(matrix[bottom][i])
    }
    bottom--;
    for (let i = bottom; i>= top && result.length < size; i--){
      result.push(matrix[i][left])
    }
    left++;
  }
  return result;
}

let array = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12]
]

console.log(spiralOrder(array))
