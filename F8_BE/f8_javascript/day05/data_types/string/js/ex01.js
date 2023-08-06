//Khai báo kiểu chuỗi
//- Kiểu dữ liệu nguyên thủy
//- Kiểu dữ liệu của một biến =. Dùng từ khóa typeof
// Hàm tạo = Funciton Contructor
//Truy cập vào phương thức , thuộc tính

var fullname = "Mai Đức Hiền";
var fullname2 = String("Mai Đức Hiền"); //gán thông qua hàm tạo
var fullname3 = new String("Mai Đức Hiền");

// console.log(fullname);
// console.log(fullname, typeof fullname);
// console.log(fullname2, typeof fullname2); //gán thông qua hafmm tạo
// console.log(fullname3, typeof fullname3);

// if(typeof fullname === 'string'){
//     console.log('Đây là kiểu chuỗi');
// }

console.log(String.prototype);
// console.log(fullname.length);

//charAt(index) => Lấy từng ký tự trong chuỗi theo Index(index bắt đầu từ 0)
//charCodeAt(index) => Trả về mã ascii của ký tự

var str = "  Học F8 lập trình tại F8";
console.log(str);
// console.log(str.slice(1, 7));

// console.log(str.indexOf("F8"));
// console.log(str.lastIndexOf("F8"));

console.log(str.includes("F8"));
console.log(str.replaceAll("F8", "F88"));
console.log(str.trimStart());
console.log(str.trimEnd());
console.log(str.split(" "));
