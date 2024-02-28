function printNums(n) {
  if (n === 1) {
    // Base case
    console.log(1);
    return;
  }

  console.log(n); // Print the number
  printNums(n - 1); // Make recurive calls for smaller input
}

function main() {
  printNums(5);
}

main();