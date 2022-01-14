// 118
// 5 kyu - Regex Password Validation
// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

// ('djI38D55'), 'djI38D55 - true'
// ('a2.d412'), 'a2.d412 - false'
// ('JHD5FJ53'), 'JHD5FJ53 - false'
// ('!fdjn345'), '!fdjn345 - false'
// ('jfkdfj3j'), 'jfkdfj3j - false'
// ('123'), '123 - false'
// ('abc'), 'abc - false'
// ('Password123'), 'Password123 - true'
// function validate(password) {
//    return /(put answer here)/.test(password);
// }

function validate(password) {
   return /(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])\w{6,}/.test(password);
}

console.log(validate('djI38D55'));
console.log(validate('a2.d412'));
console.log(validate('JHD5FJ53'));
console.log(validate('!fdjn345'));
console.log(validate('Password123'));
console.log(validate('djI38D55'));
console.log(validate('djI38D55'));

// \w -> alfanumericos
// \w{6} -> alfanumericos de 6 o mas
// [a-zA-Z0-9] -> letras minusculas, mayusculas y nums
