const product1 = {
  name: "Nồi cơm điện",
  price: 1299000,
  priceUnit: "đ", // đ, usd
  discount: 30,
  discountUnit: "%", // %, price,
  getPrice: function () {
    // Tính ra giá sản phẩm sau giảm giá
    if (this.discountUnit === "%") {
      return this.price - (this.price * this.discount) / 100;
    }
    if (this.priceUnit === "price") {
      return this.price - this.discount;
    }

    return this.price;
  },
  getPrice: function () {
    return this.getPrice() + this.priceUnit;
  },
};

const product2 = {
  name: "Nồi cơm điện",
  price: 1299000,
  priceUnit: "đ", // đ, usd
  discount: 300000,
  discountUnit: "price", // %, price,
  getPrice: function () {
    // Tính ra giá sản phẩm sau giảm giá
  },
};
