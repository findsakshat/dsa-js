function maxConsecutiveOnes(nums = []) {
  let globalMax = 0;
  let localMax = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      localMax = localMax + 1;
    } else {
      localMax = 0;
    }
    globalMax = Math.max(localMax, globalMax);
  }

  return globalMax;
}

function main() {
  console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1, 0, 1, 1]));
}

main();