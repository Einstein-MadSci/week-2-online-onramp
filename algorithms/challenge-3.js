function increment(arr, value) {
  const arrObj = arr;
  for (let i = 0; i < arrObj.length; i++) {
    arrObj[i].val += value;
  }

  return arrObj;
}

console.log(increment([{ val: 1 }, { val: 2 }, { val: 3 }], 2)); //to return [{ val: 3 }, { val: 4 }, { val: 5 }]
console.log(increment([{ val: 10 }, { val: 20 }, { val: 30 }], 5)); //to return [{val: 15 }, { val: 25 }, { val: 35 }]

module.exports = increment;
