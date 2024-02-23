function isSorted(nums = [], index = 0) {
  if (!nums.length) return true;
  if (index === nums.length) return true;

  if (nums[index] > nums[index + 1]) {
    return false;
  }

  return isSorted(nums, index + 1);
}

function main() {
  console.log(isSorted([1, 2]));
  console.log(isSorted([1, 2, 3]));
  console.log(isSorted([1, 21, 3]));
  console.log(isSorted([]));
}

main();

