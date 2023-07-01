var firstName = "Duc Hien";
var lastName = "Mai";

var fullName = firstName + " " + lastName;

console.log(fullName);

var a = 11;
var b = "11";
var check = a == b;

console.log(check);

var a = 21;
var a = 5;
var check = a <= 10 && !(a < 5 || a >= 10);

console.log(check);

// cú pháp: điều kiện ? giá trị đúng : giá trị sai;

var a = 10;
var b = a >= 5 ? "Thoa man dieu kien" : "Khong thoa man dieu kien";

console.log(b);

var show = `Kết quả = ${a >= 5 ? "ok" : " not ok"}`;
console.log(show);
