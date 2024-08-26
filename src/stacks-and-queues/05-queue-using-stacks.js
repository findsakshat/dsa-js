/*
  LINK:
  - https://leetcode.com/problems/implement-queue-using-stacks/

  PROBLEM STATEMENT:
  - Implement Queue using Stacks
*/

import { Stack } from "./01-stack.js";

class QueueUsingStacks {
  constructor(maxSize) {
    if (typeof maxSize !== "number" || !maxSize) {
      throw new Error("Please provide a valid stack size");
    }
    this.stack1 = new Stack(maxSize);
    this.stack2 = new Stack(maxSize);
  }

  enqueue(data) {
    this.stack1.push(data);
    return true;
  }

  dequeue() {
    while (this.stack1.length()) {
      const item = this.stack1.pop();
      this.stack2.push(item);
    }

    const removedItem = this.stack2.pop();

    while (this.stack2.length()) {
      const item = this.stack2.pop();
      this.stack1.push(item);
    }

    return removedItem;
  }

  peek() {
    while (this.stack1.length()) {
      const item = this.stack1.pop();
      this.stack2.push(item);
    }

    const peekedItem = this.stack2.peek();

    while (this.stack2.length()) {
      const item = this.stack2.pop();
      this.stack1.push(item);
    }

    return peekedItem;
  }
}

function main() {
  const queue = new QueueUsingStacks(6);

  queue.enqueue(10); // [10]
  queue.enqueue(20); // [20, 10]
  queue.enqueue(30); // [30, 20, 10]
  queue.enqueue(40); // [40, 30, 20, 10]

  console.log(queue.dequeue()); // 10
  console.log(queue.dequeue()); // 20
  console.log(queue.peek()); // 30
  console.log(queue.peek()); // 30
}

main();
