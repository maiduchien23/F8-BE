// function getMessage() {
//   console.log("Xin chao F8");
// }

// function setMessage() {
//   console.log("Khoa hoc back-end");
// }

// getMessage();
// setMessage();

// function getMessage(msg) {
//   console.log(`Xin chao F8 ${msg}`);
// }

// getMessage("Duc Hien");

// function getTotal(a, b = 0) {
//   var total = a + b;
//   return total;
// }

// console.log(`Total = ${getTotal(5, 1)}`);

// var getMessage = function (msg) {
//   return `F8 hoc lap trinh ${msg}`;
// };

// console.log(getMessage("back-end"));

var A = function () {
  console.log("A fun");
};

var B = function (fn) {
  fn();
};
B(A);

B(function () {
  console.log("F8 hoc lap trinh");
});
