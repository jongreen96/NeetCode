/**
 * Design an algorithm to encode a list of strings
 * to a single string. The encoded string is then
 * decoded back to the original list of strings.
 *
 * @param {string[]} strs
 * @returns {string}
 */

var encode = function (strs) {
  if (strs.length === 0) return '';

  let res = '';
  for (const str of strs) res += str.length + '|' + str;

  return res;
};

/**
 * @param {string} str
 * @returns {string[]}
 */

var decode = function (str) {
  if (str.length === 0) return [];

  let res = [],
    i = 0,
    j = 0;

  while (i < str.length) {
    j = i;

    while (str[j] !== '|') j++;

    const size = parseInt(str.substring(i, j));
    i = j + 1;
    j = i + size;
    res.push(str.substring(i, j));
    i = j;
  }
  return res;
};
