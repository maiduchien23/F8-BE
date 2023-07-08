var email = "hoangan.web@gmail.com";

console.log(email.slice(0, email.indexOf("@")));

var password = "Hoangan@F8";

/*
Kiểm tra độ mạnh yếu mật khẩu (Không dùng Regex)

- Độ dài: >= 8
- Có ít nhất 1 chữ hoa
- Có ít nhất 1 chữ thường
- Có ít nhất 1 số
- Có ít nhất 1 ký tự đặt biệt


*/
var checkLength = false,
  checkUpper = false,
  checkLower = false,
  checkNumber = false,
  checkSymbol = false;

var number = "0123456789";
var symbol = "!@#$%^&*";

for (var i = 0; i < password.length; i++) {
  var char = password.charAt(index);

  if (number.includes(char)) {
    checkNumber = true;
  }
  if (symbol.includes(char)) {
    checkSymbol = true;
  }
  //   if (char >= "A" && char <= "Z") {
  //     checkUpper = true;
  //   }
  //   if (char >= "a" && char <= "z") {
  //     checkLower = true;
  //   }
  if (symbol.indexOf(char) === -1 && number.indexOf(char) === -1) {
    if (char == char.toUpperCase()) {
      checkUpper = true;
    }
    if (char == char.toLowerCase()) {
      checkLower = true;
    }
  }
}

if (checkLength && checkLower && checkNumber && checkSymbol && checkUpper) {
  console.log("Mật khẩu mạnh");
} else {
  console.log("Mật khẩu yếu");
}
