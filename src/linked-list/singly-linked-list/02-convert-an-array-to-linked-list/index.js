export { };

class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function convertToLinkedList(arr = []) {
  if (!arr || !arr.length) return null;

  let head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    const node = new ListNode(arr[i]);
    current.next = node;
    current = current.next;
  }

  return head;
}

function main() {
  console.log(convertToLinkedList([1]));
  console.log(convertToLinkedList([1, 2, 3]));
}

main();