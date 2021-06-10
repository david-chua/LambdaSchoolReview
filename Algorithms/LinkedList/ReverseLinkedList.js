/**
Reversing a linked list

Write a function that takes in the head of a Singly Linked List, reverses in place and returns a new head.


Each LinkedList node has an integer (value) and a next which points to the next node. The head will never be None or null.

1 --> 2 --> 3 --> 4 --> 5

Output

5 --> 4 --> 3 --> 2 --> 1

In terms of reversing, we need to keep track of 3 values.
Previous, Current, and Following.
This is because singly linked list only has a next node. It is unable to move backwards without a reference.

Process:
1.

p - represents previous
c - represents current
f - represents following

null    5 --> 4 --> 3 --> 2 --> 1 --> null (we want to end when we reach null)

p      c,f


2.
In step 2,
we set following as the next value of following. This allows us to have a references
for the next value we need to reverse in the next interation.

null   5 --> 4 ---> 3 --> 2 --> 1 --> null

p     c     f

3.
In step 3, we set current.next to be previous.
We then move previous into current.



null <-- 5   4 --> 3 --> 2 --> 1 --> null

        p,c  f


4.
Once we move current into where following is, notice, that we start over our step 1.
We continue this process until current is null.


null<--5   4 --> 3 --> 2 --> 1 --> null
      p    c,f

**/

function ListNode(val,next){
  this.val = (val === undefined? 0: val)
  this.next = (val === undefined? null: next)
}


var reverseList = function(head){
  let previous = null;
  let current = head;
  let following = head;

  while(current){
    following = following.next // This references the next value we want to store for next iteration
    current.next = previous
    previous = current
    current = following
  }

  return previous // current node.
}


let one = new ListNode(1)
let two = new ListNode(2)
let three = new ListNode(3)
let four = new ListNode(4)
let five = new ListNode(5)

one.next = two
two.next = three
three.next = four
four.next = five
five.next = null


console.log(reverseList(one))


console.log(five.next)
console.log(four.next)
console.log(three.next)
console.log(two.next)
console.log(one.next)
