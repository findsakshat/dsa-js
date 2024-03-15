// PROBLEM:
// https://leetcode.com/problems/majority-element/description/

// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times

function majorityElement(nums = []) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const elem = nums[i];
    if (map.has(elem)) {
      const currentValue = map.get(elem);
      map.set(elem, currentValue + 1)
    } else {
      map.set(elem, 1);
    }
  }

  const majorityCount = Math.floor(nums.length / 2);

  const keys = Array.from(map.keys());

  for (let i = 0; i < keys.length; i++) {
    if (map.get(keys[i]) > majorityCount) {
      return keys[i];
    }
  }

  return -1;
}


function majorityElementMooresAlgorithm(nums = []) {
  let elem = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      elem = nums[i];
      count = 1;
    } else if (nums[i] === elem) {
      count = count + 1;
    } else {
      count = count - 1;
    }
  }

  let actualCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === elem) {
      actualCount = actualCount + 1;
    }
  }

  if (actualCount > Math.floor(nums.length / 2)) {
    return elem;
  }

  return -1;
}

function main() {
  console.log(majorityElement([3, 2, 3]));
  console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

  console.log(majorityElementMooresAlgorithm([3, 2, 3]));
  console.log(majorityElementMooresAlgorithm([2, 2, 1, 1, 1, 2, 2]));
}

main();