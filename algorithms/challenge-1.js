function missingNumber(numArr) {
  let baseArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let newArr = [];
  let filtered = baseArr.filter(function (arrEl) {
    return !numArr.includes(arrEl);
  });
  if (filtered.length === 0) {
    return false;
  }
  return filtered.sort((a, b) => a - b);
}

console.log(missingNumber([1, 2, 3, 4, 6, 7, 8, 9])); //to return 5
console.log(missingNumber([1, 2, 3, 4, 5, 6, 8])); //to return [7, 9]
console.log(missingNumber([1, 2, 3, 4, 5, 6, 7, 8, 9])); //to return false

module.exports = missingNumber;
