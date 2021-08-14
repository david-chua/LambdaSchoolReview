/**
This question is about implementing a basic elimination algorithm for Candy Crush.

Given an m x n integer array board representing the grid of candy where board[i][j] represents the type of candy. A value of board[i][j] == 0 represents that the cell is empty.

The given board represents the state of the game following the player's move. Now, you need to restore the board to a stable state by crushing candies according to the following rules:

If three or more candies of the same type are adjacent vertically or horizontally, crush them all at the same time - these positions become empty.
After crushing all candies simultaneously, if an empty space on the board has candies on top of itself, then these candies will drop until they hit a candy or bottom at the same time. No new candies will drop outside the top boundary.
After the above steps, there may exist more candies that can be crushed. If so, you need to repeat the above steps.
If there does not exist more candies that can be crushed (i.e., the board is stable), then return the current board.
You need to perform the above rules until the board becomes stable, then return the stable board.



Input: board = [[110,5,112,113,114],[210,211,5,213,214],[310,311,3,313,314],[410,411,412,5,414],[5,1,512,3,3],[610,4,1,613,614],[710,1,2,713,714],[810,1,2,1,1],[1,1,2,2,2],[4,1,4,4,1014]]
Output: [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[110,0,0,0,114],[210,0,0,0,214],[310,0,0,113,314],[410,0,0,213,414],[610,211,112,313,614],[710,311,412,613,714],[810,411,512,713,1014]]

Input: board = [[1,3,5,5,2],[3,4,3,3,1],[3,2,4,5,2],[2,4,4,5,5],[1,4,4,1,1]]
Output: [[1,3,0,0,0],[3,4,0,5,2],[3,2,0,3,1],[2,4,0,5,2],[1,4,3,1,1]]
**/

/**
time: O(R*C)^2 3(R*C) * (R*C)/3
steps:
1. create a retry boolean which would keep looping through the board after every loop
once the initial deletion occurs
2. go through each item in matrix, and if value horizontally for 3 candies are the same,
change it to the negative value to mark that it is going to be deleted this round.
3. go thorugh each item in matrix and if value vertically is the same for 3 candies,
then change it to negative value to mark that it will be deleted this same round.
4. once you've gone through the horizontal and vertical,
crush the candies and fill up the remaining values of the board as 0 from where row ended.
5. if you've changed some values in step 2 and 3,
make sure to have retry to true so it keeps checking if there are other things to crush.


/**
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function(board) {
  const m = board.length;
  const n = board[0].length;

  let shouldContinue = false;

  // Crush horizontally
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n - 2; j++) {
      const v = Math.abs(board[i][j]);
      if (v && v === Math.abs(board[i][j + 1]) && v === Math.abs(board[i][j + 2])) {
        board[i][j] = board[i][j + 1] = board[i][j + 2] = -v;
        shouldContinue = true;
      }
    }
  }

  // Crush vertically
  for (let i = 0; i < m - 2; i++) {
    for (let j = 0; j < n; j++) {
      const v = Math.abs(board[i][j]);
      if (v && v === Math.abs(board[i + 1][j]) && v === Math.abs(board[i + 2][j])) {
        board[i][j] = board[i + 1][j] = board[i + 2][j] = -v;
        shouldContinue = true;
      }
    }
  }

  // Drop vertically
  for (let j = 0; j < n; j++) {
    let row = m - 1;
    for (let i = m - 1; i >= 0; i--) {
      console.log('currentBoard', board)
      if (board[i][j] >= 0) {
        console.log('if', board[i][j])

        board[row--][j] = board[i][j];

      }
    }
            console.log('after change', board)
    for (let i = row; i >= 0; i--) {
      board[i][j] = 0;
    }
  }

  return shouldContinue ? candyCrush(board) : board;
};


let board = [
  [110,5,112,113,114],
  [210,211,5,213,214],
  [310,311,3,313,314],
  [410,411,412,5,414],
  [5,1,512,3,3],
  [610,4,1,613,614],
  [710,1,2,713,714],
  [810,1,2,1,1],
  [1,1,2,2,2],
  [4,1,4,4,1014]]


console.log(candyCrush(board));
