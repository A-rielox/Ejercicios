let yoyo = 'ariel godoy palominos';

let single = yoyo.split(' ');

let arrSingCap = single.map(w => w[0].toUpperCase() + w.slice(1).toLowerCase());

console.log(arrSingCap.join(' '));

console.log(single);
console.log(arrSingCap);
