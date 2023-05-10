
// 6 kyu    Sum of Digits / Digital Root
// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// function digitalRoot(n) {
//  
// }

// console.log(digitalRoot(16));
// console.log(digitalRoot(942));
// console.log(digitalRoot(132189));
// console.log(digitalRoot(493193));

//
//
//
//
///////////////////////////////////////////
//
//
//
//


// 6 kyu    Array.diff
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// function arrayDiff(a, b) {}

// console.log(arrayDiff([1, 2], [1])); // [2]
// console.log(arrayDiff([1, 2, 2], [1])); // [2,2]
// console.log(arrayDiff([1, 2, 2], [2])); // [1]
// console.log(arrayDiff([1, 2, 2], [])); // [1,2,2]
// console.log(arrayDiff([], [1, 2])); // []
// console.log(arrayDiff([1, 2, 3], [1, 2])); //  [3]

//
//
//
//
///////////////////////////////////////////
//
//
//
//

// 6 kyu    Find The Parity Outlier
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// function findOutlier(integers) {}

// console.log(findOutlier([0, 1, 2])); //, 1)
// console.log(findOutlier([1, 2, 3])); //, 2)
// console.log(findOutlier([2, 6, 8, 10, 3])); //, 3)
// console.log(findOutlier([0, 0, 3, 0, 0])); //, 3)
// console.log(findOutlier([1, 1, 0, 1, 1])); //, 0)

//
//
//
//
///////////////////////////////////////////
//
//
//
//

// 6 kyu   Counting Duplicates
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// function duplicateCount(text) {}

// console.log(duplicateCount('abcde'));
// console.log(duplicateCount('aabbcde'));
// console.log(duplicateCount('aabBcde'));
// console.log(duplicateCount('indivisibility'));
// console.log(duplicateCount('Indivisibilities'));
// console.log(duplicateCount('aA11'));
// console.log(duplicateCount('ABBA'));

//
//
//
//
///////////////////////////////////////////
//
//
//
//

// 6 kyu  Persistent Bugger.
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

// function persistence(num) {}

// console.log(persistence(39));
// console.log(persistence(999));
// console.log(persistence(4));

//
//
//
//
///////////////////////////////////////////
//
//
//
//

// 6 kyu   Does my number look big in this?
// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcissistic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

// This may be True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

// function narcissistic(value) {}

// console.log(narcissistic(7));
// console.log(narcissistic(153));
// console.log(narcissistic(1652));
// console.log(narcissistic(371));

//
//
//
//
///////////////////////////////////////////
//
//
//
//

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// function order(words) {}

// console.log(order('is2 Thi1s T4est 3a'));
// console.log(order('4of Fo1r pe6ople g3ood th5e the2'));
// console.log(order(""));

//
//
//
//
///////////////////////////////////////////
//
//
//
//

// const alphabetPosition = text => {
//    // prettier-ignore
//    const letters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
// };

// console.log(alphabetPosition('hola hola que hace.'));

//
//
//
//
///////////////////////////////////////////
//
//
//
//

// let forBiger = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 14, 15];

// console.log(arrMayoresQ10);

//
//
//
//
///////////////////////////////////////////
//
//
//
//

// primero mayor q 10
// const nums = [3, 5, 7, 12, 42, 633, 13, 19, 235, 22, 999, 55, 11];

// const mayorQueDiez = nums.findIndex(filterBiger);
// console.log(mayorQueDiez);
// console.log(nums[mayorQueDiez]);

//
//
//
//
///////////////////////////////////////////
//
//
//
//

// OBTENER EL MAX
// const nums = [3, 5, 7, 12, 42, 633, 13, 19, 235, 22, 999, 55, 11];

// console.log(numsMax);

//
//
//
//
///////////////////////////////////////////
//
//
//
//

// FILTRAR PRIMOS
// const numsForPrime = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// console.log(justThePrimes);

//
//
//
//
///////////////////////////////////////////
//
//
//
//

// FILTRAR MAYORES Q 12
// const nums = [3, 5, 7, 12, 42, 633, 13, 19, 235, 22, 999, 55, 11];

// console.log(mayores);

//
//
//
//
///////////////////////////////////////////
//
//
//
//

// const creditCard = '123456789';

// const mask = cc => {};

// console.log(mask(creditCard));

//
//
//
//
///////////////////////////////////////////
//
//
//
//

// prettier-ignore
// const romaObj = { M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1 };

// function toRom(num) {}

// console.log(toRom(19));
// console.log(toRom(21));
// console.log(toRom(2000));
