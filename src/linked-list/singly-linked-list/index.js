class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // unshift
  unshift(data) {
    const newNode = new ListNode(data);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode
    }

    this.length = this.length + 1;
    return true;
  }

  // push
  push(data) {
    const newNode = new ListNode(data);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
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
      this.length = 0;
      return  removedNode;
    }

    let current = this.head;
    let previous = null;

    while (current.next) {
      previous = current;
      current = current.next;
    }

    previous.next = null;
    this.tail = previous;

    this.length = this.length - 1;

    return current;
  }

  shift() {
    if (!this.head  || !this.tail) return undefined;

    if (this.head === this.tail) {
      const removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length = this.length - 1;
      return removedNode;
    }

    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;

    this.length = this.length - 1;

    return temp;
  }
}


function main() {
  const list = new LinkedList();

  list.push(10);
  list.push(20);
  list.push(30);

  list.unshift(100);
  list.unshift(200);

  console.log("POPPED", list.pop());
  console.log("POPPED", list.pop());

  console.log("SHIFT:", list.shift());

  console.log(list);
}

main();