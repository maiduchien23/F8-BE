class User {
  //Định nghĩa các thuộc tính
  constructor() {
    //Phương thức này sẽ chạy đầu tiên khi khởi tạo
    console.log("Constructor...");

    this.name = "Hoang An";
    this.email = "hoangan@gmail.com";
  }

  //Định nghĩa các phương thức

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }
}

class Auth extends User {
  getInfo() {
    return `Name: ${this.getName()} - Email: ${this.getEmail()}`;
  }
}
//Khởi tạo đối tượng
// const user = new User("Hoang An", "hoangan@gmail.com");

// console.log(user);
// console.log(user.name);
// console.log(user.getName());

const auth = new Auth("Hoang An", "hoangan@gmail.com");
console.log(auth.getInfo());
