// - store the first element in 'temp' variable
// - push all the items one step back 
// - replace the last item with 'temp' variable

function leftRotateByOne(nums = []) {
  const temp = nums[0];

  for (let i = 1; i < nums.length; i++) {
    nums[i - 1] = nums[i];
  }

  nums[nums.length - 1] = temp;

  return nums;
}

function leftRotateByK(nums = [], k = 0) {
  let optimizedRotationCount;

  if (k < nums.length) {
    optimizedRotationCount = k;
  } else {
    optimizedRotationCount = k % nums.length;
  }


  let count = 1;

  while (count <= k) {
    leftRotateByOne(nums);
    count = count + 1;
  }

  return nums;
}

function main() {
  console.log(leftRotateByOne([1, 2, 3]));

  console.log(leftRotateByK([1, 2, 3, 4, 5, 6, 7], 2));
  console.log(leftRotateByK([1, 2, 3, 4, 5, 6, 7], 8));
  console.log(leftRotateByK([1, 2, 3, 4, 5, 6, 7], 14));
}

main();