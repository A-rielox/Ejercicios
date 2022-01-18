//145
// Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

// If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

function balance(left, right) {
   const leftSide = [...left];
   const rightSide = [...right];
   let result = '';

   const sumLeft = leftSide.reduce((tot, item) => {
      if (item === '!') return tot + 2;
      if (item === '?') return tot + 3;
      return tot;
   }, 0);

   const sumRight = rightSide.reduce((tot, item) => {
      if (item === '!') return tot + 2;
      if (item === '?') return tot + 3;
      return tot;
   }, 0);

   if (sumRight > sumLeft) {
      result = 'Right';
   } else if (sumRight < sumLeft) {
      result = 'Left';
   } else {
      result = 'Balance';
   }

   return result;
}

console.log(balance('!!', '??')); //, "Right"
console.log(balance('!??', '?!!')); //, "Left"
console.log(balance('!?!!', '?!?')); //, "Left"
console.log(balance('!!???!????', '??!!?!!!!!!!')); //, "Balance"
//154
