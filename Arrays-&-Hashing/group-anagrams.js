/**
 * Given an array of strings strs, group the anagrams together.
 * You can return the answer in any order.
 *
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function (strs) {
  const map = new Map();

  for (const str of strs) {
    const sortedStr = str.split('').sort().join();

    if (!map.has(sortedStr)) {
      map.set(sortedStr, []);
    }
    map.get(sortedStr).push(str);
  }

  return Array.from(map.values());
};
