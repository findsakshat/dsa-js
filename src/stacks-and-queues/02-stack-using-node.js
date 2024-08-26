class StackNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class StackUsingNode {
  constructor(maxSize) {
    if (typeof maxSize !== "number" || !maxSize) {
      throw new Error("Please provide a valid stack size");
    }
    this.top = null;
    this.length = 0;
    this.maxSize = maxSize;
  }

  push(data) {
    if (this.length === this.maxSize) {
      throw new Error("Stack Overflow");
    }

    const newNode = new StackNode(data);

    if (!this.top) {
      this.top = newNode;
    } else {
      const temp = this.top;
      newNode.next = temp;
      this.top = newNode;
    }

    this.length = this.length + 1;
    return true;
  }

  pop() {
    if (!this.length) {
      throw new Error("Stack Underflow");
    }

    const temp = this.top;
    this.top = this.top.next;
    this.length = this.length - 1;

    temp.next = null;

    return temp;
  }

  peek() {
    return this.top;
  }

  isEmpty() {
    return this.length === 0;
  }

  isFull() {
    return this.length === this.maxSize;
  }
}

function main() {
  const stack = new StackUsingNode(3);
  stack.push(10);
  stack.push(20);
  stack.push(30);

  console.log(stack.peek());
  console.log(stack.pop());
  console.log(stack.peek());
}

main();
