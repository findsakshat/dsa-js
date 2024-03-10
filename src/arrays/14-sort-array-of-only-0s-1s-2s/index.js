// NAIVE SOLUTION

// use any of the sorting algorithm like merge sort

function sortNaive() {

}

// BETTER SOLUTION

// maintain a "count" for 0s, 1s and 2s
// create new elements and add "count" number of 0s, 1s and 2s to it

function sortBetter() {}


// OPTIMAL SOLUTION : DUTCH NATIONAL FLAG ALGORITHM

// algo uses 3 pointers -- low, mid and high
// algo revolves around 3 rules
// - everything from [0, low - 1] will be 0s (extreme left)
// - everything from [low, mid - 1] will be 1s (middle)
// - everything from [high + 1, n - 1] will be 2s (extreme right)

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