function isSorted(nums = []) {
  for (let i = 0; i < nums.length; i++) {
    if (i + 1 >= nums.length) {
      return true;
    }

    const prev = nums[i];
    const next = nums[i + 1];

    if (next < prev) {
      return false;
    }
    
  }

  return true;
}

function main() {
  console.log(isSorted([1, 2, 2, 3, 3, 4]));
  console.log(isSorted([1, 2, 1, 3, 4]));
}

main();
