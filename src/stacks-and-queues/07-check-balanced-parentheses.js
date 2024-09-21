/*
  LINK
  - https://leetcode.com/problems/valid-parentheses/description/

  PROBLEM STATEMENT:
    - Open brackets must be closed by the same type of brackets
    - Open brackets must be closed in the correct order
    - Every close bracket has a corresponding open bracket of the same type
*/

function checkBalancedParantheses(expression = "") {
  let stack = [];

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    // 1. If there is an opening bracket push it onto the stack;
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
      continue;
    }

    // 2. It is not an opening parentheses, we need to check for balance

    // A. First lets ensure that the stack is not empty till now
    if (!stack.length || stack.length === 0) return false;

    const poppedItem = stack.pop();

    // B. Check for matching opening and closing brackets
    if (char === ")" && poppedItem !== "(") {
      return false;
    } else if (char === "}" && poppedItem !== "{") {
      return false;
    } else if (char === "]" && poppedItem !== "[") {
      return false;
    }
  }

  return stack.length === 0;
}

function main() {
  console.log(checkBalancedParantheses("([{}])")); // true
  console.log(checkBalancedParantheses("[()]{}{[()()]()}")); // true
  console.log(checkBalancedParantheses("[(])")); // false
}

main();
