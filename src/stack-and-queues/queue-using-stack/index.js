class QueueUsingStacks {
  stack1;
  stack2;

  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  } 

  insert(item) {
    this.stack1.push(item);
  }

  remove() {
    // 1. Empty first stack into second

    const length1 = this.stack1.length;
    
    for (let i = 0; i < length1; i++) {
      const data = this.stack1.pop();
      this.stack2.push(data);
    }

    // 2. Remove the top of the second stack and store it in "temp"
    const temp = this.stack2.pop();

    // 3. Empty second into first
    const length2 = this.stack2.length;

    for (let i = 0; i < length2; i++) {
      const data = this.stack2.pop();
      this.stack1.push(data);
    }

    // 4. Return "temp"

    return temp;
  }

  peek() {
    // 1. Empty first stack into second

    const length1 = this.stack1.length;
    
    for (let i = 0; i < length1; i++) {
      const data = this.stack1.pop();
      this.stack2.push(data);
    }

    // 2. Check the value top of the second stack and store it in "temp"
    const temp = this.stack2[this.stack2.length - 1];

    // 3. Empty second into first
    const length2 = this.stack2.length;

    for (let i = 0; i < length2; i++) {
      const data = this.stack2.pop();
      this.stack1.push(data);
    }

    // 4. Return "temp"
    return temp;
  }
}

function main() {
  const queue = new QueueUsingStacks();

  queue.insert(10);
  queue.insert(20);
  queue.insert(30);
  queue.insert(40);

  console.log(queue.remove());
  console.log(queue.remove());

  console.log(queue.peek());
  console.log(queue.peek());
}

main();




