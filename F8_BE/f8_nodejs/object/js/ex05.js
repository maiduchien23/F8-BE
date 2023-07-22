Object.prototype.getMessage = function () {
  return "Xin chao F8";
};
// };
var user = {};
// var user = new Object();

// console.log(user.getMessage());

// function Customer(name) {
//   this.name = name;
// }

// Customer.prototype.getEmail = function () {
//   return `hien@gmail.com`;
// };

// var customer = new Customer();

// // console.log(customer.getMessage());

// console.log(customer.getEmail());

// function Service(name, price) {
//   this.name = name;
//   this.price = price;
//   this.getName = function () {
//     return this.name;
//   };
// }

// console.log(Service.prototype);
// console.log([Service]);

// var service = new Service();

var users = {
  name: `Hoang An`,
  email: `hoangan@gmail.com`,
  age: 31,
};

var customers = {
  service: `Dao tao`,
};

var result = Object.assign(users, customers);
console.log(result);
// for (var key in users) {
//   console.log(users[key]);
// }

// Object.keys(users).forEach(function (key) {
//   console.log(users[key]);
// });
