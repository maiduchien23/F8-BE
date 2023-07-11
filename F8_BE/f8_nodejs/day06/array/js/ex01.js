//Object, Function ==> Reference Type

//Array được phát triển từ object

//Xây dựng từ hàm tạo Array

// console.log(Array.prototype);

console.log([Array]);

/*
* Mảng là gì:
- Kiểu dữ liệu phức hợp
- Rất nhiều các giá trị, nhiều kiểu dưc liệu khác
- Mỗi giá trị gọi là Element
- Địa chỉ của giá trị dó gọi là index(Bắt đầu từ 0)

*/

// Khai báo mảng
var users = [];
// var customer = new Array(); //Khởi tạo giống Object

var customers = ["a", "b", "c", 1, 2, 3];

// console.log(users);
// console.log(customers);

//Lấy số lượng phần tử của mảng
var customerCount = customers.length;
console.log(customerCount);

//Kiểm tra 1 biến có phải mảng không
// var service = null;
// if (Array.isArray(service)) {
//   console.log("Mảng");
// } else {
//   console.log("Không phải mảng");
// }

//Thêm phần tử vào mảng

// customers[6] = "d";
customers[customers.length] = "e";
customers[customers.length] = "f";

//Sửa phần tử
// customers[0] = "aa";
console.log(customers);

// //Duyệt mảng
// //1. Dùng for
// for (var i = 0; i < customers.length; i++) {
//   console.log(customers[i]);
// }
// //2. Dùng for of
// for (element of customers) {
//   console.log(element);
// }
// //3.Dùng for in
// for (index in customers) {
//   console.log(index, customers[index]);
// }

//Xóa mảng
// var index = 1;
// var newArr = [];

// for (i in customers) {
//   if (parseInt(i) === parseInt(index)) continue; // if(+i === +index)
//   newArr[newArr.length] = customers[i];
// }
// customers = newArr;
// console.log(customers);

//chuỗi
var content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
var result = [];

for (var i = 0; i < content.length; i++) {
  var char = content.charAt(i);
  if (char === " ") continue;

  if (result[char] === undefined) {
    result[char] = 1;
  } else {
    result[char]++;
  }
}

for (char in result) {
  console.log(`Ký tự ${char} xuất hiện ${result[char]}`);
}
