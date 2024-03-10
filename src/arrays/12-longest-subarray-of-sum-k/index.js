function longestSubarrayOfSumKNaive(nums = [], target) {
  let maxLength = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum = sum + nums[j];
      if (sum === target) {
        maxLength = Math.max(maxLength, j - i + 1);
      }
    }
  }

  return maxLength;
}

function main() {
  console.log(longestSubarrayOfSumKNaive([1, 2, 3, 1, 1, 1, 1, 4, 2, 3], 3));
}

main();