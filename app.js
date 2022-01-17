//136
// Modify the kebabize function so that it converts a camel case string into a kebab case.

function kebabize(str) {
   let newStr = [];

   newStr = [...str]
      .map(item => {
         const reg = /[0-9]/;
         if (reg.test(item)) {
            return '';
         } else if (item === item.toLowerCase()) {
            return item;
         } else if (item === item.toUpperCase()) {
            return '-' + item.toLowerCase();
         }
      })
      .filter(item => item !== '');

   console.log(newStr);

   const reg = /-/;
   if (reg.test(newStr[0])) {
      console.log(newStr[0][1]);
      newStr.splice(0, 1, newStr[0][1]);
   }

   return newStr.join('');
}

console.log(kebabize('CamelsHaveThreeHumps')); // camels-have-three-humps
// console.log(kebabize('camelsHave3Humps')); // camels-have-humps
// Notes:

// the returned string should only contain lowercase letters

//145
