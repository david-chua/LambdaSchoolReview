/**
Merge two sorted linked list and return it as a sorted list. This list should be made by splicing together the two nodes of the first two lists.

Example:

Input: l1 = [1,2,4], l2 = [,1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: l1 = [], l2 = []
Output: []

Example 3:

Input l1 = [], l2 = [0]
Output: [0]

**/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 let mergeTwoLists = function(l1,l2){
   let dummy = new ListNode(-1)
   let head = dummy;

   while (l1 !== null && l2 !== null){
     if (l1.val <= l2.val){
       dummy.next = l1;
       l1 = l1.next;
     } else {
       dummy.next = l2;
       l2 = l2.next;
     }
     dummy = dummy.next;
   }

   if (l1 !== null){
     dummy.next = l1
   } else {
     dummy.next = l2
   }

   return head.next; 
 }
