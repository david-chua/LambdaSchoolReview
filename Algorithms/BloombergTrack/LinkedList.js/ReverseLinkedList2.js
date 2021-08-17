/**
Given the head of a singly linked list and two integers, left and right,
where left <= right. reverse the node of the list from position left to
position right. and return the reversed list;

Example 1:

input: head = [1,2,3,4,5], left = 2, right = 4
output: [1,4,3,2,5]

Example 2:

Input: head = [5], left = 1, right = 1;
output: [5]
**/


/**
Time complexity: O(n)
Space: O(1)

Steps:

1. have two initial pointers:
prev = null  and current = head ;
2. until left is 1, go through nodes where
prev = current and current = current.next;
subtract left and right - this is because you want to have a pointer where
previous is 1 item from where L starts and current is where you begin reversing
the linked list.
3. set two new pointers, tail, and con. Con will be the item connecting the
head of the reversed list and tail will be the connecting to the remaining
nodes (if it exist).
4. while you're not at the end of the list, reverse the list as normal and
subtract until right = 0
5. connect the endpoints as instructed from step 3. connect the tail as well.
6. returnthe original head

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if (head === null){
        return null
    }

    let current = head
    let prev = null

    while (left > 1){
        prev = current
        current = current.next;
        left--
        right--
    }

    let tail = current
    let con = prev;
    let following = current;

    while (right > 0){
        following = current.next;
        current.next = prev
        prev = current;
        current = following
        right--
    }

    if (con){
        con.next = prev;
    } else {
        head = prev;
    }

    tail.next = current

    return head;
};
