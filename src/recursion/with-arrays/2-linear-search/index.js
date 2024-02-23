function linearSearch(nums = [], target = 0, index = 0) {
  if (!nums.length) return -1;
  if (nums.length === index) return -1;

  if (nums[index] === target) {
    return index;
  }

  return linearSearch(nums, target, index + 1);
}

function multipleLinearSearch(nums = [], target, index = 0) {
  function helper(nums, target, index, result = []) {
    if (!nums.length) return [];
    if (nums.length === index) return result;

    if (nums[index] === target) {
      result.push(index);
      return helper(nums, target, index + 1, result);
    } else {
      return helper(nums, target, index + 1, result);
    }
  }

  return helper(nums, target, index);
}

function main() {
  console.log(linearSearch([1, 2, 3], 3)); // 2
  console.log(linearSearch([1, 2, 3], 4)); // -1
  console.log(linearSearch([])); // -1

  console.log(multipleLinearSearch([1, 2, 2, 3], 2)); // [1, 2]
  console.log(multipleLinearSearch([1, 2, 2, 3], 3)); // [3]
  console.log(multipleLinearSearch([1, 2, 3, 4], 5)); // []
  console.log(multipleLinearSearch([], 4)); // []
}

main();