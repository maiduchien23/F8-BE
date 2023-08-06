var User = function () {
  this.name = "Hoang An";
};

var Customer = function () {
  this.name = "Hien";
};

var user = new Customer();

console.log(user.constructor.name);

var products = [
  false,
  null,
  ["sản phẩm 1"],
  {
    name: "Nồi cơm điện",
    price: 20000,
  },
  {
    name: "Tủ Lạnh",
    price: 50000,
  },
  {
    name: "Bếp Gas",
    price: 30000,
  },
];

var result = {};

products.forEach(function (product) {
  if (
    typeof product === "object" &&
    !Array.isArray(product) &&
    product !== null
  ) {
    if (!Object.keys(result).length) {
      result = product;
    } else {
      if (result.price < product.price) {
        result = product;
      }
    }
  }
});

console.log(result);
