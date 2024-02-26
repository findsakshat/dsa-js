export { };

class ListNode {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
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
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length = this.length + 1;

    return true;
  }

  unshift(data) {
    let newNode = new ListNode(data);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length = this.length + 1;

    return true;
  }

  pop() {
    if (!this.head || !this.tail) return undefined;
    
    if (this.head === this.tail) {
      const removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length = this.length - 1;
      return removedNode;
    }

    const removedNode = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    removedNode.prev = null;

    this.length = this.length - 1;

    return removedNode;
  }

  shift() {
    if (!this.head || !this.tail) return undefined;

    if (this.head === this.tail) {
      const removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length = this.length - 1;
      return removedNode;
    }

    const removedNode = this.head;

    this.head = this.head.next;
    this.head.prev = null;
    removedNode.next = null;
    this.length = this.length - 1;

    return removedNode;
  }
}

function main() {
  const list = new DoublyLinkedList();

  // list.push(10);
  // list.push(20);
  // list.push(30);

  list.unshift(10);
  list.unshift(20);
  list.unshift(30);


  console.log(list);

  console.log(list.pop());
  console.log(list.pop());
  console.log(list.pop());

  console.log(list)
}

main();