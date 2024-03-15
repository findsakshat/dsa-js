function findMinMax(arr = []) {
  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;

  for (let i = 0; i < arr.length; i++) {
    min = Math.min(arr[i], min);
    max = Math.max(arr[i], max);
  }

  return [max, min];
}

function main() {
  console.log(findMinMax([4, 2, 5, 1, 6, 3]));
  console.log(findMinMax([1, 5, 7, 2, 9, 3]));
}

main();