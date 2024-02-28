export { };

class ListNode {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    const newNode = new ListNode(data);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    // Make it circular
    this.tail.next = this.head;

    this.length = this.length + 1;
    return true;
  }

  unshift(data) {
    const newNode = new ListNode(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    // Make it circular
    this.tail.next = this.head;

    this.length = this.length + 1;
    return true;
  }

  print() {
    let listString = "";

    let current = this.head;

    do {
      listString += `${current.data} -> `;
      current = current.next;
    } while (current !== this.head)

    listString += `${this.head.data}[HEAD]`;

    return listString;
  }

  isCircular() {
    if (!this.head) return false;

    let fastPointer = this.head;
    let slowPointer = this.head;

    while (fastPointer && fastPointer.next) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;

      if (fastPointer === slowPointer) {
        return true;
      }
    }

    return false;
  }
}

function main() {
  const circularList = new CircularLinkedList();
  
  circularList.push(10);
  circularList.push(20);
  circularList.push(30);
  circularList.unshift(99);

  console.log(circularList.isCircular()); // true
  console.log(circularList.print());
}

main();