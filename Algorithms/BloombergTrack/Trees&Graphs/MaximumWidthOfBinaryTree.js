/**
Given the root of a binary tree, return the maximum width of the given tree.

The maximum width of a tree is the maximum width among all levels.

The width of one level is defined as the length between the end-nodes
(the leftmost and rightmost non-null nodes), where the null nodes between the
end-nodes are also counted into the length calculation.

It is guaranteed that the answer will in the range of 32-bit signed integer.



Example 1:


Input: root = [1,3,2,5,3,null,9]
Output: 4
Explanation: The maximum width existing in the third level with the length 4
(5,3,null,9).
Example 2:


Input: root = [1,3,null,5,3]
Output: 2
Explanation: The maximum width existing in the third level with the length 2 (5,3).
Example 3:


Input: root = [1,3,2,5]
Output: 2
Explanation: The maximum width existing in the second level with the length 2 (3,2).
Example 4:


Input: root = [1,3,2,5,null,null,9,6,null,null,7]
Output: 8
Explanation: The maximum width existing in the fourth level with the
length 8 (6,null,null,null,null,null,null,7).


Constraints:

The number of nodes in the tree is in the range [1, 3000].
-100 <= Node.val <= 100
**/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 Approach: Using Level Order Traversal using the Queue.

Initially add the root and the root index 0 to the queue.
At each level, save the first and last index of the nodes and push the left and
right child nodes along with their index.
If the parent node has index i, the left child index will be 2 * i + 1 and of
right child index will be 2 * i + 2.
At the end of each level, calculate the width by subtracting the first index from
the last index of the level. If the width exceeds the maxWidth, assign that.
Note: Substituting the index in this solution since the solution needs to handle
values over 32-bit integers. If we don't normalize, the value is overflowing and
the width at the end of those levels is NaN. Basically, just subtracting the
initial node index value with each node index, so after subtraction, the width
will still be the same and we won't get NaN as a result.
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
    if(!root) {
        return 0;
    }
    const q = [[root, 0]];
    let maxWidth = 0, l = 0, r = 0;
    while(q.length) {
        const size = q.length;
        const startIdx = q[0][1];
        for(let i = 0; i < size; ++i) {
            const [node, idx] = q.shift();
            if(i === 0) {
                l = idx;
            }
            if(i === size - 1) {
                r = idx;
            }
			const subIdx = idx - startIdx;
            if(node.left !== null) {
                q.push([node.left, 2 * subIdx + 1]);
            }
            if(node.right !== null) {
                q.push([node.right, 2 * subIdx + 2]);
            }
        }
        maxWidth = Math.max(maxWidth, r - l + 1);
    }
    return maxWidth;
};
