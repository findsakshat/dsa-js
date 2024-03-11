function firstNegativeInEveryWindowSizeK(nums = [], windowSize = 0) {
  let i = 0;
  let j = 0;

  const result = [];
  const temp = [];

  while (j < nums.length) {
    temp.push(nums[j]);

    if (j - i + 1 < windowSize) {
      j = j + 1;
    } else if (j - i + 1 === windowSize) {
      // get first negative from "temp" and add it to "result"
      const value = firstNegative(temp);
      result.push(value);

      // remove the previous caculation for "i"
      temp.shift();

      // move the window ahead
      i = i + 1;
      j = j + 1;
    }
  }

  return result;
}

function firstNegative(nums = []) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      return nums[i];
    }
  }

  return 0;
}

function main() {

  console.log(firstNegativeInEveryWindowSizeK([-8, 2, 3, -6, 10], 2));
}

main();