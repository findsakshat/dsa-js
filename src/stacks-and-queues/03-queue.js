class Queue {
  constructor() {
    this.collection = [];
  }

  enqueue(data) {
    this.collection.unshift(data);
    return true;
  }

  dequeue() {
    const removedItem = this.collection.pop();
    return removedItem;
  }

  peek() {
    return this.collection[this.collection.length - 1];
  }
}

function main() {
  const queue = new Queue();
  console.log(queue.peek()); // undefined
  queue.enqueue(10); // [10]
  queue.enqueue(20); // [20, 10]
  console.log(queue.peek()); // 10
  queue.enqueue(30); // [30, 20, 10]
  queue.enqueue(40); // [40, 30, 20, 10]
  console.log(queue.peek()); // 10
}

main();
