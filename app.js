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

// function longestConsec(strarr, k) {
//    // your code
//    let newStrarr = [];

//    newStrarr = strarr
//       .map((item, i) => {
//          if (i < strarr.length - 1) {
//             return item + strarr[i + 1];
//          }
//       })

//       .sort((a, b) => b.length - a.length);

//    newStrarr.splice(1, strarr.length);
//    console.log(newStrarr);

//    return newStrarr;
// }

// console.log(
//    longestConsec(['tree', 'foling', 'trashy', 'blue', 'abcdef', 'uvwxyz'], 2)
// );

// arr = ['a', 'b', 'c', 'd', 'e'];
// // con dos argumentos (1,2) => a partir del elemento 1 borra dos elementos
// arr.splice(1, 2);
// console.log(arr);
//////////////////////////////////////////////////////
// strarr.length = 0 || k > strarr.length || k <= 0

function longestConsec2(strarr, k) {
   let newStrarr = [];
   let palabrota = '';

   if (strarr.length === 0 || k > strarr.length || k <= 0) {
      return '';
   } else {
      for (let i = 0; i < strarr.length - (strarr.length - k); i++) {
         const element1 = strarr[i];
         palabrota += element1;

         for (let j = 0; j < k - 1; j++) {
            palabrota += strarr[i + 1 + j];
         }
         // palabrota.splice(strarr.length - k)
         console.log(palabrota);
         newStrarr = [...newStrarr, palabrota];
         palabrota = '';
         console.log(newStrarr);
      }

      newStrarr.sort((a, b) => b.length - a.length);
      return newStrarr[0];
   }
}

console.log(
   longestConsec2(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3)
);
