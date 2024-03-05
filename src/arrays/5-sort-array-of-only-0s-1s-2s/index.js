function sort(arr = []) {
  let low = 0;
  let high = arr.length - 1;

  let mid = 0;

  while (mid <= high) {
    const middle = arr[mid];

    if (middle === 0) {
      let temp = arr[low];
      arr[low] = arr[mid];
      arr[mid] = temp;
      low = low + 1;
      mid = mid + 1;
    } else if (mid === 1) {
      mid = mid + 1;
    } else {
      let temp = arr[high];
      arr[high] = arr[mid];
      arr[mid] = temp;
      high =  high - 1;
    }

  }

  return arr;
}

function main() {
  console.log(sort([0, 1, 2, 0, 1, 2]));
}

main();