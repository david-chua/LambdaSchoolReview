/**
Given the root of a binary tree, return the zigzag level order traversal of its nodes'
values. (i.e., from left to right, then right to left for the next level and alternate between).

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]

Example 2:

Input: root = [1]
Output: [[1]]

Example 3:

Input: root = []
Output: []


Constraints:

The number of nodes in the tree is in the range [0, 2000].
-100 <= Node.val <= 100
**

/**
DFS

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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    let stack = []
    let level = 0;

    let traverse = function(root,level){
        if (!root) return

        if (!stack[level]) stack[level] = [];
        if (level %2 === 0) stack[level].push(root.val);
        else stack[level].unshift(root.val);
        if (root.left) traverse(root.left, level+1);
        if (root.right) traverse(root.right, level+1);

    }

    traverse(root,0)
    return stack;

};

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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    let stack = []
    let level = 0;

    let traverse = function(root,level){
        if (!root) return

        if (!stack[level]) stack[level] = [];
        if (level %2 === 0) stack[level].push(root.val);
        else stack[level].unshift(root.val);
        if (root.left) traverse(root.left, level+1);
        if (root.right) traverse(root.right, level+1);

    }

    traverse(root,0)
    return stack;

};
