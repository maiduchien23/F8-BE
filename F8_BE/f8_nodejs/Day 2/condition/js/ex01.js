// Câu lệnh rẽ nhánh

/*
1. if else

if (condition){
    body
}

if (condition){
    
}else{

}

if (condition){
    
}else if{

}else if{

}else{

}

2. swith case 

*/

var age = 18;
if (age >= 18) {
  console.log("Đủ tuổi");
} else {
  console.log("Chưa đủ tuổi");
}

var number = 6;
if (number < 0) {
  console.log("So am");
} else if (number >= 0 && number < 5) {
  console.log("So nho");
} else if (number >= 5 && number < 10) {
  console.log("So trung binh");
} else {
  console.log("So lon");
}

var luong_co_ban;
var thue;
var thu_nhap;

if (luong_co_ban > 0) {
  if (luong_co_ban <= 5000000) {
    thue = 5;
  } else if (luong_co_ban > 5000000 && luong_co_ban <= 10000000) {
    thue = 7;
  } else {
    thue = 10;
  }

  thu_nhap = luong_co_ban - (thue * luong_co_ban) / 100;

  console.log(thu_nhap);
} else {
  console.log("Khong co luong");
}

// switch case
/*
- chỉ chấp nhận biểu thức logic
- 
*/

var action;

// switch (action) {
//   case "add":
//     console.log("Thêm");
//     break;
//   case "update":
//     console.log("Sửa");
//     break;
//   case "delete":
//     console.log("Xóa");
//     break;
//   default:
//     break;
// }

// if (action === "add" || action === "create" || action === "insert") {
//   console.log("Thêm");
// } else if (action === "update" || action === "edit") {
//   console.log("Sửa");
// } else if (action === "delete" || action === "remove" || action === "destroy") {
//   console.log("Xóa");
// } else {
//   console.log("Xem");
// }

//Bài tập: Cho trước 1 tháng, năm => hiển thị xem tháng đó có bao nhiêu ngày?

/*
Tháng 31 ngày: 1, 3, 5, 7, 8, 10, 12
Tháng 30 ngày: 4, 6, 9, 11
Tháng 28, 29 ngày: 
+ 28 ngày: năm không chia hết cho 4
+ 29 ngày: năm chia hết cho 4

Yêu cầu ràng buộc: năm và tháng phải hợp lệ
- Số nguyên
- Tháng từ 1 đến 12


*/

var month = 10;
var year = 2023;
var days;

if (month % 1 === 0 && year % 1 === 0 && month > 0 && year <= 12) {
  switch (month) {
    case 2:
      if (year % 4 === 0) {
        days = 29;
      } else {
        days = 28;
      }
      break;

    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;

    default:
      days = 31;
      break;
  }
  if (days) {
    console.log(`Tháng ${month} trong năm ${year} có ${days} ngày`);
  }
} else {
  console.log(`Dữ liệu không hợp lệ`);
}

var a = 10.2;
// if (a === (a - (a % 1))) {
//     console.log(`Số nguyên`);
// } else {
//     console.log(`Không phải số nguyên`);
// }

if (Number.isInteger(a)) {
  console.log(`Số nguyên`);
} else {
  console.log(`Không phải số nguyên`);
}

if (a === parseInt(a)) {
  console.log(`Số nguyên`);
} else {
  console.log(`Không phải số nguyên`);
}
