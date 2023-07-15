console.log(Array.prototype);

// //Vòng lặp every => Tất cả
// //Trả về true nếu tất cả các vòng lặp trả về true

// var number = [1, 3, 5, 7, 9, 10];

// var check = number.every(function (number) {
//   //   console.log(number);
//   //   if (number % 2 !== 0) {
//   //     return true;
//   //   }
//   //   return false;
//   return number % 2 !== 0;
// });

// console.log(check);

//Kiểm tra 1 mảng có số lẻ hay không
//Dùng every

// var number = [2, 1, 4, 6, 8, 10];

// // var check = !number.every(function (number) {
// //   if (number % 2 === 0) {
// //     return true;
// //   }
// //   return false;
// // });

// // console.log(check);

// var check = number.some(function (number) {
//   return number % 2 !== 0;
// });

// console.log(check);

//KIểm tra 1 mảng số xem có phải tất cả các phần tử là số lẻ không

var number = [1, 3, 5, 7, 9];

var check = number.some(function (number) {
  return number % 2 === 0;
});

console.log(check);

//Vòng lặp filter

// var user = [
//   "Hoàng An",
//   "Dương Nguyễn",
//   "Sơn Đặng",
//   "Anh Quân",
//   "Hoàng Anh",
//   "Văn Quân",
// ];

// var keyworld = "quân";

// var result = user.filter(function (user) {
//   if (user.toLowerCase().includes(keyworld.toLowerCase())) {
//     return true;
//   }

//   return false;
// });

// console.log(result);

var customers = [
  ["Nguyễn Văn A", 30],
  ["Nguyễn Văn B", 19],
  ["Nguyễn Văn C", 25],
  ["Nguyễn Văn D", 24],
];

console.log(customers);

var minAge = 25;
var maxAge = 30;

var result = customers.filter(function (customers) {
  if (customers[1] >= minAge && customers[1] <= maxAge) {
    return true;
  }
  return false;
});

console.log(result);
