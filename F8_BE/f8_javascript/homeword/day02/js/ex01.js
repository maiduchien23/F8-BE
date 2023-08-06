// Tinh tien taxi

var price = 13500;
var klm = 4;

if (klm > 0) {
  if (klm <= 1) {
    price = 15000;
  } else if (klm > 1 && klm <= 5) {
    price = 13500;
  } else {
    price = 11000;
  }

  var receive = price * klm;

  if (klm > 120) {
    receive -= receive * 0.1;
  }

  console.log(`Gia cước là : ${receive}`);
}

// Tính tiền điện

var kWh = 49;
var money = 1678;

if (kWh > 0) {
  if (kWh < 50) {
    money = 1678;
  } else if (kWh > 51 && kWh < 100) {
    money = 1734;
  } else if (kWh > 101 && kWh < 200) {
    money = 2014;
  } else if (kWh > 201 && kWh < 300) {
    money = 2536;
  } else if (kWh > 301 && kWh < 400) {
    money = 2834;
  } else {
    money = 2927;
  }

  var pay = kWh * money;

  console.log(`Số tiền phải đóng là : ${pay}`);
}

// tính giai thừa

var N = 5;
var result = 1;
for (var i = 1; i <= N; i++) {
  result *= i;
}

console.log(`Giai thừa của ` + N + ` là: ` + result);

// Kiểm tra số nguyên tố

var n = 4;
var check = true;
if (n <= 1) {
  check = false;
} else {
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      check = false;
      break;
    }
  }
}

if (check) {
  console.log(n + ` ` + `là số nguyên tố`);
} else {
  console.log(n + ` ` + `không là số nguyên tố`);
}
