/*
  LINK:
  - https://leetcode.com/problems/baseball-game/description/
*/

function calculatePoints(operations = []) {
  const stack = [];

  for (let i = 0; i < operations.length; i++) {
    const op = operations[i];

    if (op === "C") {
      stack.pop();
    } else if (op === "D") {
      const first = stack[stack.length - 1];
      if (first) {
        stack.push(2 * first);
      }
    } else if (op === "+") {
      const first = stack[stack.length - 1];
      const second = stack[stack.length - 2];
      if (first && second) {
        stack.push(first + second);
      }
    } else {
      const value = Number(op);
      stack.push(value);
    }
  }

  let sum = 0;

  for (let i = 0; i < stack.length; i++) {
    sum += stack[i];
  }

  return sum;
}

function main() {
  console.log(calculatePoints(["5","2","C","D","+"]));
  console.log(calculatePoints(["5","-2","4","C","D","9","+","+"]))
}

main();