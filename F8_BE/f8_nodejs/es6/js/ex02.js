//1.Spread Operator

// const courses = {
//   courseName: "Fullstack",
//   coursePrice: 2000000,
// };

// const users = {
//   name: "Hoang An",
//   email: "Hoangan@gmail.com",
//   ...courses,
// };

//const users2 = { ...users };
// const users2 = JSON.parse(JSON.stringify(users));
// console.log(users);
// console.log(users2);

//2.Enhanced Object Literals

// const name = "Hoang An";
// const email = "hoangan@gmail.com";
// const address = "Ha Noi";
// const job = undefined;

// const users = {
//   name,
//   email,
//   location: address,
//   job,
// };

// console.log(users);

// const getMessage = function (opt) {
//   console.log(opt);
// };

// const username = "Hoang An";
// const email = "hoangan@gmail.com";

// getMessage({
//   username,
//   email,
// });

//3.Optional Chaining (?.)
// const users = null;

// console.log(users?.name);

const users = ["An", "Anh"];

if (users?.length) {
  console.log("Có phần tử");
  users.forEach?.(function (user) {
    console.log(user);
  });
} else {
  console.log("Không có");
}
