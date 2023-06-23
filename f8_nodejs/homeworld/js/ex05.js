var a = 5;
var b = 3;
var c = 2;

if (a > b) {
  [a, b] = [b, a];
}

if (b > c) {
  [b, c] = [c, b];
}

if (a > b) {
  [a, b] = [b, a];
}

console.log(`Thứ tự tăng dần là :  ${a}, ${b}, ${c}`);
