console.log(Array.prototype);

var customers = ["An", "Đạt", "Tùng", "Dương"];
console.log(customers);
//at() => lấy phần tử theo index
//fill() => Thay thế tất cả phần tử trong mảng thành 1 giá trị
//indexOf() => Tìm phần tử trong mảng và trả về index
//lastIndexOf() => Tìm phần tử cuối
//include() => Tìm phần tử trong mảng và trả về true,false
//slice(start , end) => Cắt mảng
//toString() => Chuyển mảng về chuỗi và nối với nhau bỏi dấu ","
//join() => chuyển mảng về chuỗi, nối bằng ký tự truyền vào
//concat() => Nối mảng
var newArr = [1, 2, 3];
console.log(customers.concat(newArr));

//push() => Thêm phần tử vào cuối mảng
//- Trả về số lượng phần tử sau khi đã thêm
//-Thêm vào mảng ban đầu

//unshift() => Thêm phần tử vào đầu mảng
//- Trả về số lượng phần tử sau khi đã thêm
//-Thêm vào mảng ban đầu

//pop() => Xóa phần tử cuối mảng
//Trả về giá trị vừa xóa
//Thay đổi mảng ban đầu

//shift() => Xóa phần tử đầu mảng
//splice(index, number) => xóa number phần tử từ phần tử thứ index
//sort() => Sắp xếp tăng dần
//reverse() => Đảo ngược mảng

// customers.sort();
// customers = customers.reverse();

// console.log(customers);

var number = [5, 9, 1, 100, 2];

// number.sort(function (a, b) {
// //   return a - b;
// //   return a + b;
// //   if (b > a) {
// //     return 0;
// //   }
// //   return -1;
// âm đổi chỗ , dương giữ nguyên
// });

// console.log(number);

var customers = [
  "Tạ Hoàng An",
  "Nguyễn Văn Tuấn",
  "Phạm Ánh Dương",
  "Tạ Thị Lan",
];

var getFirstName = function (fullname) {
  return fullname.split(" ").slice(-1).at(0);
};

customers.sort(function (a, b) {
  if (getFirstName(b) < getFirstName(a)) {
    return -1;
  }
});
console.log(customers);
