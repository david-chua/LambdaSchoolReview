/**
You are given two non-empty linked list representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contain a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807

Example 2

Input: l1 = [0], l2 = [0]
Output: [0]


Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

**/

/**
Time complexity: O(N)  where N is the max number of elements between l1 and l2
Space complexity: O(N)

let addTwoNumbers = function(l1,l2){
  let dummyNode = new ListNode(-1);
  let result = dummyNode;
  let carry = 0;

  while (l1 != null || l2 !== null){
    let one = l1 ? l1.val : 0;
    let two = l2 ? l2.val : 0;
    dummyNode.next = new ListNode((one + two + carry) % 10); // This would either be a 0 or the remainder.
    carry = Math.floor((one + two + carry) / 10) // this would either be a 1 or 0.
    dummyNode = dummyNode.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry === 1){
    dummy.next = new ListNode(1);
  }

  return result.next;
}
