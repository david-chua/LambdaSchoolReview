/**
Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above.

            1
          1   1
        1   2   1
     1    3   3   1

Input: numRows = 5
Output: [[1], [1,1], [1,2,1], [1,3,3,1],[1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]

**/

/**
Space complexity: n technically 5 factorial
Time: O(n^2)

Steps:
1. generate result array
2. start with initial row [[1]]
3. run for loop from 1 to numRows
4. inside loop, reference previous Row to get values and create a current row array
5. push 1 as outer value is always 1
6. for inner values, go from 1 to i.
7. To add values, use prevRow[j-1] and [j] which is going to reference the values above
8. Add value to the current row array
9. add 1 at the end of the current Row once for loop is done
10. push current Row to end of results and go to start of loop with a higher value until numRows is covered.
11. return result array
**/

var generate = function(numRows){
  let result = [];
  if (numRows === 0) return result;

  let firstRow = [1]
  result.push(firstRow);

  for (let i = 1; i < numRows; i++){
    let prevRow = result[i-1]
    let currentRow = [];

    currentRow.push(1);

    for (let j = 1; j < i; j++){
      value = prevRow[j-1] + prevRow[j]
      currentRow.push(value);
    }

    currentRow.push(1);
    result.push(currentRow)
  }
  return result
}


console.log(generate(5))
console.log(generate(2))
console.log(generate(0))
