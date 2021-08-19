/**
Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a
tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.



Example 1:


Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
Example 2:

Input: root = [1,2]
Output: 1


Constraints:

The number of nodes in the tree is in the range [1, 104].
-100 <= Node.val <= 100
Accepted
**/

/**

            1
       2         null
    3     4
  5         6

Longest path:
Brute force way is to take every node - O(n^2)
- find as far down right
- find as far down left

Recursive way:
start from bottom

find max from each subtree
Bottom up - finding diameter from bottom nodes
O(n)
Recursive code - shows
space: O(N) - call stack.
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
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let diameter = 0;

    let dfs = function(root){
        if (!root) return 0;

        let left = dfs(root.left);
        let right = dfs(root.right);

        diameter = Math.max(diameter, left+right)

        return Math.max(left,right) + 1
    }

    dfs(root);
    return diameter
};


// Iterative
using stack


var diameterOfBinaryTree = function(root) {

    let max = 0;

    if (!root) {
        return 0;
    }

    let tree = root;
    let stack = [];

    while (tree || stack.length) {
        while (tree) {
            stack.push(tree);
            max = getMax(tree, max);
            tree = tree.left;
        }
        tree = stack.pop();
        tree = tree.right;
    }

    return max;
};

const getHeight = (root) => {
    if (!root) return -1;
    return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}

const getMax = (root, max) => {
    const left = root ? getHeight(root.left) : -1;
    const right = root ? getHeight(root.right) : -1;
    return Math.max(max, right + left + 2);
}
