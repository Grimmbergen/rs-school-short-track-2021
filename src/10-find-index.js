/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let startInd = 0;
  let endInd = array.length - 1;
  let averInd = null;
  let res = null;
  while (startInd <= endInd) {
    averInd = Math.round((startInd + endInd) / 2);
    if (array[averInd] === value) {
      res = averInd;
    }
    if (value < array[averInd]) {
      endInd = averInd - 1;
    } else {
      startInd = averInd + 1;
    }
  }
  return res;
}

module.exports = findIndex;
