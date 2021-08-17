/**
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example 1:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Example 2:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

Example 3:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false

Constraints:

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.

Follow up: Could you use search pruning to make your solution faster with a larger board?
**/

/**
steps:
1. double for loop
2. check if at that index if board[i][j] === word.charAt(0) and
if (dfs(board, i, j, word, 0) returns true, return true )

3. in DFS function,
- if out of bounds - return false
- if board[i][j] == -1 return false - already visited in this round
- if board[i][j] !== word.charAt(char)) - return false, doesn't match letter.
- if char === word.length -1 it means we already found the word

- have a temp variable to store current board placement board[i][j]
- change board[i][j] to -1 or "";
- go through all 4 directions [i+1,j][i-1,j][i,j+1][i,j-1] dfs wise
with char+1 to show next character
- if it's false, revert the board back to the original board[i][j] = temp
- return false - no word is found

time: O(n^2 or n * m or n to specify going through each character of the board) - double for loop
space O(n) due to recursive calls.
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if(board.length === 0 || board[0].length === 0) return !word;
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            if(board[i][j] === word.charAt(0)){
                if(dfs(board, i, j, word, 0)) {
                    return true;
                }
            }
        }
    }
    return false;
};

const dfs = (board, i, j, word, char) => {
    if(outOfBounds(board, i, j)) return false;
    if(board[i][j] === -1) return false; // already been here, can't reuse same cells
    if(board[i][j] !== word.charAt(char)) return false; // doesn't match word, so return false
    if(char === word.length - 1) return true; // found word so return true

    const temp = board[i][j]
    board[i][j] = -1;

    if(dfs(board, i+1, j, word, char+1)) return true;
    if(dfs(board, i-1, j, word, char+1)) return true;
    if(dfs(board, i, j+1, word, char+1)) return true;
    if(dfs(board, i, j-1, word, char+1)) return true;

    // reset char in board...
    board[i][j] = temp
    return false; // if here no word found ...
}

const outOfBounds = (board, i, j) =>
    (i < 0 || j < 0 || i >= board.length || j >= board[0].length);
