/**
You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.



Follow up:

You may only use constant extra space.
Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.


Example 1:



Input: root = [1,2,3,4,5,6,7]
Output: [1,#,2,3,#,4,5,6,7,#]
Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.


Constraints:

The number of nodes in the given tree is less than 4096.
-1000 <= node.val <= 1000
**/

/**

         1
     2       3
  4    5   6   7

 1. same parent [2,3] have same parent [1]
 2. different parent 5 has to connect to 6 which have different parents

Explanation:
Parent node 1
- look at children
- take left child and make it point to right child
- after point parent right

Different parent
- current.right = current.next.left

**/

/**
Time: O(n)
Space: O(1)
**/

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    // error checking
    if (!root){
        return null
    }

    let leftModeNode = root;
    while (leftModeNode.left){
        let curr = leftModeNode

        while(curr){
            // connect left to right child
            curr.left.next = curr.right
            // if next exist, connect curr's next's left child as curr right's next value
            if (curr.next){
                curr.right.next = curr.next.left
            }
            curr = curr.next

        }
        leftModeNode = leftModeNode.left;
    }
    return root
};
