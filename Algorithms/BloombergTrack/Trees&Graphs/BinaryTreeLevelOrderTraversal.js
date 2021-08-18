/**
Given the root of a binary tree, return the level order traversal of its nodes'
values. (i.e., from left to right, level by level).



Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []


Constraints:

The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let  result = [];
    if (!root) return result;

    let recurse = (root, level) => {
        if (!root) return;

        if (result[level]){
            result[level].push(root.val);
        } else {
            result[level] = [root.val];
        }

        console.log(result);

        recurse(root.left, level + 1);
        recurse(root.right, level + 1);
    }

    recurse(root,0);

    return result;
};


/**
time complexity: O(n)
space: O(n) 
sample:
[ [ 3 ] ]
[ [ 3 ], [ 9 ] ]
[ [ 3 ], [ 9, 20 ] ]
[ [ 3 ], [ 9, 20 ], [ 15 ] ]
[ [ 3 ], [ 9, 20 ], [ 15 ], [ 10 ] ]
[ [ 3 ], [ 9, 20 ], [ 15 ], [ 10, 12 ] ]
[ [ 3 ], [ 9, 20 ], [ 15, 7 ], [ 10, 12 ] ]
[ [ 3 ], [ 9, 20 ], [ 15, 7 ], [ 10, 12, 24 ] ]
[ [ 3 ], [ 9, 20 ], [ 15, 7 ], [ 10, 12, 24, 25 ] ]
**/
