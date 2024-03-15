// BRUTE FORCE SOLUTION:
// - sort the array
// - loop from behind and find the element which is not equal to the largest

function findSecondLargest(nums = []) {
  // sort the array
  nums.sort((a, b) => a - b);

  const largest = nums[nums.length - 1];

  // check for second largest
  let secondLargest = -1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] !== largest) {
      secondLargest = nums[i];
      break;
    }
  }

  return secondLargest;
}

// OPTIMAL SOLUTION:
// - maintain 2 variables 'largest' and 'secondLargest'
// - if nums[i] > largest
//    - then update the largest and second largest will now become the previous largest
// - else 
//    - we need to check if the current element is greater than secondLargest then we need to update

function findSecondLargestOptimal(nums = []) {
  let largest = nums[0];
  let secondLargest = Number.MIN_VALUE;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
      secondLargest = largest;
      largest = nums[i];
    } else if (nums[i] !== largest && nums[i] > secondLargest) { // important check
      secondLargest = nums[i];
    }
  }

  return secondLargest;
}

function main() {
  console.log(findSecondLargest([1, 2, 4, 7, 7, 5]));
  console.log(findSecondLargestOptimal([1, 2, 4, 7, 7, 5]));
}

main();