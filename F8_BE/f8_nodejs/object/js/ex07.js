// var a = {
//   name: "Hoang An",
//   age: 31,
// };

// // var b = a;
// //var b = Object.assign({}, a);
// var b = { ...a }; //Spread Operator
// b.name = "Hoang An F8";

// console.log(a);

// var c = ["Hoang An", 31];
// var d = c;
// d[0] = "Hoang An F8";

// console.log(c);
// Viết 1 vòng lặp mới có tên map2 hoạt động như map 1
Array.prototype.map2 = function (callback) {
  var result = [];
  for (var i = 0; i < this.length; i++) {
    result[result.length] = callback(this[i], i);
  }
  return result;
};

var users = ["Item 1", "Item 2", "Item 3"];

var result = users.map2(function (user, index) {
  console.log(user, index);
  return `<p>${user}</p>`;
});

console.log(result);
