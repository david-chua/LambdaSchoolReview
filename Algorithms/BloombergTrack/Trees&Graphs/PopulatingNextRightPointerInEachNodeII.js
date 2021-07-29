/**
Given a binary tree

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

Input: root = [1,2,3,4,5,null,7]
Output: [1,#,2,3,#,4,5,7,#]
Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.


Constraints:

The number of nodes in the given tree is less than 6000.
-100 <= node.val <= 100
**/

/**
              1
        2             3
  4        5     null      7

BFS - breadth first
use queue []
pop off root, then children

/**
Steps
time complexity: O(n)
space complexity: O(n) - due to stack
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
    if (!root) return null;
    let queue = [];
    queue.push(root);

    while (queue.length > 0){
        let curr = null;
        let next = null;

        let currQueueLength = queue.length

        for (let i = 0; i < currQueueLength; i++){
            if (!curr){
                curr = queue.shift()
                if (curr.left){
                    queue.push(curr.left)
                }
                if (curr.right){
                    queue.push(curr.right)
                }
            } else if (!next){
                next = queue.shift();
                curr.next = next
                if (next.left){
                    queue.push(next.left);
                }
                if (next.right){
                    queue.push(next.right);
                }
            } else {
                curr = queue.shift();
                next.next = curr;
                if (curr.left){
                    queue.push(curr.left)
                }
                if (curr.right){
                    queue.push(curr.right)
                }
                next = curr;
            }
        }

    }
    return root;
};

/**
Time: O(n)
Space: O(1)
**/

// improved by preprocessing last level
let connect = function(root){
  let dummyHead = new Node(0);
  let pre = dummyHead;
  let head = root;
  while (root !== null){
    if (root.left !== null){
      pre.next = root.left;
      pre = pre.next;
    }
    if (root.right !== null){
      pre.next = root.right;
      pre = pre.next;
    }
    root = root.next;
    if (root === null){
      pre = dummyHead;
      root = dummyHead.next;
      dummyHead.next = null.
    }
  }
  return head;
}
