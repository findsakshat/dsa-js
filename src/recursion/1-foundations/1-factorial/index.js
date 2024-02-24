function factorial(n) {
  if (n === 0) return 1;

  const smallerProblem = factorial(n - 1);
  
  return n * smallerProblem;
}

function main() {
  console.log(factorial(3));
  console.log(factorial(4));
  console.log(factorial(1));
  console.log(factorial(0));
};

main();

