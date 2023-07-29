//Fetch API

/*
1. Server URL
2. Method
3 .Header
4. Authorization
*/

// var severUrl = "https://jsonplaceholder.typicode.com/posts";

// //Method: GET

// //fetch() => Tra ve 1 promise
// fetch(severUrl)
//   .then(function (response) {
//     // Tra ve response
//     return response.json();
//   })
//   .then(function (data) {
//     // Tra ve data
//     console.log(data);
//   });

// var getPosts = async function () {
//   var res = await fetch(severUrl);
//   console.log(res);
//   var posts = await res.json();
//   console.log(posts);
// };

// getPosts(0);

var severUrl = "https://jsonplaceholder.typicode.com/posts";
var postData = async function (data) {
  var res = await fetch(severUrl, {
    method: "POST",
    headers: {
      "Contact-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  console.log(res);

  var data = await res.json();
  console.log(data);
};

postData();
