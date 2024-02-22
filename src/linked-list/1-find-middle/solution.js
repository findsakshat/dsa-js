class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next
  }
}

// SOLUTION: FAST AND SLOW POINTER

function findMiddle(head = null) {
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}

// 1->2->3->4

function main() {
  const head = new ListNode(10, new ListNode(20, new ListNode(30, new ListNode(40))));
  console.log(findMiddle(head));
}

main();