function mergeSort(nums = []) {
  if (nums.length <= 1) {
    return nums;
  }

  const mid = Math.floor(nums.length / 2);
  const leftHalf = nums.slice(0, mid);
  const rightHalf = nums.slice(mid);

  // Recursive call on left and right halves
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    const itemLeft = left[i];
    const itemRight = right[j];

    if (itemLeft < itemRight) {
      result.push(itemLeft);
      i = i + 1;
      k = k + 1;
    } else {
      result.push(itemRight)
      j = j + 1;
      k = k + 1;
    }
  }

  // Remaining items

  while (i < left.length) {
    result[k] = left[i];
    i = i + 1;
    k = k + 1;
  }

  while (j < right.length) {
    result[k] = right[j];
    j = j + 1;
    k = k + 1;
  }

  return result;
}

function main() {
  console.log(mergeSort([5, 4, 3, 2, 1]));
  console.log(mergeSort([]));
  console.log(mergeSort([5, 2, 8, 2, 1, 5]));
  console.log(mergeSort([-3, 8, -5, 2, -1]));

  const randomNums = Array.from({ length: 20 }, () => Math.floor(Math.random() * 1000));
  console.log(mergeSort(randomNums));
}


main();