
// BRUTE FORCE

function removeDuplicates(nums = []) {
  return new Set(nums);
}

function removeDuplicatesOptimal(nums = []) {
  let j = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[j] !== nums[i]) {
      nums[j + 1] = nums[i];
      j = j + 1;
    }
  }

  const result = nums.slice(0, j + 1);
  return result;
}

function main() {
  console.log(removeDuplicatesOptimal([1, 1, 2, 2, 2, 3, 3]));
  console.log(removeDuplicatesOptimal([2, 2, 2, 2, 2]));
  console.log(removeDuplicatesOptimal([1, 2, 2, 3, 4, 4, 4, 5, 5]));
}

main();