// PROBLEM:
// https://leetcode.com/problems/missing-number/description/

// BRITE FORCE SOLUTION

// Linear Search

function missingNumberNaive(nums = []) {
  let n = nums.length;

  for (let i = 0; i <= n; i++) {
    if (nums.indexOf(i) === -1) {
      return i;
    }
  }

  return false;
}

// BETTER SOLUTION

// Use a hash map

function missingNumberBetter(nums = []) {
  let n = nums.length;


  let map = {};

  for (let i = 0; i <= n; i++) {
    map[i] = false;
  }

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = true;
  }

  const keys = Object.keys(map);

  for (let i = 0; i < keys.length; i++) {
    if (map[keys[i]] === false) return Number(keys[i]);
  }

  return false;
}

// OPTIMAL SOLUTION

// Calculate the sum of n numbers and store in sum1
// Calculate the sum of array nums and store in sum2
// Return sum1 - sum2

function missingNumberOptimal(nums = []) {
}

function main() {
  console.log(missingNumberNaive([3, 0, 1]));
  console.log(missingNumberNaive([0, 1]));

  console.log(missingNumberBetter([3, 0, 1]));
  console.log(missingNumberBetter([0, 1]));
}

main()