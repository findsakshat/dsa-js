
// NOTE: TLE on leetcode

function maxSum(nums = [], k = 0) {
  let i = 0;
  let j = 0;

  let result = 0;
  let temp = [];

  while (j < nums.length) {
    temp.push(nums[j]);

    if (j - i + 1 < k) {
      j = j + 1;
    } else if (j - i + 1 === k) {
      let distinct = areElementsDistinct(temp);
      if (distinct) {
        let sum = calculateSum(temp);
        result = Math.max(result, sum);
      }

      // remove caculations for "i"
      temp.shift();

      i = i + 1;
      j = j + 1;
    }
  }

  return result;
}

function areElementsDistinct(nums = []) {
  return new Set(nums).size === nums.length;
}

function calculateSum(nums = []) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}

function main() {
  console.log(maxSum([1, 5, 4, 2, 9, 9, 9], 3));
  console.log(maxSum([4, 4, 4], 3))
}

main();