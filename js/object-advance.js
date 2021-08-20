// Example 1
let myHome = {
  location: 'dhaka',
  bedRoom: 3,
  dinningRoom: 1,
  drawingRoom: 1,
  color: 'white',
  isUsable: true,

  TotalRoom: function () {
    return this.bedRoom + this.dinningRoom + this.drawingRoom;
  },
};

console.log(myHome.TotalRoom());

// Example 2
let person = {
  firstName: 'Ehsanul Islam',
  lastName: 'Sajjad',
  age: 25,

  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.fullName());
