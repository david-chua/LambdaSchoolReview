/**
Given a 2d grid map of '1's and '0's. Count the numer of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally and vertically. You may assume all four edges of the grid are surrounded by water.

Example 1:
input:

11110
11010
11000
00000

Output: 1


Example 2:

Input:

11000
11000
00100
00011

output: 3

**/


var numIslands = function(grid){
  if (grid === null || grid.length === 0){
    return 0;
  }

  let numberOfIslands = 0;

  for (let i = 0; i < grid.length; i++){
    for (let j = 0; j < grid[i].length; j++){
      if (grid[i][j] === '1'){
        numberOfIslands += getIslandCount(grid, i, j);
      }
    }
  }

  return numberOfIslands;
}


let getIslandCount = function(grid, i, j){
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0' ){
    return 0;
  }

  grid[i][j] = '0'

  getIslandCount(grid, i + 1, j);
  getIslandCount(grid, i - 1, j);
  getIslandCount(grid, i, j + 1);
  getIslandCount(grid, i, j - 1);

  return 1;
}
