/**
Flatten a multi-level singly linked list

Given a linked list where in addition to the next pointer, each node has
a child pointer, which may or may not point to a separate list.
These child lists may have one or more children of their own, and so on,
to produce a multilevel data structure, as shown in below figure.
You are given the head of the first level of the list. Flatten the list
so that all the nodes appear in a single-level linked list. You need to
flatten the list in way that all nodes at first level should come first,
then nodes of second level, and so on.
Each node is a C struct with the following definition.


function ListNode(val, next, child){
  this.val = (val === undefined? 0: val)
  this.next = (next == undefined ? null: next)
  this.child = (child === undefined ? null : next)
}

**/

/**
Steps;
1) Take "cur" pointer, which will point to head of the first level of the list
2) Take "tail" pointer, which will point to end of the first level of the list
3) Repeat the below procedure while "curr" is not NULL.
    I) if current node has a child then
    a) append this new child list to the "tail"
        tail->next = cur->child
    b) find the last node of new child list and update "tail"
        tmp = cur->child;
        while (tmp->next != NULL)
            tmp = tmp->next;
        tail = tmp;
    II) move to the next node. i.e. cur = cur->next
**/

// breath first algorithm
let flattenList = function (head){
  // if head is empty
  if (!head){
    return;
  }

  // find tail node of first level
  let temp = head;
  while (temp.next !== null){
    temp = temp.next
  }

  currNode = head;

  // Traverse through entire node of first level linked list until we reach
  // the tail node (temp)
  while(currNode != temp){

    if (currNode.child){
      temp.next = currNode.child

      childTemp = currNode.child;
      while (childTemp.next){
        childTemp = childTemp.next;
      }
      temp = childTemp // new end of the list
    }

    currNode = currNode.next;

  }

  // optional - if you need to see the entire list by console.logging 
  let start = head;
  while (start){
    console.log(start.val)
    start = start.next;
  }

  return head;

}

function ListNode(val, next, child){
  this.val = (val === undefined? 0: val)
  this.next = (next === undefined ? null: next)
  this.child = (child === undefined ? null : next)
}

child13 = new ListNode(16)
child13.child = new ListNode(3)

head1 = new ListNode(4)
head1.next = new ListNode(20)
head1.next.child = new ListNode(2)
head1.next.next = new ListNode(13)
head1.next.next.child = child13


child9 = new ListNode(19)
child9.next = new ListNode(15)


child17 = new ListNode(9)
child17.next = new ListNode(8)
child17.child = child9

head2 = new ListNode(17)
head2.next = new ListNode(6)
head2.child = child17


head = new ListNode(10)
head.child = head1
head.next = new ListNode(5)
head.next.next = new ListNode(12)
head.next.next.next = new ListNode(7)
head.next.next.next.child = head2
head.next.next.next.next = new ListNode(11)


console.log(flattenList(head))
