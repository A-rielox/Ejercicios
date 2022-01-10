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
