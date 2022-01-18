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

//💫💫💫💫
//💫💫💫💫

// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm).

// Note
// consecutive strings : follow one after another without an interruption

function longestConsec(strarr, k) {
   let newStrarr = [];
   let palabrota = '';

   if (strarr.length === 0 || k > strarr.length || k <= 0) {
      return '';
   } else {
      for (let i = 0; i < strarr.length - (k - 1); i++) {
         const element1 = strarr[i];
         palabrota += element1;

         for (let j = 0; j < k - 1; j++) {
            palabrota += strarr[i + 1 + j];
         }

         newStrarr = [...newStrarr, palabrota];
         palabrota = '';
      }

      newStrarr.sort((a, b) => b.length - a.length);
      return newStrarr[0];
   }
}

console.log(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3));
console.log(
   longestConsec(
      [
         'ejjjjmmtthh',
         'zxxuueeg',
         'aanlljrrrxx',
         'dqqqaaabbb',
         'oocccffuucccjjjkkkjyyyeehh',
      ],
      1
   )
);
///////////////////////////////////////////
function longestConsec2(strarr, k) {
   let newStrarr = [];
   // let palabrota = '';

   if (strarr.length === 0 || k > strarr.length || k <= 0) {
      return '';
   } else {
      newStrarr = strarr.map((_, i) => {
         return strarr.slice(i, i + k).join('');
      });

      console.log(newStrarr);
      newStrarr = newStrarr.reduce((tot, curr) => {
         return curr.length > tot.length ? curr : tot;
      });
      return newStrarr;
   }
}

console.log(
   longestConsec2(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2)
);

// console.log(
//    longestConsec2(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3)
// );
// console.log(
//    longestConsec2(
//       [
//          'ejjjjmmtthh',
//          'zxxuueeg',
//          'aanlljrrrxx',
//          'dqqqaaabbb',
//          'oocccffuucccjjjkkkjyyyeehh',
//       ],
//       1
//    )
// );

//💫💫💫💫
//💫💫💫💫
//56
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// assert.strictEqual(duplicateEncode("din"),"(((");
// assert.strictEqual(duplicateEncode("recede"),"()()()");
// assert.strictEqual(duplicateEncode("Success"),")())())","should ignore case");
// assert.strictEqual(duplicateEncode("(( @"),"))((");
// function duplicateEncode(word){
//    // ...
// }
const func = word => {
   let newWord = '';

   for (let i = 0; i < word.length; i++) {
      let wordArr = Array.from(word.toLowerCase());
      let singleLett = wordArr.splice(i, 1);
      let noDup = [...new Set(wordArr)];
      console.log(singleLett, wordArr, noDup);

      if (noDup.includes(singleLett[0])) {
         newWord += ')';
      } else {
         newWord += '(';
      }
   }
   return newWord;
};

console.log(func('Success')); //")())())"
//64
//💫💫💫💫
//💫💫💫💫
// 64
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// function reverseWords(str) {
//    // Go for it
//  }

const reverseWords = str => {
   let reversed = [];
   const arrays = str.split(' ');

   for (const word of arrays) {
      let arr = word.split('');
      arr.push(' ');
      reversed.push(arr.reverse().join(''));
   }

   reversed = reversed.join('');
   return reversed.slice(1);
};

console.log(reverseWords('hoLi hola  guaton'));

//66
//💫💫💫💫
//💫💫💫💫
//66
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

// describe("Sample test", () => {
//    it("Should pass sample tests", () => {
//      assert.equal(domainName("http://google.com"), "google");
//      assert.equal(domainName("http://google.co.jp"), "google");
//      assert.equal(domainName("www.xakep.ru"), "xakep");
//      assert.equal(domainName("https://youtube.com"), "youtube");
//    })
//  })

const find = url => {
   let short = '';

   if (!url.startsWith('h') && !url.startsWith('w')) {
      const indexFDot = url.indexOf('.');

      short = url.slice(0, indexFDot);
   }

   if (url.startsWith('h')) {
      const indexSlash = url.indexOf('/');
      if (url[indexSlash + 2] === 'w') {
         console.log(indexSlash + 2);
         const indexFDot = url.indexOf('.');
         const indexSDot = url.indexOf('.', indexFDot + 1);
         console.log(indexFDot, indexSDot);
         short = url.slice(indexFDot + 1, indexSDot);
         console.log(short);
      } else {
         const indexDot = url.indexOf('.');
         console.log(indexDot);

         short = url.slice(indexSlash + 2, indexDot);
      }
   } else if (url.startsWith('w')) {
      const indexFDot = url.indexOf('.');
      const indexSDot = url.indexOf('.', indexFDot + 1);
      console.log(indexFDot, indexSDot);

      short = url.slice(indexFDot + 1, indexSDot);
   }
   return short;
};
//74

// function domainName(url){
//    url = url.replace("https://", '');
//    url = url.replace("http://", '');
//    url = url.replace("www.", '');
//    return url.split('.')[0];
//  };
//  http://www.p3v4yble3801zwyotp83oxq4e.io
console.log(find('http://github.com/carbonfive/raygun'));
console.log(find('http://google.com'));
console.log(find('https://youtube.com'));
console.log(find('www.xakep.ru'));
console.log(find('http://www.p3v4yble3801zwyotp83oxq4e.io'));
console.log(find('taon7oq1xh.co.za'));
//💫💫💫💫
//💫💫💫💫
//
// 74

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

const arrayDiff = (a, b) => {
   let dif = [];

   if (b.length === 0) {
      return a;
   } else {
      for (let i = 0; i < b.length; i++) {
         dif = a.filter(item => {
            console.log(item, b[i]);
            return item != b[i];
         });
         a = dif;
         console.log(dif);
      }
      console.log(dif);
      return dif;
   }
};

// mas chido
// const arrayDiff = (a, b) => {
//    return a.filter(item => !b.includes(item));
// };

console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
console.log(arrayDiff([], [4, 5]));
console.log(arrayDiff([1, 8, 2], []));
console.log(arrayDiff([1, 2, 3], [1, 2]));
//82
//💫💫💫💫
//💫💫💫💫
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// "This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
// "No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
// "What are you, a communist?"), "Wht r y,  cmmnst?")

function disemvowel(str) {
   const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
   //prettier-ignore
   return str.split('').filter(lett=> !vowels.includes(lett)).join('');
}
//mas bakan
// function disemvowel(str) {
//    return str.replace(/[aeiou]/gi, '');
//  }
// 114 - 6 KYU
//💫💫💫💫
//💫💫💫💫
// 114
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
// list([1,2,'a','b']),[1,2])
// list([1,'a','b',0,15]),[1,0,15])
// list([1,2,'aasf','1','123',123]),[1,2,123])

function filter_list(l) {
   // let newList = l.filter(item => typeof item === 'number');

   return l.filter(item => typeof item === 'number');
}

console.log(filter_list([1, 2, 'a', 'b']));
console.log(filter_list([1, 'a', 'b', 0, 15]));
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));
//116
//💫💫💫💫
//💫💫💫💫
// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

function gimme(triplet) {
   const copia = [...triplet];
   let sorted = copia.sort((a, b) => a - b);
   let midIndex = triplet.indexOf(sorted[1]);
   console.log(sorted);
   console.log(midIndex);

   return midIndex;
}

console.log(gimme([2, 3, 1]));
// 118
//💫💫💫💫
//💫💫💫💫
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str) {
   let newStr = [...str];
   let mW = [];

   for (const [k, v] of Object.entries(newStr)) {
      if (v !== ' ') {
         let tempArr = [...str];
         let neArr;
         newArr = tempArr.splice(k, 1, v.toUpperCase());
         mW.push(tempArr.join(''));
      }
   }

   return mW;
}

console.log(wave(' gap '));

// wave("codewars")
// result = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
//
// result = [];
// wave("")
//
// wave("two words")
// result = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
//
// wave(" gap ")
// result = [" Gap ", " gAp ", " gaP "];

// DE ALLÁ
// function wave(str){
//    let result = [];

//    str.split("").forEach((char, index) => {
//        if (/[a-z]/.test(char)) {
//            result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
//        }
//    });

//    return result;
// }

//127
//💫💫💫💫
//💫💫💫💫
// This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

// Explanation:

// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers
// Note: the original array must not be changed in any case!

Array.prototype.square = function () {
   return this.map(item => {
      return Math.pow(item, 2);
   });
};
Array.prototype.cube = function () {
   return this.map(item => {
      return Math.pow(item, 3);
   });
};
Array.prototype.average = function () {
   if (this.length === 0) {
      return NaN;
   } else {
      const sum = this.reduce((item, tot) => item + tot);
      return sum / this.length;
   }
};
Array.prototype.sum = function () {
   return this.reduce((item, tot) => item + tot);
};
Array.prototype.even = function () {
   return this.filter(item => item % 2 === 0);
};
Array.prototype.odd = function () {
   return this.filter(item => item % 2 !== 0);
};

// Example
var numbers = [1, 2, 3, 4, 5];

console.log(numbers.square()); // must return [1, 4, 9, 16, 25]
console.log(numbers.cube()); // must return [1, 8, 27, 64, 125]
console.log(numbers.average()); // must return 3
console.log(numbers.sum()); // must return 15
console.log(numbers.even()); // must return [2, 4]
console.log(numbers.odd()); // must return [1, 3, 5]
//136
//💫💫💫💫
//💫💫💫💫
// Modify the kebabize function so that it converts a camel case string into a kebab case.

function kebabize(str) {
   let newStr = [];

   newStr = [...str]
      .map(item => {
         const reg = /[0-9]/;
         if (reg.test(item)) {
            return '';
         } else if (item === item.toLowerCase()) {
            return item;
         } else if (item === item.toUpperCase()) {
            return '-' + item.toLowerCase();
         }
      })
      .filter(item => item !== '');

   console.log(newStr);

   const reg = /-/;
   if (reg.test(newStr[0])) {
      console.log(newStr[0][1]);
      newStr.splice(0, 1, newStr[0][1]);
   }

   return newStr.join('');
}

// console.log(kebabize('camelsHaveThreeHumps')); // camels-have-three-humps
// console.log(kebabize('CamelsHaveThreeHumps')); // camels-have-three-humps
// console.log(kebabize('camelsHave3Humps')); // camels-have-humps
// the returned string should only contain lowercase letters

//145
//💫💫💫💫
//💫💫💫💫
// Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

// If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

function balance(left, right) {
   const leftSide = [...left];
   const rightSide = [...right];
   let result = '';

   const sumLeft = leftSide.reduce((tot, item) => {
      if (item === '!') return tot + 2;
      if (item === '?') return tot + 3;
      return tot;
   }, 0);

   const sumRight = rightSide.reduce((tot, item) => {
      if (item === '!') return tot + 2;
      if (item === '?') return tot + 3;
      return tot;
   }, 0);

   if (sumRight > sumLeft) {
      result = 'Right';
   } else if (sumRight < sumLeft) {
      result = 'Left';
   } else {
      result = 'Balance';
   }

   return result;
}

console.log(balance('!!', '??')); //, "Right"
console.log(balance('!??', '?!!')); //, "Left"
console.log(balance('!?!!', '?!?')); //, "Left"
console.log(balance('!!???!????', '??!!?!!!!!!!')); //, "Balance"
//154
