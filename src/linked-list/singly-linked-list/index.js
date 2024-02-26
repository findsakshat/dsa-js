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

  // Insert a node at the beginnning
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

  // Insert a node to the end
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

  // Remove a node from the end
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

  // Remove a node from the beginnning
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

  // Return node at a particular index 'index'
  get(index) {
    if (index < 0 || index >= this.length) throw new Error('Index provided is out of range');
    if (index === 0) return this.head;

    let currentIndex = 0;
    let current = this.head;

    while (current && currentIndex !== index) {
      current = current.next;
      currentIndex = currentIndex + 1;
    }

    return current;
  }

  // Print the linked list
  print() {
    let listString = "";

    let current = this.head;

    while (current) {
      listString += `${current.data} -> `;
      current = current.next;
    }

    listString += "NULL";

    return listString;
  }
}


function main() {
  const list = new LinkedList();

  list.push(10);
  list.push(20);
  list.push(30);

  list.unshift(100);
  list.unshift(200);

  console.log(list.get(0));
  console.log(list.get(4));

  console.log(list.print());
}

main();