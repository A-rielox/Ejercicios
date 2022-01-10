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
