function findNumberNaive(nums = []) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (map[num]) {
      map[num] = map[num] + 1;
    } else {
      map[num] = 1
    }
  }

  let keys = Object.keys(map);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (map[key] === 1) {
      return Number(key);
    }
  }
}

function main() {
  console.log(findNumberNaive([1, 1, 2, 3, 3, 4, 4]));
}

main();