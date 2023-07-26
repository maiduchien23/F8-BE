//Bài 1

function isValidNumber(number) {
  return typeof number === "number" && !isNaN(number) && isFinite(number);
}

function sumExpression(...args) {
  var sum = 0;
  for (var i = 0; i < args.length; i++) {
    if (!isValidNumber(args[i])) {
      throw new Error("Đầu vào không hợp lệ");
    }
    sum += args[i];
  }
  return sum;
}

try {
  console.log(sumExpression(1, 2, 6));
} catch (error) {
  console.error(error.message);
}

//Bài 2

//1. callback function

function openFile(callback) {
  setTimeout(() => {
    console.log("File đã được mở");
    callback();
  }, 2000);
}

function readFile(callback) {
  setTimeout(() => {
    console.log("F8 - Học lập trình để đi làm");
    callback();
  }, 1000);
}

function closeFile() {
  setTimeout(() => {
    console.log("File đã đóng");
  }, 1000);
}

openFile(() => {
  readFile(() => {
    closeFile();
  });
});

//2. Promise

function openFile() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("File đã được mở");
      resolve();
    }, 2000);
  });
}

function readFile() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("F8 - Học lập trình để đi làm");
      resolve();
    }, 1000);
  });
}

function closeFile() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("File đã đóng");
      resolve();
    }, 1000);
  });
}

openFile()
  .then(() => readFile())
  .then(() => closeFile());
