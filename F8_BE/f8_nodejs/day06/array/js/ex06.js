//Vòng lặp reduce

// var number = [1, 3, 5, 7, 9];

// var result = number.reduce(function (prevValue, curentValue) {
//   console.log(`prev = ${prevValue}`, `Current = ${prevValue + curentValue}`);
//   return prevValue + curentValue;
// });

// console.log(result);

// var number = [2, 5, 9, 1, 8];

// var result = number.reduce(function (a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// });

// console.log(result);

// Tìm phần tử khác nhau giữa 2 mảng

var arr1 = [1, 2, 5, 9];
var arr2 = [2, 5];

var diff = arr1.reduce(function (prev, current) {
  if (!arr2.includes(current)) {
    prev.push(current);
  }

  return prev;
});

console.log(diff);
