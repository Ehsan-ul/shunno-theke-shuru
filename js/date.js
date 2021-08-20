let date = new Date();

console.log(date);
console.log(date.toString());
console.log(date.toLocaleString());
console.log(date.toTimeString());
console.log(date.toLocaleTimeString());

// year, month, date, hours, minutes,seconds
console.log('====== year, month, date, hours, minutes, seconds ======');

console.log(date.getFullYear());
console.log(date.getMonth()); // index number wise month list kora.
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

// day starts from monday
console.log(date.getDay());
