function reverseString(str = "") {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    stack.push(char);
  }

  console.log(stack);

  let reversed = "";

  while (stack.length) {
    const char = stack.pop();
    console.log(char);
    reversed = reversed + char;
  }

  return reversed;
}

function main() {
  console.log(reverseString("hello"));
}

main();
