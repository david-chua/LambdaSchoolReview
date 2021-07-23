/**
You are given two non-empty linked list representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two  numbers do not contain any leading zeroes except the number 0 itself.

Example:

7 -> 2 -> 4 -> 3
     5 -> 6 -> 4

7 -> 8 -> 0 -> 7

Input: l1 = [7,2,4,3], l2 = [5,6,4]
Output: [7,8,0,7]


Example 2:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [8,0,7]

Example 3:
Input: l1=[0], l2 = [0]
Output: [0]

**/

/**
Solution: Reverse both linked list and treat it as add two numbers 1
Time complexity: O(N) where N = length of elements in l1 and l2
Space: O(1) if disregarding result output but O(N) if you're referencing the output.

Steps:
1. reverse both linked list
2. create a dummyNode which will act as the anchor
3. initiate a carry integer and a result integer which will keep track of the original dummyNode since we'll be adding values to it.
4. do a while loop to start adding the values.
5. dummyNode.next = val1 + val2 + carry % 10 to give a single digit number.
6. carry = the Math.floor value of (val1 + val2 + carry) / 10)
7. if there's a carry at the end, make it another endpoint
8. reverse the result.next linked list to give the end value. 

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
var addTwoNumbers = function(l1, l2) {
    l1 = reverseLinkedList(l1)
    l2 = reverseLinkedList(l2);

    let dummyNode = new ListNode(-1)
    let result = dummyNode;
    let carry = 0;

    while (l1 !== null || l2 !== null){

        val1 = l1 !== null ? l1.val : 0;
        val2 = l2 !== null ? l2.val : 0;
        console.log(val1, val2)
        dummyNode.next = new ListNode((val1 + val2 + carry) % 10);
        carry = Math.floor((val1 + val2 + carry)/ 10);
        dummyNode = dummyNode.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    if (carry === 1){
        dummyNode.next = new ListNode(1);
    }

    return reverseLinkedList(result.next);
};


let reverseLinkedList = function(head){
    let previous = null;
    let current = head;
    let following = head;
    while (current){
        following = current.next;
        current.next = previous;
        previous = current;
        current = following;
    }

    return previous
}
