"use strict";

/**
 * Function returns the base value to the power of the exponent
 * @param {number} base
 * @param {number} exponent
 * @returns the base value to the power of the exponent
 */

function pow(base, exponent) {
  if (typeof base !== "number") {
    throw new TypeError("Argument must be number type");
  }
  if (typeof exponent !== "number") {
    throw new TypeError("Argument must be number type");
  }
  if (!Number.isInteger(exponent)) {
    throw new RangeError("Argument must be an integer");
  }

  if (exponent === 0) return 1;
  if (exponent < 0) return 1 / pow(base, -exponent);
  else return base * pow(base, exponent - 1);
}

try {
  console.log(pow(10, -2));
} catch (error) {
  if (error instanceof TypeError) {
    alert("Argument must be number type");
  } else if (error instanceof RangeError) {
    alert("Argument must be an integer");
  } else if (error instanceof Error) {
    alert("Something wunt wrong");
  }
}
