var express = require("express");
const md5 = require("../utils/md5");
const User = require("../model/user");
var app = express();

module.exports = {
  login: (req, res) => {
    const errE = "";
    const errP = "";
    res.render("../views/login", { errE, errP });
  },

  handleLogin: async (req, res) => {
    const user = await User;

    const { email, password } = req.body;
    const project = await user.findOne({ where: { email: email } });

    if (project) {
      if (email === project.email && md5(password) === project.password) {
        res.redirect("/");
      } else if (md5(password) !== project.password) {
        const errE = "";
        const errP = "Nhập sai mật khẩu";
        res.render("../views/login", { errE, errP });
      }
    } else if (email) {
      const errE = "Nhập sai email";
      const errP = "";
      res.render("../views/login", { errE, errP });
    } else {
      errE = "Hãy nhập email";
      errP = "Hãy nhập password";
      res.render("../views/login", { errE, errP });
    }
  },
};
