// normal function
function fun1(para) {
  console.log(para);
}
fun1('This is fun1');

// function expression
let fun2 = function (para) {
  console.log(para);
};
fun2('This is fun2');

// arrow function
let funArrow = (para) => {
  console.log(para);
};
funArrow('This is an arrow function');

// no need to use () incase only one parameter
let funArrow2 = (para) => {
  console.log(para);
};
funArrow2('This is another arrow function');
