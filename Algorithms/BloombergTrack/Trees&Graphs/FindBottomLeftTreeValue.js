/**
Given the root of a binary tree, return the leftmost value in the last row of the tree.

Example 1:

Input: root = [2,1,3]
Output: 1

Example 2:

Input: root = [1,2,3,4,null,5,6,null,null,7]
Output: 7

**/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
O(n) time
O(1) space
**/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    let nextMaxLevel = 0;
    let bottomLeftVal = 0;

    let dfs = function(root, level){
        if (!root) return;
        if (level === nextMaxLevel){
            bottomLeftVal = root.val
            nextMaxLevel++
        }
        dfs(root.left, level+1);
        dfs(root.right, level+1);
    }

    dfs(root,0);
    return bottomLeftVal

};
