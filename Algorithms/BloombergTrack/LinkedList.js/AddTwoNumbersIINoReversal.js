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


var addTwoNumbers = function(l1, l2) {
    let n1 = 0;
    let n2 = 0;
    let curr1 = l1;
    let curr2 = l2;
    let head = null;


    // find length of both l1 and l2
    while(curr1 !== null){
        curr1 = curr1.next;
        n1++
    }

    while(curr2 !== null){
        curr2 = curr2.next;
        n2++
    }

    curr1 = l1;
    curr2 = l2;

    // Add both values without caring about the carry for now
    while( n1 > 0 && n2 > 0){
        let val = 0;
        if (n1 >= n2){
            val += curr1.val;
            curr1 = curr1.next;
            n1--
        }
        if (n1 < n2){
            val += curr2.val;
            curr2 = curr2.next;
            n2--
        }

        // This adds the values in reverse order
        let res = new ListNode(val);
        res.next = head;
        head = res;
    }

    curr1 = head;
    head = null;
    let carry = 0;

    // this portion takes care of the carry and evaluates the node and carry at each point and creates a new ListNode
    // The adition to the head node adds it in reverse to reverse the way we added the value orgiinally
    
    while (curr1 !== null){
        let val = (curr1.val + carry) % 10;
        carry = Math.floor((curr1.val + carry) / 10);

        res = new ListNode(val);
        res.next = head;
        head = res;

        curr1 = curr1.next;
    }

    if (carry === 1){
        res = new ListNode(1)
        res.next = head;
        head = res;
    }

    return head;
};
