// PROBLEM:
// https://leetcode.com/problems/rearrange-array-elements-by-sign/description/

// BRUTE FORCE

function rearrangeBrute(nums = []) {
  const positives = [];
  const negatives = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      negatives.push(nums[i]);
    } else {
      positives.push(nums[i]);
    }
  }

  const result = [];
  const length = positives.length + negatives.length;

  for (let i = 0; i < length; i++) {
    if (i % 2 === 0) {
      // even index will be filled by positive
      const value = positives.shift();
      result[i] = value;
    } else {
      // odd index will filled by negative
      const value = negatives.shift();
      result[i] = value;
    }
  }

  return result;
}

// BETTER SOLUTION

function rearrangeBetter(nums = []) {
  const positives = [];
  const negatives = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      negatives.push(nums[i]);
    } else {
      positives.push(nums[i]);
    }
  }

  // All the positives will take even indexes (2 * i) in the result array
  // All the negatives will take odd indexes (2 * i + 1) in the result array

  const result = [];

  for (let i = 0; i < nums.length / 2; i++) {
    const evenIndex = 2 * i;
    const oddIndex = 2 * i + 1;

    result[evenIndex] = positives[i];
    result[oddIndex] = negatives[i];
  }

  return result;
}

// OPTIMAL SOLUTION

// We cannot optimize on the space (as we need a result array)
// But we can optimize on the pass we can do it in one pass 

function rearrangeOptimal(nums = []) {
  let positiveIndex = 0;
  let negativeIndex = 1;

  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      // negative element
      result[negativeIndex] = nums[i];
      negativeIndex = negativeIndex + 2; // move to next negative index
    } else {
      // positive element
      result[positiveIndex] = nums[i];
      positiveIndex = positiveIndex + 2; // move to next positive index
    }
  }

  return result;
} 

function main() {
  console.log(rearrangeBrute([3, 1, -2, -5, 2, -4]));
  console.log(rearrangeBetter([3, 1, -2, -5, 2, -4]));

  console.log(rearrangeOptimal([-1, 1]));
  console.log(rearrangeOptimal([3, 1, -2, -5, 2, -4]));
}

main();
