function maxSumOfSizeKNaive(nums = [], k = 0) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < i + k && j < nums.length; j++) {
      sum = sum + nums[j];
    }
    result = Math.max(result, sum);
  }

  return result;
}

function maxSumOfSizeKOptimized(nums = [], k = 0) {
  let i = 0;
  let j = 0;

  let result = 0;
  let sum = 0;

  while (j < nums.length) {
    sum = sum + nums[j];

    if (j - i + 1 < k) {
      j = j + 1;
    } else if (j - i + 1 === k) {
      // get a result
      result = Math.max(result, sum);

      // remove previous calculation
      sum = sum - nums[i];
      
      // maintain the window size
      i = i + 1;
      j = j + 1;
    }
  }

  return result;
}

function main() {
  // nums = [100, 200, 300, 400] k = 2  
  // nums = [1, 4, 2, 10, 23, 3, 1, 0, 20] k = 4
  console.log(maxSumOfSizeKNaive([100, 200, 300, 400], 2));

  console.log(maxSumOfSizeKOptimized([100, 200, 300, 400], 2));
  console.log(maxSumOfSizeKOptimized([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
}

main();