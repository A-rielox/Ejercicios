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
