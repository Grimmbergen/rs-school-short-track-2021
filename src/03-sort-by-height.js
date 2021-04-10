/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrInd = [];
  let arrVal = [];
  const res = arr;
  arr.forEach((el, ind) => {
    if (el !== -1) {
      arrInd.push(ind);
      arrVal.push(el);
    }
  });
  arrVal = arrVal.sort((a, b) => a - b);
  for (let i = 0; i < res.length; i++) {
    if (arrInd.includes(i)) {
      res[i] = arrVal[arrInd.indexOf(i)];
    }
  }
  return res;
}

module.exports = sortByHeight;
