const getSomePrimes = howMany => {
   let primeArr = [];

   let testingNum = 2;
   while (primeArr.length < howMany) {
      let div = [];
      let curr = 2;

      while (div.length < 1) {
         if (testingNum % curr === 0) {
            div.push(curr);
            curr++;
         } else {
            curr++;
            continue;
         }
      }

      if (div[0] === testingNum) {
         primeArr.push(div[0]);
         testingNum++;
      } else {
         testingNum++;
         continue;
      }
   }

   return primeArr;
};

const numPrimorial = n => {
   return getSomePrimes(n).reduce((tot, item) => {
      tot *= item;
      return tot;
   }, 1);
};

console.log(getSomePrimes(3));
console.log(numPrimorial(8));
//163
