// Rest Parameters

var getTotal = function (msg, isShow = true, ...args) {
  var total = 0;
  for (var i = 0; i < args.length; i++) {
    total += args[i]; //tenbienmang[chiso]
  }

  if (isShow) {
    return `${msg}${total}`;
  }

  return total;
};

var result = getTotal("Ket qua = ", true, 1, 3, 5, 7, 9);

console.log(result);

var getMax = function (...args) {
  if (args.length) {
    var max = args[0];
    for (var i = 1; i < args.length; i++) {
      if (max < args[i]) {
        max = args[i];
      }
    }
    // Ky thuat dat linh canh
    return max;
  }
};

var max = getMax(5, 10, 20, 4);
console.log(`Gia tri lon nhat la : ${max}`);
