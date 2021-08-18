/**
Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children.



Example 1:


Input: root = [1,2,3,null,5]
Output: ["1->2->5","1->3"]
Example 2:

Input: root = [1]
Output: ["1"]


Constraints:

The number of nodes in the tree is in the range [1, 100].
-100 <= Node.val <= 100
**/

/**
steps:
1. validate root
2. start array for result;
3. traverse while not in leaf node.
if not in leaf node
add value to str
- if it's a leaf node, push the current string into result array
if not leaf, add '->' so it becomes value -> next value
then traverse node.left and node.right if it exists.
4. return result array. 

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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (root === null) return root;
    let array = [];

    let traverse = function(node, str){
        if (!node) return '';
        str += node.val;
        if(!node.left && !node.right){
            array.push(str);
            return;
        }
        str += '->';
        node.left && traverse(node.left, str);
        node.right && traverse(node.right,str);
    }

    traverse(root, '');
    return array;
};
