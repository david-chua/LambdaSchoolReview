/**
Given the root of a binary tree, flatten the tree into a "linked list":

The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
The "linked list" should be in the same order as a pre-order traversal of the binary tree.

Example 1:

Input: root = [1,2,5,3,4,null,6]
Output: [1,null,2,null,3,null,4,null,5,null,6]

Example 2:

Input: root = []
Output: []

Example 3:

Input: root = [0]
Output: [0]


Constraints:

The number of nodes in the tree is in the range [0, 2000].
-100 <= Node.val <= 100


Follow up: Can you flatten the tree in-place (with O(1) extra space)?
**/

/**
steps:

1. create helper method that takes in the root node for recursion

recursion steps:
1. if root is null, break
2. recurse all the way to the left
3. recurse all the way to the right
once at each end
4. if there's no left or right, return the root
5. if (left tail is not null)
 - lefttail's right become the root's right
 left - root - right  becomes     left - right
 - root.right = root.left
 makes connect where root - left - right
 - set root.left = null
 - null root - left -right
 **/
//* recursive way:
let flatten = function(root){
  if (root === null) return;
  let stack = [];
  stack.push(root);
  while (stack){
    let currentNode = stack.pop();
    if (currentNode.right !== null){
      stack.push(currentNode.right)
    }
    if (currentNode.left !== null){
      stack.push(currentNode.left)
    }

    if (stack){
      curretNode.right = stack[stack.length-1]
    }
    curretNode.left = null;
  }
}



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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {

    flattenTree(root);

};


let flattenTree = function(root){
    if (root === null) {
        return null
    }


    let leftTail = flattenTree(root.left)

    let rightTail = flattenTree(root.right)

    if (!leftTail && !rightTail) return root

    if (leftTail !== null){
        leftTail.right = root.right;
        root.right = root.left;
        root.left = null
    }


    return rightTail !== null ? rightTail : leftTail
}
