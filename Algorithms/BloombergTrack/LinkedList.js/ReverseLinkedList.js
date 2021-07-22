/**
Given head of a singly linked list, reverse the list and return the reverse list
**/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 let reverseLinkedList = function(head){
   let previous = null;
   let current = head;
   let following = head;

   while (current){
     following = following.next;
     current.next = previous;
     previous = current;
     current = following;
   }

   return previous
 }
