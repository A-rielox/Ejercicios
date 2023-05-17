// const roma = { M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1 };
// function hacerRomano(num) {
//    let romNum = '';
//    let rest = num;

//    for (const key in roma) {
//       while (rest >= roma[key]) {
//          rest = rest - roma[key];

//          romNum += key;
//       }
//    }
//    return romNum;
// }

// console.log(hacerRomano(19));
// console.log(hacerRomano(21));
// console.log(hacerRomano(2000));

/////////////////////////////////

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

// function narcissistic(value) {
//    const digits = [...value.toString()].map(i => +i);

//    let narciSum = digits.reduce((t, i) => {
//       t = t + Math.pow(i, digits.length);

//       return t;
//    }, 0);

//    return value === narciSum ? true : false;
// }

// console.log(narcissistic(7));
// console.log(narcissistic(153));
// console.log(narcissistic(1652));
// console.log(narcissistic(371));

/////////////////////////////////////////////////////

// 6 kyu   Your order, please
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// function order(words) {
//    let arrOfWords = words.split(' ');
//    let newArrOfWords = [...arrOfWords];

//    arrOfWords.forEach(el => {
//       let index = +el.split('').filter(c => c.toLowerCase() == c.toUpperCase());

//       newArrOfWords.splice(index - 1, 1, el);
//    });

//    return newArrOfWords.join(' ');
// }

// console.log(order('is2 Thi1s T4est 3a'));
// console.log(order('4of Fo1r pe6ople g3ood th5e the2'));
// console.log(order(""));

////////////////////////////////////////////

// 6 kyu  Persistent Bugger.
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

// function persistence(num) {
//    let arrWithNum = num.toString().split('').map(el => +el);

//    let count = 0;

//    while (arrWithNum.length >= 2) {
//       count++;

//       let sum = arrWithNum.reduce((t, i) => t * i);

//       arrWithNum = sum.toString().split('').map(el => +el);
//    }

//    return count;
// }

// console.log(persistence(39));
// console.log(persistence(999));
// console.log(persistence(4));

/////////////////////////////////////////////////////////

// 6 kyu    Replace With Alphabet Position

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

// function alphabetPosition(text) {
//    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

//    let lett = [...text.toUpperCase()].filter(
//       el => el.toUpperCase() !== el.toLowerCase()
//    );

//    let nums = lett.map(el => alphabet.indexOf(el) + 1);

//    return nums.join(' ');
// }

// console.log(alphabetPosition("The sunset sets at twelve o' clock."));

/////////////////////////////////////////////////////////

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

// function duplicateCount(text) {
//    const differents = [...new Set(text.toLowerCase())];

//    let elementMoreThanTwoTimes = 0;

//    differents.forEach(el => {
//       let timesEl = [...text.toLowerCase()].reduce((t, i) => {
//          if (i === el) t++;

//          return t;
//       }, 0);

//       if (timesEl > 1) elementMoreThanTwoTimes += 1;
//    });

//    return elementMoreThanTwoTimes;
// }

// console.log(duplicateCount('abcde'));
// console.log(duplicateCount('aabbcde'));
// console.log(duplicateCount('aabBcde'));
// console.log(duplicateCount('indivisibility'));
// console.log(duplicateCount('Indivisibilities'));
// console.log(duplicateCount('aA11'));
// console.log(duplicateCount('ABBA'));

///////////////////////////////////////////

// 6 kyu    Find The Parity Outlier
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// function findOutlier(integers) {
//    let odd = integers.filter(i => i % 2 !== 0);
//    let even = integers.filter(i => i % 2 === 0);

//    return odd.length === 1 ? odd[0] : even[0];
// }

// console.log(findOutlier([0, 1, 2])); //, 1)
// console.log(findOutlier([1, 2, 3])); //, 2)
// console.log(findOutlier([2, 6, 8, 10, 3])); //, 3)
// console.log(findOutlier([0, 0, 3, 0, 0])); //, 3)
// console.log(findOutlier([1, 1, 0, 1, 1])); //, 0)

//////////////////////////////////////////

// 6 kyu    Array.diff
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// function arrayDiff(a, b) {
//    let filtered = [...a];

//    for (const item of b) {
//       filtered = filtered.filter(n => n !== item);
//    }

//    return filtered;
// }

// console.log(arrayDiff([1, 2], [1]));
// console.log(arrayDiff([1, 2, 2], [1]));
// console.log(arrayDiff([1, 2, 2], [2]));
// console.log(arrayDiff([1, 2, 2], []));
// console.log(arrayDiff([], [1, 2]));
// console.log(arrayDiff([1, 2, 3], [1, 2]));

// ([1,2], [1]), [2], "a was [1,2], b was [1]");
// ([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
// ([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
// ([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
// ([], [1,2]), [], "a was [], b was [1,2]");
// ([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")

//////////////////////////////////////////////////////

// 6 kyu    Sum of Digits / Digital Root
// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// function digitalRoot(n) {
//    let xd = [...n.toString()];
//    let sumilla = 0;

//    while (xd.length > 1) {
//       sumilla = xd.reduce((t, i) => {
//          t = +t + +i;
//          return t;
//       });

//       xd = [...sumilla.toString()];
//    }

//    return sumilla;
// }

// console.log(digitalRoot(16));
// console.log(digitalRoot(942));
// console.log(digitalRoot(132189));
// console.log(digitalRoot(493193));

///////////////////////////////////////////////////

// 6 kyu   Find the odd int
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// function findOdd(A) {
//    let diffe = [...new Set(A)];

//    for (const item of diffe) {
//       let many = A.filter(a => a === item).length;

//       if (many % 2 !== 0) return item;
//    }
// }

// console.log(findOdd([7]));
// console.log(findOdd([0]));
// console.log(findOdd([1, 1, 2]));
// console.log(findOdd([0, 1, 0, 1, 0]));
// console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

/////////////////////////////////////////////

// 6 kyu   Stop gninnipS My sdroW!
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"

// function spinWords(string) {
//    let arr = string.split(' ');

//    let newArr = arr.map(el => {
//       if (el.length >= 5) {
//          return [...el].reverse().join('');
//       } else {
//          return el;
//       }
//    });

//    return newArr.join(' ');
// }

// console.log(spinWords('Hey fellow warriors'));
// console.log(spinWords('This is a test'));
// console.log(spinWords('This is another test'));

////////////////////////////////////////////////////////

// 6 kyu  Multiples of 3 or 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// function solution(number) {
//    let arr = [];

//    for (let i = 1; i < number; i++) {
//       if (i % 3 === 0 || i % 5 === 0) {
//          arr.push(i);
//       }
//    }

//    return arr.reduce((a, b) => a + b);
// }

// console.log(solution(10));
