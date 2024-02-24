function bubbleSort(nums = []) {
  function helper(nums, index, pass = 0) {
    if (pass === nums.length) {
      return nums;
    }

    if (index < nums.length) {
      // swap
      if (nums[index] > nums[index + 1]) {
        let temp = nums[index];
        nums[index] = nums[index + 1];
        nums[index + 1] = temp;
      }

      return helper(nums, index + 1, pass);
    } else {
      return helper(nums, 0, pass + 1);
    }
  }

  return helper(nums, 0, 0);
}

function main() {
  console.log(bubbleSort([4, 3, 2, 1]));
  console.log(bubbleSort([]));
  console.log(bubbleSort([10]));
  console.log(bubbleSort([10000, 5000, 20000, 15000]));
  console.log(bubbleSort([-3, 7, -2, 0, -8, 4]));
  console.log(bubbleSort([3.5, 1.2, 2.8, 0.7]));
  console.log(bubbleSort([3, 2, 3, 1, 2, 1]));
}

main();