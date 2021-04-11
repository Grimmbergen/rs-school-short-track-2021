/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let ob = 1;
  let res = '';
  arr.forEach((el, ind) => {
    if (el === arr[ind + 1]) {
      ob++;
    } else {
      res += `${ob}${el}`;
      ob = 1;
    }
  });
  return res.replace(/1/g, '');
}

module.exports = encodeLine;
