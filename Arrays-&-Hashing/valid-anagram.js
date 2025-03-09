/**
 * Given two strings s and t, return true if t
 * is an anagram of s, and false otherwise.
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const sMap = {};
  const tMap = {};

  for (let i = 0; i < s.length; i++) {
    sMap[s[i]] = (sMap[s[i]] || 0) + 1;
    tMap[t[i]] = (tMap[t[i]] || 0) + 1;
  }

  for (const key in sMap) {
    if (sMap[key] !== tMap[key]) return false;
  }

  return true;
};
