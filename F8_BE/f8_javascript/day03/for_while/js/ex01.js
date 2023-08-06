// for (var i = 1; i <= 10; i += 3) {
//   console.log(`F8 ${i}`);
// }

// for (var i = 10; i >= 1; i -= 4) {
//   console.log(`F8 ${i}`);
// }

// for (var i = 1; i <= 5; i++) {
//   for (var j = 1; j <= 5; j++) {
//     for (var k = 1; k <= 5; k++) {
//       console.log(`i = ${i} - j = ${j} - k = ${k}`);
//     }
//   }
// }

// var n = 20;
// var total = 0;
// for (var i = 1; i <= n; i += 2) {
//   total += i;
// }

// console.log(total);

// var n = 5;
// var total = 0;
// var factorial = 1;
// for (i = 1; i <= n; i++) {
//   factorial *= i;
//   total += factorial;
// }

// console.log(total);

var n = 3;
check = true;

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
  console.log(`${n} la so nguyen to`);
} else {
  console.log(`${n} khong la so nguyen to`);
}
