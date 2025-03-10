/**
 * Given an integer array nums and an integer k,
 * return the k most frequent elements. You may
 * return the answer in any order.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function (nums, k) {
  const map = new Map();

  for (const num of nums) map.set(num, (map.get(num) || 0) + 1);

  const iterator = new Map(
    [...map.entries()].sort((a, b) => b[1] - a[1])
  ).entries();
  const result = [];

  for (let i = 0; i < k; i++) result.push(iterator.next().value[0]);

  return result;
};
