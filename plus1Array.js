// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str) {
   const singleChar = [...str.toString()];
   let final = [];

   singleChar.forEach((el, idx) => {
      let temp = [...str.toString()];

      const isChar = el.toUpperCase() !== el.toLowerCase();

      if (isChar) {
         temp.splice(idx, 1, el.toUpperCase());
         final.push(temp.join(''));
      }
   });

   return final;
}

console.log(wave('two words'));

console.log(wave('codewars'));
// result = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
//
// result = [];
// wave("")
//
console.log(wave('two words'));
// result = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
//
console.log(wave(' gap '));
// result = [" Gap ", " gAp ", " gaP "];
