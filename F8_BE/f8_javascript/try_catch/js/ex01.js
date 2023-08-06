console.log("Bước 1");
console.log("Bước 2");
try {
  var a = 10;
  console.log(a);
  if (a < 15) {
    throw new Error("a phải từ 15 trở lên");
  }
} catch (exception) {
  console.log(exception.message);
} finally {
  console.log("Xong");
}
console.log("Bước 3");
