export { };

class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function removeHead(head) {
  if (!head) return null;

  let temp = head;
  head = head.next;
  temp.next = null;

  return temp;
}

function main() {
  const list = new ListNode(10, new ListNode(20, new ListNode(30)));

  console.log(removeHead(null));
  console.log(removeHead(list));
}

main();
