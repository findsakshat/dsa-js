export class Stack {
  constructor(maxSize) {
    if (typeof maxSize !== "number" || !maxSize) {
      throw new Error("Please provide a valid stack size");
    }
    this.maxSize = maxSize;
    this.collection = [];
  }

  isEmpty() {
    if (this.collection.length === 0) {
      return true;
    }
    return false;
  }

  isFull() {
    if (this.collection.length === this.maxSize) {
      return true;
    }
    return false;
  }

  push(data) {
    if (this.isFull()) {
      throw new Error("Stack Overflow");
    }
    this.collection.push(data);
    return true;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack Underflow");
    }

    return this.collection.pop();
  }

  peek() {
    return this.collection[this.collection.length - 1];
  }

  length() {
    return this.collection.length;
  }
}

function main() {
  const myStack = new Stack(3);

  myStack.push(10); // [10]
  myStack.push(20); // [10, 20]
  console.log(myStack.peek()); // 20
  myStack.push(30); // [10, 20, 30]
  console.log(myStack.peek()); // 30
  myStack.pop(); // 30
  console.log(myStack.peek()); // 20
  myStack.push(100); // [10, 20, 100]
  console.log(myStack.isEmpty()); // false
  console.log(myStack.isFull()); // true
  console.log(myStack.peek()); // 100
}

// main();
