/**
Merge two sorted linked list and return it as sorted. The list should be made by splicing together the nodes of the first two lists.

Example 1:

Input:
l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
l1 = [], l2 = []
Output: []

Example 3:

Input:
l1 = [], l2= [0]
Ouptut: [0]

/** solution
1. create a dummy node which will act as a fake head.
2. add a second pointer to keep a head pointer since we'll be moving dummy around the two lists.
3. while loop where both list are not null.
4. inside while loop check if l1 is less than l2's value. if it is, dummy.next = l1 and then move the l1 value to the next value. if it is greater than l2, change dummy.next to be l2's value and move l2 to the next value. At the end, move dummy to point to its next value so you can keep the linkedlist moving.

5. If while loop breaks and l1 is still not null, move the next value to the current l1 value. If l2 is not null, move the next value to the current l2 value.
6. return head's next value, which is pointing to the first value used between l1 and l2. 

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
var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode(-1)
    let head = dummy;

    while (l1 !== null && l2 !== null){
        if (l1.val <= l2.val){
            dummy.next = l1;
            l1 = l1.next;

        } else {
            dummy.next = l2;
            l2 = l2.next
        }
        dummy = dummy.next;
    }

    if (l1 !== null){
        dummy.next = l1
    } else {
        dummy.next = l2
    }

    return head.next;
};
