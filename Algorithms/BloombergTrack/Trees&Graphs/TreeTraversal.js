/**
Write tree functions that take in a Binary search tree and an empty array. Traverse the BST, add its nodes' value to the input array, and return that array.

Three functiosn should traverse the BST using the in-oder, pre-order,post order tree traversal techniques respectively.

**/


// Time - O(n) || O(n) space
function inOrderTraverse(tree, array) {
  // Write your code here.
	if (tree !== null){
		inOrderTraverse(tree.left, array);
		array.push(tree.value);
		inOrderTraverse(tree.right, array);
	}

	return array;
}

// Time - O(n) || O(n) space
function preOrderTraverse(tree, array) {
  // Write your code here.
	if (tree !== null){
		array.push(tree.value);
		preOrderTraverse(tree.left, array);
		preOrderTraverse(tree.right, array);
	}

	return array;
}

// Time - O(n) || O(n) space
function postOrderTraverse(tree, array) {
  // Write your code here.
	if(tree !== null){
		postOrderTraverse(tree.left, array);
		postOrderTraverse(tree.right, array);
		array.push(tree.value);
	}

	return array;
}
