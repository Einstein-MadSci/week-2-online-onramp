// An ATM only has 100, 50, 20 Naira bills (NGN) available to be dispensed.
// Given an amount between 40 and 10000 Naira (inclusive) rounded to the
// nearest 10 and assuming that the ATM wants to use as few bills as
// possible.

// Implement the function withdraw(amount) that returns the minimal
// number of 100, 50 and 20 Naira bills the ATM needs to dispense
// (in that order) in an array.

function withdraw(amount) {
  let newAmtVal = amount;
  let numOf100s = 0;
  let numOf50s = 0;
  let numOf20s = 0;
  const resultArr = [];
  // console.log(newAmtVal);
  let iterator = amount % 100;
  // console.log(iterator);
  newAmtVal -= iterator;
  // console.log(newAmtVal);
  numOf100s = newAmtVal / 100;
  // console.log(numOfHundreds);

  if (iterator % 50 === 0) {
    numOf50s = 1;
    iterator -= 50;
    // console.log(numOf50s);
  } else {
    numOf50s = Math.floor(iterator / 50);
    iterator -= 50;
  }

  // console.log(iterator);

  if (iterator === 0) {
    numOf20s = 0;
  } else if (iterator % 20 === 0) {
    numOf20s = 1;
  } else {
    numOf20s = Math.floor(iterator / 20);
  }

  resultArr.push(numOf100s);
  resultArr.push(numOf50s);
  resultArr.push(numOf20s);

  return resultArr;
}

console.log(withdraw(250)); //to return [2,1,0]
console.log(withdraw(370)); //to return [3,1,1]

module.exports = withdraw;
