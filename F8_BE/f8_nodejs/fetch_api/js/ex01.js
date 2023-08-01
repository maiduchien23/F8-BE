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
var data = {
  name: "Hoàng An",
  email: "contact@fullstack.edu.vn",
};

postData();


//x-www-form-urlencoded: name=Hoàng An&email=contact@fullstack.edu.vn
/*
POST dữ liệu lên SERVER

1. Url
2. Method
3. Headers
- Content-Type
4. Body (Data)
*/

var getLocation = async function () {
  var res = await fetch(
    "https://ipfind.co/me?auth=50e887ce-e3bb-4f00-a9b9-667597db5539",
  );
  var data = await res.json();
  console.log(data);
};

getLocation();

/*
Xác thực API

1. API Key
2. Bearer Token
3. OAuth 2.0
*/