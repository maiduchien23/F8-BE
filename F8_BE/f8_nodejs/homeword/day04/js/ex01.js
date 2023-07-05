//Hiển thị só Fibonacci

function fibonacci(n) {
  var list = [];
  var a = 0,
    b = 1;

  for (var i = 0; i < n; i++) {
    list[i] = a;
    var temp = a + b;
    a = b;
    b = temp;
  }

  return list;
}

var n = 10;
var fibonacciList = fibonacci(n);

for (var i = 0; i < fibonacciList.length; i++) {
  console.log(fibonacciList[i]);
}

//Đảo ngược số nguyên
function reverseInteger(number) {
  let reversed = 0;
  let firnum = 1;

  if (number < 0) {
    firnum = -1;
    number *= -1;
  }

  while (number > 0) {
    reversed = reversed * 10 + (number % 10);
    number = (number / 10) | 0;
  }

  return reversed * firnum;
}

console.log(reverseInteger(12345));
console.log(reverseInteger(-98765));
console.log(reverseInteger(0));

// Chuyển số thành chữ

function chuyenSoThanhChu(so) {
  var chuSo = {
    0: "không",
    1: "một",
    2: "hai",
    3: "ba",
    4: "bốn",
    5: "năm",
    6: "sáu",
    7: "bảy",
    8: "tám",
    9: "chín",
  };

  if (so === 0) {
    return "không";
  }

  var chuoiChu = "";

  // Xác định hàng nghìn
  var hangNghin = ~~(so / 1000);
  if (hangNghin > 0) {
    chuoiChu += chuSo[hangNghin] + " nghìn ";
  }

  // Xác định hàng trăm
  so = so % 1000;
  var hangTramSo = ~~(so / 100);
  if (hangTramSo > 0) {
    chuoiChu += chuSo[hangTramSo] + " trăm ";
  }

  // Xác định hàng chục và đơn vị
  so = so % 100;
  if (so >= 10 && so <= 19) {
    chuoiChu += "mười " + chuSo[so % 10];
  } else {
    var hangChucSo = ~~(so / 10);
    if (hangChucSo > 0) {
      chuoiChu += chuSo[hangChucSo] + " mươi ";
    }

    var donViSo = so % 10;
    if (donViSo > 0) {
      chuoiChu += chuSo[donViSo];
    }
  }

  return chuoiChu;
}

var so = 5698;
var chuoiChu = chuyenSoThanhChu(so);
console.log(chuoiChu);
