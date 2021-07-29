/**
Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

Example 1:

Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]

Example 2:

Input: preorder = [-1], inorder = [-1]
Output: [-1]


Constraints:

1 <= preorder.length <= 3000
inorder.length == preorder.length
-3000 <= preorder[i], inorder[i] <= 3000
preorder and inorder consist of unique values.
Each value of inorder also appears in preorder.
preorder is guaranteed to be the preorder traversal of the tree.
inorder is guaranteed to be the inorder traversal of the tree.
**/

/**
Steps:
1. helper method contains
 - pre order tree
 - start of pre order
 - end of pre order
 - in order tree
 - start of in order
 - end of pre order
2. call helper method where helper contains
- pre order TreeNode
- 0 - starting at index 0 (current root)
- pre order boundarry - preorder.length -1
- in order tree
- 0 - starting index of 0
- in order boundary - inorder.length -1
3. check boundaries
first if:
- if preStart index greater than end of pre order length
- if instart index greater than end
  - return null

4. second if:
- if it only contains 1 item in the length
- return a treeNode with no left and right

5.  create a root node which will be the current node
6. initiate an index and find where inorder[index] == the root node (to figure out what's going to be on the left side, and whatever's on the right side)
7. able to set left and right

left = helper
- preorder tree
- preorder start =  beginning + 1 - (root + 1)
- preorder end = pre order start + (index where you found root - in order start)
- in order tree
- in order start: 0
- in order end - where you found index -1

right = helper
- pre order tree
- preorder beginning = preorder start + (index- in_start_index)
- end - last item
- in order tree
- in order beginning = index + 1 (items on the right) - due to right subtrees when doing in order 
- in order end - last item in index


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    return getTree(preorder, 0, preorder.length-1, inorder, 0, inorder.length-1);
};

function getTree(preorder, preorder_start_index, preorder_last_index, inorder, inorder_start_index, inorder_last_index){
    if (preorder_start_index > preorder_last_index || inorder_start_index > inorder_last_index){
        return null
    }

    if (preorder_start_index === preorder_last_index || inorder_start_index === inorder_last_index){
        return new TreeNode(preorder[preorder_start_index], null,null);
    }

    const val = preorder[preorder_start_index];
    let index = inorder_start_index;
    while(index <= inorder_last_index && inorder[index] !== val){
        index++
    }

    const node = new TreeNode(val);

    node.left = getTree(preorder, preorder_start_index + 1, preorder_start_index + (index - inorder_start_index), inorder, inorder_start_index, index-1);
    node.right = getTree(preorder, preorder_start_index + (index- inorder_start_index) + 1, preorder_last_index, inorder, index + 1, inorder_last_index)

    return node
}
