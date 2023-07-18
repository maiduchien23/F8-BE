// Bai 1

function createCustomers(customers) {
  var newCustomers = customers.reduce(function (prev, customer) {
    var { name, age, address } = customer;
    var shortName = getShortName(name);

    prev.push({ name, age, address, shortName });

    return prev;
  }, []);

  newCustomers.sort(function (a, b) {
    return a.age - b.age;
  });

  return newCustomers;
}

function getShortName(name) {
  var words = name.split(" ");
  var lastName = words[words.length - 1];
  var firstName = lastName.charAt(0);
  return words[0] + " " + firstName;
}

const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

const result = createCustomers(customers);

console.log(result);

console.log(
  ".................................................................."
);

//Bai 2

function User(name, password, email) {
  this.name = name;
  this.password = password;
  this.email = email;
  this.role = "user";
}

const data = [];

function handleRegister(name, password, email) {
  if (!name || !password || !email) {
    console.log("Thông tin chưa đầy đủ.");
    return;
  }

  const existingUser = data.find((user) => user.email === email);
  if (existingUser) {
    console.log("Email đã được sử dụng.");
    return;
  }

  const newUser = new User(name, password, email);
  data.push(newUser);
  return newUser;
}

function handleLogin(email, password) {
  const user = data.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    return user;
  } else {
    console.log("Thông tin đăng nhập không hợp lệ.");
    return null;
  }
}

const dataRegister1 = handleRegister(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com"
);
const dataRegister2 = handleRegister(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com"
);
const dataLogin = handleLogin("nguyenvanb@email.com", "1234567");

console.log(data);
console.log(dataLogin);
