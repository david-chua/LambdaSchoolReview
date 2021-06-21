/**
Given a singly linked list group all odd node together followed by the event nodes.
Please note we are talking abou the node number and not the value in the nodes.


Example 1:

Input: 1 --> 2 --> 3 --> 4 -->? 5 --> Null
Output: 1 --> 3 --> 5-->2-->4 --> null

**/


// need 4 variables
/**
1. oddHead - does not change
2. evenHead - does not change
3. odd
4. even
**/

var oddEvenList = function(head){
  if (head === null){
    return null
  }

  let odd = head;
  let even = head.next;
  let evenHead = even;

  while(even !== null && even.next !== null){
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;
  return head; 
}
