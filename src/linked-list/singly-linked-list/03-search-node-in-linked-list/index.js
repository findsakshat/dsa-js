export { };

class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function findNode(head = null, target = 0) {
  if (!head) return -1;

  let current = head;
  let index = 0;

  while (current) {
    if (current.data === target) {
      return index;
    }

    current = current.next;
    index = index + 1;
  }

  return -1;
}

function main() {
  const list1 = new ListNode(1);
  const list2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));

  console.log(findNode(list1, 0)); // -1
  console.log(findNode(list1, 1)); // 0
  console.log(findNode(list2, 10)); // -1
  console.log(findNode(list2, 2)); // 1
  console.log(findNode(list2, 4)); // 3
}

main();
