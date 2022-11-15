function numSwap(number) {
  let numToString = number.toString();
  if (numToString.length % 2 !== 0) {
    return false;
  } else {
    const splitStr = numToString.split("");
    // console.log(splitStr);
    for (let i = 0; i < splitStr.length; i++) {
      if (i % 2 !== 0) {
        temp = splitStr[i - 1];
        splitStr[i - 1] = splitStr[i];
        splitStr[i] = temp;
      }
    }
    return Number.parseInt(splitStr.join(""));
  }
}

console.log(numSwap(1234)); //to return 2143
console.log(numSwap(432156)); //to return 341265

module.exports = numSwap;
