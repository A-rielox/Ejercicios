//118
// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

// [4, 3, 2, 5] would return [4, 3, 2, 6]
// function upArray(arr) {
//    if (arr.length < 1 || arr.some(num => num < 0) || arr.some(num => num > 9)) {
//       return null;
//    } else {
//       let plusOne = parseInt(arr.join(''));
//       console.log(plusOne);
//       console.log(typeof plusOne);

//       let plusT = plusOne + 1;

//       console.log(plusT);

//       plusOne = plusOne.toString();
//       console.log(plusOne);
//       plusOne = [...plusOne];
//       console.log(plusOne);
//       return plusOne; /* .map(num => parseInt(num)); */
//    }
// }

// console.log(
//    upArray([
//       1, 2, 0, 3, 6, 3, 3, 7, 7,
//       8 /* 2, 8, 4, 9, 1, 2, 9, 8, 1, 0, 2, 0, 4, 5, 7,
//       9, 0, 3, 5, 4, 1, 5, 1, 4, 4, 2, 2, 3, 0, 4, */,
//    ])
// );

// const maxLength = Number.MAX_SAFE_INTEGER;
// console.log(maxLength.toString().length);
