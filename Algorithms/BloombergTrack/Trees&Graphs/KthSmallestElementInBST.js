/**
Given the root of a binary search tree, and an integer k, return the kth (1-indexed) smallest element in the tree.

Example 1:

Input: root = [3,1,4,null,2], k = 1
Output: 1

Example 2:

Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3

Constraints:

The number of nodes in the tree is n.
1 <= k <= n <= 104
0 <= Node.val <= 104

Follow up: If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?
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
time: O(n)
space: O(n) - stack calls
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let n = 0;
    let ans = undefined;

    let dfs = function(node){
        if (!node || n >= k) return;
        dfs(node.left);
        n++
        if (n == k) ans =  node.val;
        dfs(node.right);
    }
    dfs(root);

    return ans
};


// Iterative

let kthSmallest = function(root,k){
  let n = 0;
  let stack = [];
  let curr = root;

  while (curr !== null && stack){
    while  (curr){
      stack.push(curr)
      curr = curr.left
    }

    curr = stack.pop()
    n++
    if (n === k){
      return curr.val
    }
    curr = curr.right; 
  }
}
