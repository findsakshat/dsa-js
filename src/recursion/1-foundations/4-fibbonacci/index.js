function fibbonacci(n) {
  if (n <= 1) {
    return 1;
  }

  return fibbonacci(n - 1) + fibbonacci(n - 2);
}

function main() {
  console.log(fibbonacci(4));
  console.log(fibbonacci(5));
}

main();