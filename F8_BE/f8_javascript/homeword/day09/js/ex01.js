//Bai 1

var categories = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];

var getCategories = function (categories, parentId = 0) {
  var newArray = [];
  for (var item of categories) {
    if (item.parent === parentId) {
      var children = getCategories(categories, item.id);
      if (children.length > 0) {
        item.children = children;
      }
      newArray.push(item);
    }
  }
  return newArray;
};
var nestedCategories = getCategories(categories);
console.log(nestedCategories);
//bai 2

Array.prototype.reduce2 = function (fun) {
  var len = this.length;

  if (typeof fun != "function") throw new TypeError();

  if (len === 0 && arguments.length === 1) throw new TypeError();

  var i = 0;
  if (arguments.length >= 2) {
    var rv = arguments[1];
  } else {
    do {
      if (i in this) {
        rv = this[i++];
        break;
      }

      if (++i >= len) throw new TypeError();
    } while (true);
  }
  for (; i < len; i++) {
    if (i in this) rv = fun.call(null, rv, this[i], i, this);
  }
  return rv;
};

var total = [0, 1, 2, 3, 4, 5].reduce2(function (a, b) {
  return a + b;
});
console.log("total is : " + total);

//bai 3
Array.prototype.filter2 = function (fun) {
  var len = this.length;
  if (typeof fun != "function") throw new TypeError();

  var result = new Array();
  var thisp = arguments[1];
  for (var i = 0; i < len; i++) {
    if (i in this) {
      var value = this[i];
      if (fun.call(thisp, value, i, this)) result.push(value);
    }
  }
  return result;
};
function isBigEnough(element, index, array) {
  return element >= 10;
}
var filtered = [12, 10, 4, 5, 140].filter2(isBigEnough);
console.log(filtered);

//bai 4

function getCurrency(number, currencyUnit) {
  if (typeof number !== "number" && !/^\d+$/.test(number)) {
    throw new Error("Đầu vào phải là một số hoặc một chuỗi chứa các chữ số.");
  }

  var numberValue = typeof number === "number" ? number.toString() : number;

  var formattedNumber = parseInt(numberValue, 10).toLocaleString("en-US");

  return formattedNumber + " " + currencyUnit;
}

var price1 = 12000;
console.log(getCurrency(price1, "đ")); // Hiển thị: 12,000 đ

var price2 = "12000000";
console.log(getCurrency(price2, "đ")); // Hiển thị: 12,000,000 đ
