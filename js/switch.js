let input = prompt('Enter any number');
input = parseInt(input);
let output = "you didn't give any number";

switch (input) {
  case 1:
    output = 'you pressed 1';
    break;
  case 2:
    output = 'you pressed 2';
    break;
  case 3:
    output = 'your pressed 3';
  default:
    output = 'Your number is greater than 3';
}

document.getElementById('switch').innerHTML = output;
console.log(output);
