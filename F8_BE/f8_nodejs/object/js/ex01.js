var newKey = "walk";

const user = {
  name: "Mai Duc Hien",
  age: 20,
  address: "Ha Noi",
  [newKey]: function () {
    console.log("Walking...");
  },
};
user[newKey]();
console.log(user);

const course = {
  name: "Nodejs",
  price: 1500000,
  address: "Ha Noi",
};
var newKey = "Frontcamera";
const phone = {
  name: "Iphone 14",
  price: 2000000,
  color: "black",
  [newKey]: "12px",
};

phone.memory = "128";
phone["type"] = "plus";

console.log(phone);

//các cách truy cập vào giá trị của 1 object:
//1. object.key
//2. object['key']
//3. object[value]
var keyName = "name";

console.log(user.name);
console.log(course["name"]);
console.log(phone[keyName]);

console.log(`Đây là khóa học ${course.name}, có giá ${course.price}`);

//Cách thêm dữ liệu vào 1 Object

//1. object.newKey = 'New value";
//2. object.['newKey'] = 'New value";
// var newKey = ''
//3. object.[newKey] = 'New value";
//4.
