/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const tem = [];
  const str = n.toString();
  for (let i = 0; i < str.length; i++) {
    tem.push(+(str.slice(0, i) + str.slice(i + 1)));
  }
  const maxi = Math.max.apply(null, tem);
  return maxi;
}

module.exports = deleteDigit;
