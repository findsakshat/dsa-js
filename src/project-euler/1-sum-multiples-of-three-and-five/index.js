function sumMultiplesOfThreeAndFive(number = 10) {
  let sum = 0;

  for (let i = 0; i < number; i++) {
    const isMultipleOfThree = i % 3 === 0;
    const isMultipleOfFive = i % 5 === 0;

    if (isMultipleOfThree || isMultipleOfFive) {
      sum = sum + i;
    }
  }

  return sum;
}

function main() {
  console.log(sumMultiplesOfThreeAndFive(49)); // 543
  console.log(sumMultiplesOfThreeAndFive(1000));
}

main();


