//Arrow Function

const getMessage = () => {
  return "Xin chào F8";
};

console.log(getMessage());

const getTotal = (a, b) => a + b;

console.log(getTotal(10, 20));

const getUser = () => ({
  name: "Hoang An",
  email: "hoangan@gmail.com",
});

console.log(getUser());
