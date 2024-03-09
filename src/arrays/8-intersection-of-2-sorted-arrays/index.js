
// OPTIMAL SOLUTION

/*
  - have 2 pointers i and j
  - If the ith and jth elements match, include one of them in the answer and move both the pointers
  - else, just move the smallest element pointer ahead (because it is sorted array and if it is not equal it will not be found now)
*/

function intersectionOfTwoSortedArraysOptimal(nums1 = [], nums2 = []) {
  const intersection = [];

  let n = nums1.length;
  let m = nums2.length;

  let i = 0;
  let j = 0;

  while (i < n && j < m) {
    if (nums1[i] === nums2[j]) {
      intersection.push(nums1[i]);
      i = i + 1;
      j = j + 1;
    } else {
      if (nums1[i] < nums2[j]) {
        i = i + 1;
      }
      if (nums2[j] < nums1[i]) {
        j = j + 1;
      }
    }
  }

  return intersection;
}

function main() {
  console.log(intersectionOfTwoSortedArrays([1, 2, 2, 3, 3, 4, 5, 6], [2, 3, 3, 5, 6, 6, 7]));
}

main();