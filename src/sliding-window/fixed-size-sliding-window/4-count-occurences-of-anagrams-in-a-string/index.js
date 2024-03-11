// NOTE: TLE on leetcode

function countOccurences(str = "", pattern = "") {
  let i = 0; 
  let j = 0;

  let count = 0;
  let indexes = [];
  let temp = "";

  while (j < str.length) {
    temp = temp + str[j];

    if (j - i + 1 < pattern.length) {
      j = j + 1;
    } else if (j - i + 1 === pattern.length) {
      // get a result
      const anagram = areAnagrams(temp, pattern);
      if (anagram) {
        count = count + 1;
        indexes.push(i);
      }
      temp = temp.slice(1);
      i = i + 1;
      j = j + 1;
    }
  }

  return {count, indexes};
}

function areAnagrams(str1, str2) {
  function createCharMap(str) {
    const charMap = new Map();
    for (let char of str) {
      charMap.set(char, (charMap.get(char) || 0) + 1);
    }
    return charMap;
  }

  const charMap1 = createCharMap(str1.toLowerCase());
  const charMap2 = createCharMap(str2.toLowerCase());

  if (charMap1.size !== charMap2.size) {
    return false;
  }

  for (let [char, count] of charMap1) {
    if (charMap2.get(char) !== count) {
      return false;
    }
  }

  return true;
}

function main() {
  console.log(countOccurences("cbaebabacd", "abc"));
  console.log(countOccurences("abab", "ab"));
}

main();