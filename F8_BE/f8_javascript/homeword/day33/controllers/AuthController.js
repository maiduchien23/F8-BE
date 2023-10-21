const bcrypt = require("bcrypt");
const model = require("../models/index");
const User = model.User;

module.exports = {
  login: async (req, res) => {
    const msg = req.flash("error");
    const success = req.flash("success");
    const msgType = msg ? "danger" : "success";
    res.render("auth/login", {
      pageTitle: "Đăng nhập",
      msg,
      msgType,
      success,
      layout: false,
    });
  },

  handleLogin: async (req, res) => {
    res.redirect("/links");
  },

  register: async (req, res) => {
    res.render("auth/register", { pageTitle: "Đăng ký", layout: false });
  },

  handleRegister: (req, res) => {
    const { name, email, password } = req.body;
    const salt = 10;

    bcrypt.hash(password, salt, async function (err, hash) {
      console.log(hash);
      const data = await User.create({
        name,
        email,
        password: hash,
      });

      if (data) {
        req.flash("success", "Đăng ký tài khoản thành công");
        res.redirect("/auth/login");
        return;
      }
      req.flash("msg", "Vui lòng kiểm tra lại thông tin");
      res.redirect("/auth/register");
    });
    return;
  },

  logout: (req, res, next) => {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/auth/login");
    });
  },
};
