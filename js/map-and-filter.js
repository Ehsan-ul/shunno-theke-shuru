// map
let arr = [2, 3, 4, 5];
let arrSqr = arr.map((x) => {
  return x ** 2;
});

console.log(arrSqr);

// filter
let arr2 = [21, 312, 41, 52, 23, 112, 5, 32];
let arrFilter = arr2.filter((x) => {
  return x < 50;
});

console.log(arrFilter);
console.log(arrFilter.sort());

// map
let foods = ['cake', 'coffee', 'burger'];
let newFoods = foods.map((element, x, y) => {
  return `I love ${element} ${x} ${y}`;
});

console.log(newFoods);
