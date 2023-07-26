// function getA() {
//   setTimeout(function () {
//     console.log("getA");
//   }, 1000);
// }

// function getB() {
//   console.log("getB");
// }

/*
Xử lý bất đồng bộ

1.Callback Function
*/

function getA(fn) {
  setTimeout(function () {
    console.log("getA");
    fn();
  }, 1000);
}

function getB(fn) {
  setTimeout(function () {
    console.log("getB");
    fn();
  }, 1500);
}

function getC() {
  console.log("getC");
}

getA(function () {
  getB(getC);
});

// function getB(text) {
//   console.log("getB", text);
// }

// getA(function () {
//   getB("F8");
// });
