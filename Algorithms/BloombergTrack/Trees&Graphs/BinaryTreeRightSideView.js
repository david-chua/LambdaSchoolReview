/**
Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example 1:

Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]

Example 2:

Input: root = [1,null,3]
Output: [1,3]
Example 3:

Input: root = []
Output: []
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
time complexity: O(n) - we traverse every node the trees
space complexity:O(n) - recursion stack could be length of all nodes in tree.

/**
* @param {TreeNode} root
* @return {number[]}
*/
var rightSideView = function(root) {
   let res = []
   let traverse = function(node, depth){
       if(!node){
           return
       }

       if (!res[depth]){
           res[depth] = node.val;
       }

       traverse(node.right, depth+1)
       traverse(node.left, depth+1)
   }

   traverse(root, 0)

   return res;
};
