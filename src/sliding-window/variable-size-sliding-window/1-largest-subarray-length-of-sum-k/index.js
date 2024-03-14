function subarrayLengthOfSumK(nums = [], k = 0) {
  let i = 0;
  let j = 0;

  let result  = 0;
  let sum = 0;

  while (j < nums.length) {
    sum = sum + nums[j];

    if (sum < k) {
      // do nothing just increment "j"
      j = j + 1;
    } else if (sum === k) {
      // possible candidate for an answer
      result = Math.max(result, j - i + 1);
      j = j + 1;
    } else if (sum > k) {
      // remove older calculations so that sum becomes === k
      while (sum > k) {
        sum = sum - nums[i];
        i = i + 1;
      }
      j = j + 1;
    }
  }

  return result;
}

function main() {
  console.log(subarrayLengthOfSumK([4, 1, 1, 1, 2, 3, 5], 5));
}

main();