/**
Check if the linked list is palindrome.
**/



var isPalindrome = function(head){
  let fast = head;
  let slow = head;
  while(fast !== null & fast.next !== null){
    slow = slow.next;
    fast = fast.next.next;
  }

  fast = head;

  slow = reverse(slow);

  while (slow !== null){
    if (slow.val !== fast.val){
      return false
    }

    slow = slow.next
    fast = fast.next
  }

  return true; 
}


var reverse = function(head){
  let previous = null;
  let current = head;
  let following = head;

  while(current !== null){
    following = following.next
    current.next = previous;
    previous = current;
    current = following;
  }
  return previous;
}
