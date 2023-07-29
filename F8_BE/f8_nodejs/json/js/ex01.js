users = [
  {
    id: 1,
    name: "Hoang An",
  },

  {
    id: 2,
    name: "Quan",
  },

  {
    id: 3,
    name: "Tuan",
  },
];
console.log(users);

var usersJson = JSON.stringify(users);
console.log(usersJson);

//Chuyen Json thanh Array, Object
var user2 = JSON.parse(usersJson);
console.log(user2);

console.log(JSON);
