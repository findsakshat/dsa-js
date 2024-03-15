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

// OPTIMAL SOLUTION

// using 2 pointer approach

function unionOfTwoSortedArraysOptimal(nums1 = [], nums2 = []) {
  const union = [];

  let n = nums1.length;
  let m = nums2.length;

  let i = 0;
  let j = 0;

  while (i < n && j < m) {
    let lastElement = union.length > 0 ? union[union.length - 1] : undefined;

    if (nums1[i] <= nums2[j]) {
      if (nums1[i] !== lastElement) {
        union.push(nums1[i]);
      }
      i = i + 1;
    } else {
      if (nums2[j] !== lastElement) {
        union.push(nums2[j]);
      }
      j = j + 1;
    }
  }

  while (i < n) {
    let lastElement = union.length > 0 ? union[union.length - 1] : undefined;

    if (nums1[i] !== lastElement) {
      union.push(nums1[i]);
    }
    i = i + 1;
  }

  while (j < m) {
    let lastElement = union.length > 0 ? union[union.length - 1] : undefined;

    if (nums2[j] !== lastElement) {
      union.push(nums2[j]);
    }
    j = j + 1;
  }

  return union;
}

function main() {
  console.log(unionOfTwoSortedArraysNaive([1, 1, 2, 3, 4, 5], [2, 3, 4, 4, 5, 6]));

  console.log(unionOfTwoSortedArraysOptimal([1, 1, 2, 3, 4, 5], [2, 3, 4, 4, 5, 6]));
  console.log(unionOfTwoSortedArraysOptimal([1, 1, 2, 3, 4, 5, 7, 8], [2, 3, 4, 4, 5, 6]));
}

main();