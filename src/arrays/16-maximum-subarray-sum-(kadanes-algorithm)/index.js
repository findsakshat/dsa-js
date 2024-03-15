function maxSubarraySumNaive(nums = []) {
  let maxSum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      sum = sum + nums[j];
      maxSum = Math.max(maxSum, sum);
    }
  }

  return maxSum;
}

function maxSubarraySumKadanesAlgorithm(nums = []){
  let globalSum = Number.MIN_SAFE_INTEGER;
  let localSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    localSum = localSum + nums[i];
    
    if (localSum > globalSum) {
      globalSum = localSum;
    }

    // If localSum is less than 0, reset it to 0 as it will only hamper my sum in the future
    if (localSum < 0) {
      localSum = 0;
    }
  }

  return globalSum;
}

function main() {
  console.log(maxSubarraySumNaive([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
  console.log(maxSubarraySumNaive([-2, -3, 4, -1, -2, 1, 5, -3]));

  console.log(maxSubarraySumKadanesAlgorithm([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
  console.log(maxSubarraySumKadanesAlgorithm([-2, -3, 4, -1, -2, 1, 5, -3]));
}

main();