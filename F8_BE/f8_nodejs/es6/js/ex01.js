/*
Khai báo biến: let, const

Scope

1. Global Scope

2. Local Scope

- Block Scope: if, switch, for, while,...
- Function Scope: function
*/

// function getMsg() {
//   //Function Scope
//   var a = 10;

//   if (a >= 10) {
//     //Block Scope
//     var b = 20;
//   }

//   for (var i = 1; i <= 5; i++) {
//     //Block Scope
//   }
// }

// var a = 10;
// if (a >= 10) {
//   let b = 20;
//   console.log(b);
//   if (b >= 20) {
//     console.log(b);
//   }
// }

// console.log(b);

// for (let i = 1; i <= 5; i++) {
//   console.log(`i = ${i}`);
// }

// console.log(i);

function getMsg() {
  let a = 10;
  let b = 1;

  if (b >= 0) {
    let a = 20;
    console.log(a);
  }

  console.log(a);
}

getMsg();

/*
  const: Giống let nhưng không thay đổi được giá trị
  */

function getTotal(a, b) {
  const total = a + b;
  //   total = 10;
  console.log(total);
}

getTotal(1, 2);

// const users = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };

// users.name = "Hoàng An F8";

// console.log(users);

//1. Dustructuring

const users = {
  name: "Hoang An",
  email: "hoangan.web@gmail.com",
  age: 31,
  address: "Nam Tu Liem - Ha Noi",
  province: undefined,
};

const { name: username, email, province = "Ha Noi", ...rest } = users;

// console.log(username);
// console.log(email);
// console.log(province);
// console.log(rest);

const customers = ["Hoang An", "hoangan.web@gmail.com", 31, "Ha Noi"];

const [customerName, customerEmail, ...last] = customers;
console.log(`Name: ${customerName}`);
console.log(`Email: ${customerEmail}`);
console.log(`Last:`, last);

const getMessage = function ({ name, email }) {
  console.log(name, email);
};

getMessage({
  name: "Hoang An",
  email: "hoangan.web@gmail.com",
});

const posts = [
  {
    id: 1,
    title: "Bai 1",
  },
  {
    id: 2,
    title: "Bai 2",
  },
  {
    id: 3,
    title: "Bai 3",
  },
];

const html = posts
  .map(function ({ id, title: postTitle }) {
    return `<h3>${id} - ${postTitle}</h3>`;
  })
  .join("");

document.write(html);
