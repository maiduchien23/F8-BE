//Bai 1

var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

var same = arrA.filter(function (prev) {
  return arrB.includes(prev);
});

console.log(same);

//Bai 2

var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

var newArr = arr.flat(Infinity);
console.log(newArr);

//Bai 3

var arr = [
  ["a", 1, true],
  ["b", 2, false],
];

var newArr = arr.reduce(function (prev, current) {
  current.forEach(function (value, index) {
    if (!prev[index]) {
      prev[index] = [];
    }
    prev[index].push(value);
  });
  return prev;
}, []);

console.log(newArr);
