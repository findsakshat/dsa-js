function printNums(n) {
  if (n == 1) {
    // Base case
    console.log(1);
    return;
  }

  printNums(n - 1); // Make recursive call with samller input
  console.log(n); // Print the number
}

function main() {
  printNums(10);
}

main();