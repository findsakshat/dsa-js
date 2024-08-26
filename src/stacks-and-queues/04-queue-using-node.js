class QueueNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class QueueUsingNode {
  constructor() {
    this.length = 0;
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const newNode = new QueueNode(data);

    if (!this.length) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length = this.length + 1;
    return true;
  }

  dequeue() {
    if (!this.length) return undefined;

    let currentNode = this.first;
    let prevNode = null;

    while (currentNode.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    this.last = prevNode;
    this.last.next = null;
    this.length = this.length - 1;
    return currentNode;
  }
}

function main() {
  const queue = new QueueUsingNode();

  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  queue.enqueue(40);

  console.log(queue);

  queue.dequeue();
  queue.dequeue();

  console.log(queue);
}

main();
