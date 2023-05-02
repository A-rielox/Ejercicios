let yo = 'Arielox';

let yoArr = [...yo];

console.log(yo);
console.log(...yo);
console.log(yoArr);

for (const el of yoArr.entries()) {
   console.log(el);
}

// prettier-ignore
const roma = { M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1 };

console.log(Object.keys(roma));
console.log(Object.values(roma));
console.log(...Object.entries(roma));

for (const key in roma) {
   console.log(key);
}

let yoyo = 'ariel godoy palominos';
console.log(new Set(yoyo));
console.log(new Set(yoyo).size);
console.log(...new Set(yoyo));
console.log([...new Set(yoyo)]);

console.log(yoyo.toUpperCase());

let singleName = yoyo.split(' ');
let cap = singleName.map(name => name[0].toUpperCase() + name.slice(1));

console.log(singleName);
console.log(cap.join(' '));

/////
console.log(yoyo.replaceAll('o', '0').replaceAll('a', '@').replaceAll('i', 1));

console.log(yoyo.includes('odoy'));
console.log(yoyo.startsWith('ari'));
console.log(yoyo.endsWith('Os'.toLowerCase()));

/////
const creditCard = '123456789';

const mask = cc => {
   let last = cc.slice(-4);
   let padded = last.padStart(cc.length, '#');

   return padded;
};

console.log(mask(creditCard).repeat(2));
/////
console.log([...yo].reverse().join(''));
console.log(Array.from(yo).reverse().join(''));
console.log([...yoyo].indexOf('o'));
console.log([...yoyo].indexOf('o', 7 + 1));

/////
const nums = [3, 5, 7, 12, 42, 633, 235, 22, 999, 55, 11];

const filtro = item => {
   return item > 12;
};

let mayores = nums.filter(filtro);

console.log(mayores);
/////
const numsForPrime = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const filtroPrime = item => {
   for (let i = 2; item > i; i++) {
      if (item % i === 0) {
         console.log(item);

         return false;
      }
   }
   console.log(item);
   return item > 1;
};

let justThePrimes = numsForPrime.filter(filtroPrime);

console.log(justThePrimes);
   
////////////////////
const numsMax = nums.reduce((tot, curr) => {
   if (curr > tot) {
      tot = curr;
   }

   return tot;
}, 0);

console.log(numsMax);

////////////////////
// primero mayor q 10

const filterBiger = item => {
   return item > 10;
};

const mayorQueDiez = numsForPrime.findIndex(filterBiger);
console.log(mayorQueDiez);
console.log(numsForPrime[mayorQueDiez]);

////////////////////
// todos los mayores que 10

let forBiger = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 14, 15];

let arrMayoresQ10 = [];

for (let i = 0; i < forBiger.length; i++) {
   if (forBiger[i] > 10) arrMayoresQ10.push(forBiger[i]);
}

console.log(arrMayoresQ10);

//////////////////////////
const alphabetPosition = text => {
   // prettier-ignore
   const letters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

   let lett = [...text].filter(
      char => char.toUpperCase() !== char.toLowerCase()
   );

   let indexes = lett.map(char => {
      return letters.indexOf(char.toUpperCase()) + 1;
   });

   return indexes.join();
};

console.log(alphabetPosition('hola hola que hace.'));

//////////////////////////
// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
   let singleW = words.split(' ');
   let newArrOfW = [...singleW];

   singleW.forEach(el => {
      let index = +el
         .split('')
         .filter(char => char.toLowerCase() === char.toUpperCase());

      newArrOfW.splice(index - 1, 1, el);
   });

   console.log(singleW);
   console.log(newArrOfW);

   return newArrOfW.join(' ');
}

console.log(order('is2 Thi1s T4est 3a'));
// console.log(order('4of Fo1r pe6ople g3ood th5e the2'));
// console.log(order(""));

//////////////////////////
// prettier-ignore
const romaObj = { M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1 };

function toRom(num) {
   let rom = '';
   let rest = num;

   for (const key in romaObj) {
      while (rest >= romaObj[key]) {
         rom += key;
         rest -= romaObj[key];
      }
   }

   return rom;
}

console.log(toRom(19));
console.log(toRom(21));
console.log(toRom(2000));
