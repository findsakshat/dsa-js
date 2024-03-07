// BRUTE FORCE 

// using a set

function unionOfTwoSortedArraysNaive(nums1 = [], nums2 = []) {
  const set = new Set();

  for (let i = 0; i < nums1.length; i++) {
    set.add(nums1[i]);
  }

  for (let i = 0; i < nums2.length; i++) {
    set.add(nums2[i]);
  }

  return Array.from(set);
}

function main() {
  console.log(unionOfTwoSortedArraysNaive([1, 1, 2, 3, 4, 5], [2, 3, 4, 4, 5, 6]));

}

main();