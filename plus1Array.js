// prettier-ignore
const letters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

const alphabetPosition = phrase => {
   const single = phrase
      .toUpperCase()
      .split('')
      .filter(c => c.toLowerCase() !== c.toUpperCase());
   const singleIdx = single.map(c => letters.indexOf(c) + 1);

   return singleIdx.join(' ');
};

console.log(alphabetPosition('hola hola que hace.'));
