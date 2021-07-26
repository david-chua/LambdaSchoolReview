/**
BST Construction

Write a BST class for a Binary Search Tree. The class should support:

1. Inserting values with the insert method
2. Removing values with the remove method: this method should only remove the first isntance of a given value.
3. Searching for values with the contains method.

Note that you can't remove values from a single-node tree. In order words, calling the remove method on a single-node tree should simply not do anything.

Each BST node has an integer value, a left node, and a right node. A node is said to be a valid BST node if and only if it satisfies the BST property. its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node ot its right and its children nodes are either valid BST nodes themsevles or None/null.

**/

class BST{
  constructor(value){
    this.value = value;
    this.left = null
    this.right = null;
  }

  // Average O(log(n) time | O(log(n)) space)
  // Worst O(n) time | O(n) space
  insert(value){
    if (value < this.value){
      if (this.left === null){
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null){
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
    return this;
  }

  // Average O(log(n) time | O(log(n)) space)
  // Worst O(n) time | O(n) space
  contains(value){
    if (value < this.value){
      if (this.left === null){
        return false;
      } else {
        return this.left.contains(value)
      }
    } else if (value > this.value){
      if (this.right === null){
        return false;
      } else {
        return this.right.contains(value)
      }
    } else {
      return true;
    }
  }

  remove(value, parent=null){
    if (value < this.value){
      if (this.left !== null){
        this.left.remove(value, this);
      }
    } else {
      if (this.left !== null && this.right !== null){
        this.value = this.right.getMinValue();
        this.right.remove(this.value, this);
      } else if (parent === null){
        if (this.left !== null){
          this.value = this.left.value;
          this.right = this.left.right;
          this.left = this.left.left;
        } else if (this.right !== null){
          this.value = this.right.value;
          this.left = this.right.left;
          this.right = this.right.right;
        } else {
          continue;
        }
      } else if (parent.left === this){
          parent.left = this.left !== null ? this.left = this.right;
      } else if (parent.right === this){
         parent.right = this.left !== null?  this.left: this.right;
      }
    }
    return this;
  }


  getMinValue(){
    if (this.left === null){
      return this.value;
    } else {
      return this.left.getMinValue();
    }
  }
}
