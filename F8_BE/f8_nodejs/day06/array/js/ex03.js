var customers = ["An", "Tùng", "Tuấn", "Dương"];

customers.forEach(function (customer, index) {
  console.log(customer, index);
});

var newArr = customers.map(function (customer, index) {
  return `<h2>${customer}</h2>`;
});

var html = newArr.join(" ");
document.write(html);
