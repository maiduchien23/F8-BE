function getA() {
  var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      var data = "getA";
      resolve(data); // chạy khi then()
      reject("Lỗi");
    }, 1000);
  });
  return myPromise;
}

function getB() {
  console.log("getB");
}

getA().then(function (response) {
  console.log(response);
  getB();
});
getA().catch(function (error) {
  console.log(error);
});

//Promise Status

//1. pending
//2. fulfilled
//3. reject
