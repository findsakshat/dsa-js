function reverseArray(arr = []) {
  if (!arr.length) return [];

  let start = 0;
  let end = arr.length - 1;


  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start = start + 1;
    end = end - 1;
  }

  return arr;
}

function reverseArrayRecursive(arr = []) {
  function helper(arr, startIndex, endIndex) {
    if (startIndex >= endIndex) {
      return arr;
    }

    // swap
    const temp = arr[startIndex];
    arr[startIndex] = arr[endIndex];
    arr[endIndex] = temp;

    return helper(arr, startIndex + 1, endIndex - 1);
  }

  return helper(arr, 0, arr.length - 1);
}

function main() {
  // console.log(reverseArray([]));
  // console.log(reverseArray([1]));
  // console.log(reverseArray([1, 2]));
  // console.log(reverseArray([1, 2, 3]));

  // console.log(reverseArrayRecursive([]));
  // console.log(reverseArrayRecursive([1, 2]));
  // console.log(reverseArrayRecursive([1, 2, 3]));
}

main();