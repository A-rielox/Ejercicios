// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
   const singleW = words.split(' ');
   const orderedArr = [...singleW];

   singleW.forEach(el => {
      let idx = [...el]
         .filter(c => c.toLowerCase() === c.toUpperCase())
         .map(i => +i);

      orderedArr.splice(idx - 1, 1, el);
   });

   console.log(singleW);
   console.log(orderedArr);
}

console.log(order('is2 Thi1s T4est 3a'));
// console.log(order('4of Fo1r pe6ople g3ood th5e the2'));
// console.log(order(""));
