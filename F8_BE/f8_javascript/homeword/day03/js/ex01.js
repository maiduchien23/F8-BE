// Tìm số chẵn lẻ

var n = 10;

var oddNumbers = "";
var evenNumbers = "";

for (var i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    evenNumbers += i + ", ";
  } else {
    oddNumbers += i + ", ";
  }
}

console.log("Số lẻ: " + oddNumbers);
console.log("Số chẵn: " + evenNumbers);

// Tính giá trị biểu thức

function sum(n) {
  var total = 0;
  for (var i = 1; i <= n; i++) {
    total += i * (i + 1);
  }
  return total;
}

console.log(sum(5));

// Tính tổng chẵn lẻ

var a = 5,
  b = 9;
var evenTotal = 0;
var oldTotal = 0;

for (var i = a; i <= b; i++) {
  if (i % 2 === 0) {
    evenTotal += i;
  } else {
    oldTotal += i;
  }
}

console.log("Tổng số lẻ:", oldTotal);
console.log("Tổng số chẵn:", evenTotal);

// Hàm kiểm tra số nguyên tố

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

var number = 6;

if (isPrime(number)) {
  console.log(number + " là số nguyên tố");
} else {
  console.log(number + " không là số nguyên tố");
}

// Tính giá trị biểu thức

function sum(N) {
  if (N === 1) {
    return 1;
  } else {
    return 1 / N + sum(N - 1);
  }
}

var N = 5;
var result = sum(N);

console.log(`Giá trị biểu thức là : ${sum(N)}`);
