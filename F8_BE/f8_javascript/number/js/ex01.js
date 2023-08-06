// var age = 31;

// //1. Chuyển số thành chuỗi

// console.log(age.toString(16));
// //Hệ nhị phận (2)
// //Hệ thập phân (10)
// //Hệ bát phân(8)
// //Hệ thập nhị phân(16)

// //2. Số infinity
// //=> Số vượt quá mức lưu trữ cho phép
// var number = 100;
// var result = 0;
// while (number != Infinity) {
//   result = number;
//   number *= number;
// }
// console.log(number);
// console.log(result);

// //3. NaN

// var a = 1;
// var b = "a";

// var result = a * b;

// console.log(result);

// if (isNaN(result)) {
//   console.log("Kết quả không hợp lệ");
// }

// //4. Ép kiểu
// var a = "1.5";
// var b = 2;

// // var result = parseInt(a) + parseInt(b);
// //var result = +a + +b;
// var result = parseFloat(a) + parseFloat(b);

// console.log(result);

// //5. Kiểm tra kiểu số
// //5.1 Kiểm tra kiểu số nói chung

// var number = 40.6;

// // if (typeof number === "number") {
// //   console.log("đây là số");
// // }

// //5.2 Kiểm tra kiểu só nguyên

// // if (Number.isInteger(number)) {
// //   console.log("Kiểu số nguyên");
// // }

// //5.3 Kiểm tra kiểu số thực

// if (typeof number === "number" && parseInt(number) !== number) {
//   console.log("Số thực");
// }

// //6. Làm tròn

// var number = 20.57;

// console.log(number.toFixed(1));

// //7. Định dạng số

// var price = 12000000;
// console.log(price.toLocaleString());

//Bổ sung liên quan đến hàm

function getA(text) {
  console.log(`getA ${text}`);
}

var getB = getA;

getB("F8");
