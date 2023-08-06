//Async function
// var getA = function () {
//   return new Promise(function (resolve, eject) {
//     setTimeout(function () {
//       resolve("Xin chao F8");
//       //eject("Error 500");
//     }, 1000);
//   });
// };

// var getB = function () {
//   return "Hien thi ket qua";
// };
// var showResult = async function () {
//   try {
//     var response = await getA();
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
//   var response2 = getB();
//   console.log(response2);
// };

// showResult();

var getA = function () {
  return new Promise(function (resolve, eject) {
    setTimeout(function () {
      resolve("get A");
    }, 1000);
  });
};
var getB = function () {
  return new Promise(function (resolve, eject) {
    setTimeout(function () {
      resolve("get B");
    }, 1000);
  });
};
var getC = function () {
  return new Promise(function (resolve, eject) {
    setTimeout(function () {
      resolve("get C");
    }, 1000);
  });
};

var showResult = async function () {
  var response = await getA();
  console.log(response);
  var response2 = await getB();
  console.log(response2);
  var response3 = await getC();
  console.log(response3);
};

showResult();
