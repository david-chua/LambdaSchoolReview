/**
Given a root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:
* The left subtree of a node contains only nodes with keys less than the node's key.
* The right subtree of a node contains only keys with greater than the node's key.
* Both the left and right subtrees must also be binary trees.

Example 1:

Input root = [2,1,3]
Output: true

Input: root = [5,1,4, null,null, 3,6]
Output: false
Explanation: The root's node value is 5 but it's right child's value is 4.

Contraints:

* Number of nodes in the tree is range [1, 1000]
* -2^31 <= Node.val <= 2^31-1

**/

/**
Steps:
1. create helper function
2. if root is null, return true
3. if root's left value > root's value and root's val < min - return false
4. else continue recursing

function TreeNode(val, left, right){
  this.val = (val === undefined? 0: val);
  this.left = (left === undefined ? null: left)
  this.right = (right === undefined? null: right)
}


var isValidBST = function(root) {
    return isValid(root, null, null);
};

var isValid = function(root, max, min){
    if (root == null){
        return true;
    } else if (max !== null && root.val >= max || min !== null & root.val <= min){
        return false
    } else {
        return isValid(root.left, root.val, min) && isValid(root.right, max, root.val)
    }
}

// Run time O(n) - going through entire tree
// Spacetime O(n) worst case if it's a giant linked list type.

// Steps:
