// Implement the function arraySum(arr1, arr2) that takes two arrays as
// arguments and returns an array of the sum of the values in the first
// with the values in the second array in repeating order.

function arraySum(arr1, arr2) {
  const resultArr = [];
  let indexOfArr1 = 0;

  while (indexOfArr1 < arr1.length) {
    for (let i = 0; i < arr2.length; i++) {
      if (arr1[indexOfArr1]) {
        resultArr.push(arr1[indexOfArr1] + arr2[i]);
        indexOfArr1++;
      }
    }
  }

  return resultArr;
}

module.exports = arraySum;

console.log(arraySum([1, 2, 4, 5, 6, 2, 1], [2, 3, 5])); //to return [3,5,9,7,9,7,3]
console.log(arraySum([10, 20, 30, 40, 50], [20, 40, 60])); //to return [30,60,90,60,90]
