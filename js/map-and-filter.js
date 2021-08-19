let arr = [2, 3, 4, 5];
let arrSqr = arr.map((x) => {
  return x ** 2;
});

console.log(arrSqr);

let arr2 = [21, 312, 41, 52, 23, 112, 5, 32];
let arrFilter = arr2.filter((x) => {
  return x < 50;
});

console.log(arrFilter);
console.log(arrFilter.sort());
