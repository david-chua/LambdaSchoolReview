
/**
Find Closest Value in BST

Write a function that takes in a Binary Search Tree (BST) and a target integer value and returns the closest value to that target value contained in the BST

You can assume there will only be one closest value

Each BST node has an integer value, a left child node, and a right child node. A node is said to be a valid BST node if and only if it satisfies the BST property; its value strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and its children nodes are either valid BST nodes themselves or None/null;
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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    return closestHelper(root, target, root.val)
};


var closestHelper = function(root, target, closest){
    let currentNode = root;
    while (currentNode !== null){
        if (Math.abs(target-closest) > Math.abs(target-currentNode.val)){
            closest = currentNode.val
        }
        if (target < currentNode.val){
            currentNode = currentNode.left;
        } else if ( target > currentNode.val){
            currentNode = currentNode.right
        } else {
            break
        }
    }
    return closest
}
