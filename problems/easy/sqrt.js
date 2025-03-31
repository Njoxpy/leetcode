/*
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
*/

// https://leetcode.com/problems/sqrtx/description/
/**
 * @param {number} x
 * @return {number}
 */

var mySqrt = function (x) {
  // check number
  // create variable for zero
  const ZERO = 0;

  // check type
  if (typeof x !== "number" || x < ZERO) {
    console.log("Must be the number!");

    return 1;
  }

  const y = Math.sqrt(x);

  console.log("Value of y is: ", y);

  //   round results
  const roundedNumber = Math.floor(y);

  return roundedNumber;
};
