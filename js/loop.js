// for in: string/ array/ object
// for of: string/ array

let person = {
  name: 'Sajjad',
  color: 'brown',
  ID: 2982,
};

// for in: index niye kaj kore
for (let i in person) {
  console.log(i + ': ' + person[i]);
}

let arr = ['a', 'b', 'c'];
// for of: element niye kaj kore
for (let e of arr) {
  console.log(e);
}
