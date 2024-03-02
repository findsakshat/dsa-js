class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function merge(list1, list2) {
  let newHead;

  if (list1.data < list2.data) {
    newHead = list1;
    list1 = list1.next;
  } else {
    newHead = list2;
    list2 = list2.next;
  }

  let current = newHead

  while (list1 && list2) {
    if (list1.data < list2.data) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }

    current = current.next;
  }

  while (list1) {
    current.next = list1;
    list1 = list1.next;
    current = current.next;
  }

  while (list2) {
    current.next = list2;
    list2 = list2.next;
    current = current.next;
  }

  return newHead;
}

function main() {
  const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
  const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

  console.log(merge(list1, list2));
}

main();
