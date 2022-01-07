//💫💫💫💫
//💫💫💫💫

// object q tenga cuanto se repite cada elemento {JavaScript: 45, CSS: 38, HTML: 14}
// prettier-ignore
const arreglo = ['JavaScript', 'CSS', 'HTML', 'HTML', 'HTML', 'CSS', 'CSS', 'CSS', 'JavaScript', 'JavaScript', 'JavaScript', 'JavaScript', 'JavaScript', 'CSS', 'CSS', 'JavaScript', 'CSS', 'JavaScript', null, 'JavaScript', 'JavaScript', 'CSS', 'JavaScript', 'JavaScript', 'JavaScript', 'JavaScript', 'JavaScript', 'CSS', 'JavaScript', 'JavaScript', 'JavaScript', 'HTML', 'CSS', 'JavaScript', 'CSS', 'CSS', 'CSS', 'CSS', 'CSS', 'CSS', null, 'CSS', null, 'CSS', 'CSS', 'CSS', 'HTML', 'CSS', 'JavaScript', 'HTML', 'JavaScript', 'JavaScript', 'HTML', 'CSS', 'HTML', 'CSS', 'CSS', 'CSS', 'CSS', 'HTML', 'CSS', 'CSS', 'CSS', 'HTML', 'CSS', 'HTML', 'CSS', 'HTML', 'CSS', 'CSS', 'JavaScript', 'CSS', 'CSS', 'CSS', 'CSS', 'HTML', 'HTML', 'CSS', 'JavaScript', 'JavaScript', 'JavaScript', 'JavaScript', 'JavaScript', 'JavaScript', 'JavaScript', 'JavaScript', 'JavaScript', 'JavaScript', 'JavaScript', 'JavaScript', 'JavaScript', 'JavaScript', 'JavaScript', 'JavaScript', 'JavaScript', 'JavaScript', 'JavaScript', 'JavaScript', 'JavaScript', 'JavaScript']

const lenguajes = arreglo.reduce((total, item) => {
   if (item) {
      console.log(item);
      if (!total[item]) {
         total[item] = 1;
      } else {
         total[item] += 1;
      }
   }

   return total;
}, {});

console.log(lenguajes);

// de forma const chartData = [{ label: 'manzana', value: '29' },...]
let ottoLenguajes = arreglo.reduce((total, item) => {
   if (item) {
      if (!total[item]) {
         total[item] = { label: item, value: 1 };
      } else {
         total[item].value += 1;
      }
   }

   return total;
}, []);

console.log(ottoLenguajes);
// [ JavaScript: { label: 'JavaScript', value: 45 },
//   CSS: { label: 'CSS', value: 38 },
//   HTML: { label: 'HTML', value: 14 } ]

ottoLenguajes = Object.values(ottoLenguajes);
console.log(ottoLenguajes);
// [ { label: 'JavaScript', value: 45 },
//   { label: 'CSS', value: 38 },
//   { label: 'HTML', value: 14 } ]

// ordenar por valor ascendente de value y q solo me de los 5 menores

ottoLenguajes
   .sort((a, b) => {
      return a.value - b.value;
   })
   .slice(0, 5);

console.log(ottoLenguajes);

//💫💫💫💫
//💫💫💫💫

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples

// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")  == "##ippy"

const pal = 'tresTristesTigres';

let reemp = '';
for (let i = 0; i < pal.length - 4; i++) {
   reemp = reemp + '#';
}
console.log(reemp + pal.slice(-4));
////////////////////////////////
const ult = pal.slice(-4);
const listo = ult.padStart(pal.length, '#');
console.log(listo);
console.log(pal.length, listo.length);

//la respuesta
function maskify(cc) {
   const lastFour = cc.slice(-4);
   return lastFour.padStart(cc.length, '#');
}

console.log(maskify(pal));

//💫💫💫💫
//💫💫💫💫
// Write a function that takes an object with the properties number and percentage as argument
// Return the given percentage of the number

function myFunction({ number, percentage }) {
   let expected = number * (percentage / 100);
   return expected.toFixed(2);
}

console.log(myFunction({ number: 100, percentage: 50 }));
console.log(myFunction({ number: 777, percentage: 2 }));
console.log(myFunction({ number: 500, percentage: 99 }));

//💫💫💫💫
//💫💫💫💫
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

arr1 = [10, 10, 10, 20];
arr2 = ['test', 'test', 'test'];
arr3 = [true, true, true, true];
arr4 = ['10', 10, 10, 10];

// const resp1 = arr2.every((item, i, array) => {
//    if (i < array.length - 1) {
//       return item === array[i + 1];
//    } else return true;
// });

// console.log(resp1);

function myFunction(arr1) {
   const resu = arr1.every((item, i, array) => {
      if (i < array.length - 1) {
         return item === array[i + 1];
      } else return true;
   });

   return resu;
}

console.log(myFunction(arr1));
console.log(myFunction(arr2));
console.log(myFunction(arr3));
console.log(myFunction(arr4));

//💫💫💫💫
//💫💫💫💫
// Well met with Fibonacci bigger brother, AKA Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:
// [1, 1 ,1, 3, 5, 9, 17, 31, ...]

// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:
// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]

// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

// mi primera 🤦
function tribonacci(signature, n) {
   //your code here
   let result = [...signature];
   console.log(result);

   if (n === 0) {
      return [];
   }

   if (n === 1) {
      return [1];
   }

   for (let i = 3; i < n; i++) {
      result.push(
         result[result.length - 1] +
            result[result.length - 2] +
            result[result.length - 3]
      );
   }
   return result;
}

//segunda
function tribonacci(signature, n) {
   //your code here
   let res = [];
   for (var i = 0; i < n; i++) {
      res.push(i < 3 ? signature[i] : res[i - 1] + res[i - 2] + res[i - 3]);
   }
   return res;
}

console.log(tribonacci([1, 1, 1], 1));

//💫💫💫💫
//💫💫💫💫
// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero.
//
// In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC.
//
//2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

// function solution(number) {
//    // convert the number to a roman numeral
// }

// const num = 1990;

const hacerRomano = num => {
   //prettier-ignore
   const roma = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
   let romano = '';
   let restante = num;

   for (car in roma) {
      let i = 0;

      while (restante >= roma[car]) {
         romano += car;
         restante -= roma[car];
         i += 1;
      }
   }
   return romano;
};

console.log(hacerRomano(19));

//💫💫💫💫
//💫💫💫💫
// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

function findNextSquare(sq) {
   // Return the next square if sq is a perfect square, -1 otherwise
   const rest = Math.sqrt(sq) % 1;
   let next = sq + 1;

   if (rest !== 0) {
      return -1;
   } else {
      while (Math.sqrt(next) % 1 !== 0) {
         next += 1;
      }
      return next;
   }
}

//💫💫💫💫
//💫💫💫💫
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

//ZpglnRxqenU
const anStr = 'Zpgln';

function accum(s) {
   let curr = '';
   let newStr = '';
   let lower = '';

   for (let i = 0; i < s.length; i++) {
      curr = s[i];

      newStr += curr.toUpperCase();
      if (i > 0) {
         lower = s[i].padStart(i, curr).toLowerCase();
      }

      newStr += lower + '-';
   }

   return (newStr = newStr.slice(0, -1));
}

//💫💫💫💫
//💫💫💫💫
// Create a function that returns the average of a list composed of letters. First, find the number of the letter in the alphabet in order to find the average of the list.

// A = 1
// B = 2
// C = 3
// D = 4
// E = 5
// average = total sum of all numbers / number of item in the set
// Return the result rounded to two decimal points.

// Examples
// averageIndex(["a", "b", "c", "i"]) ➞ 3.75

// averageIndex(["e", "d", "a", "b", "i", "t"]) ➞ 6.83

//prettier-ignore
const letters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

const averageIndex = arr => {
   let prom = 0;
   let sum = 0;

   for (lett of arr) {
      let lett2 = lett.toUpperCase();
      sum += letters.indexOf(lett2) + 1;
   }

   prom = (sum / arr.length).toFixed(2);

   return parseFloat(prom);
};

console.log(averageIndex(['e', 'd', 'a', 'b', 'i', 't']));
