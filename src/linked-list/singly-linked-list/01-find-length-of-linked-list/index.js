export { };

class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function findLength(head) {
  if (!head) return 0;

  let current = head;
  let count = 1;
  
  while (current.next) {
    count = count + 1;
    current = current.next;
  }

  return count;
}

function main() {
  const list = new ListNode(10, new ListNode(20, new ListNode(30, new ListNode(40))));
  console.log(findLength(list));
}

main();
