let arr = [21, 32, 3, 12, 95, 109];

console.log(arr.sort());

// number sorting
let compArr = (a, b) => {
  // if <0 ..... a comes first
  // if 0 ..... nothing will be changed
  // if >0 ..... b comes first
  return a - b;
};
console.log(arr.sort(compArr));
