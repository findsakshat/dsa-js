function moveNegatives(arr = []) {
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    const elem1 = arr[low];
    const elem2 = arr[high];

    if (elem1 < 0) {
      low = low + 1;
      continue;
    }

    if (elem2 > 0) {
      high = high - 1;
      continue;
    }

    if (elem1 > 0 && elem2 < 0) {
      // swap;
      const temp = arr[low];
      arr[low] = arr[high];
      arr[high] = temp;
      low = low + 1;
      high = high - 1;
    }
  }

  return arr;
}

function main() { 
  console.log(moveNegatives([-12, 11, -13, -5, 6, -7, 5, -3, -6]));
  console.log(moveNegatives([-1, 2, -3, 4, 5, 6, -7, 8, 9]));
  console.log(moveNegatives([1, 2,  -4, -5, 2, -7, 3, 2, -6, -8, -9, 3, 2, 1]));
}

main()