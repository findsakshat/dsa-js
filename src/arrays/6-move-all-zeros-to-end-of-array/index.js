
// OPTIMAL SOLUTION

// - keep 2 pointers start and end 
// - if nums[start] === 0 
//    - swap with the end
//    - start = start + 1 and end = end - 1
// - else, the number is greater than zero so no need to swap
//    - start = start + 1

function moveZerosToEnd(nums = []) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    if (nums[start] === 0) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;

      start = start + 1;
      end = end - 1;
    } else {
      start = start + 1;
    }
  }

  return nums;
}

function main() {
  console.log(moveZerosToEnd([1, 0, 2, 3, 2, 0, 0, 4, 5, 1]));
}

main();