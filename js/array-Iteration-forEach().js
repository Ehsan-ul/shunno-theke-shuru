// method 1
console.log('\n======= method 1 ========');

let color = ['red', 'green', 'blue'];
color.forEach(function (element, index, fullArray) {
  console.log(element, index, fullArray);
});

// method 2
console.log('\n======= method 2 ========');

let color2 = ['grey', 'white', 'black'];
color2.forEach((element, index, fullArray) => {
  console.log(element, index, fullArray);
});

// method 3
console.log('\n======= method 3 ========');

let color3 = ['black', 'brown', 'blakish'];
let arrayFun = function (element, index, fullArray) {
  console.log(element, index, fullArray);
};

color3.forEach(arrayFun);

// practice
console.log('\n======= practice ========');

let x = ['a', 'b', 'c'];
x.forEach((e, i, a) => {
  console.log(e, i, a);
});
