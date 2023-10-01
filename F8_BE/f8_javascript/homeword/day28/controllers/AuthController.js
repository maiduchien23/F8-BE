const md5 = require("md5");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET || "jsonwebtoken-secret";

const models = require("../models/index");
const User = models.User;

module.exports = {
  index: async (req, res) => {
    const msg = req.flash("msg");
    const success = req.flash("success");
    res.render("auth/login", { msg, success });
  },

  handleLogin: async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email, password: md5(password) },
    });
    if (email !== "" && password !== "") {
      if (user?.dataValues) {
        console.log(user.dataValues.status);
        if (user.dataValues.status === 1) {
          req.session.login = true;
          req.session.userLogin = user.dataValues;
        } else {
          req.flash(
            "msg",
            "Tài khoản bạn chưa được kích hoạt!! Vui lòng vào email để kích hoạt"
          );
        }
      } else {
        req.flash("msg", "Email hoặc mật khẩu không chính xác");
      }
    } else {
      req.flash("msg", "Email và mật khẩu không được để trống");
    }

    res.redirect("/auth/login");
  },

  logout: (req, res) => {
    req.session.destroy();
    res.redirect("/auth/login");
  },

  signup: (req, res) => {
    const msg = req.flash("msg");
    const name = req.flash("name");
    const email = req.flash("email");
    const password = req.flash("password");
    const retype = req.flash("retype");
    res.render("auth/signup", { msg, name, email, password, retype });
  },

  handleSignup: async (req, res) => {
    const { name, email, password, retype } = req.body;
    if (password === retype) {
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (user?.dataValues) {
        req.flash("msg", "Tài khoản đã tồn tại");
        req.flash("name", name);
        req.flash("email", email);
        req.flash("password", password);
        req.flash("retype", retype);
        res.redirect("/auth/signup");
      } else {
        req.flash(
          "success",
          "Đăng ký thành công!! Vui lòng vào email để kích hoạt tài khoản"
        );
        User.create({
          name: name,
          email: email,
          password: md5(password),
        });
        const token = jwt.sign(req.body, secret);
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
            user: "nguyenhuukhai1303@gmail.com",
            pass: "jmlg uapn pshp ddmh",
          },
        });
        var mailOptions = {
          from: "nguyenhuukhai1303@gmail.com",
          to: "nguyenhuukhai1303@gmail.com",
          subject: "Kích hoạt tài khoản",
          text: "Vui lòng ấn vào link để kích hoạt tài khoản: ",
          html: `<p>Vui lòng ấn vào link để kích hoạt tài khoản:</p>
                    <a href='http://localhost:3000/auth/active/${token}'>Active tài khoản tại đây</a>`,
        };

        console.log(token);

        transporter.sendMail(mailOptions, function (error, response) {
          if (error) {
            console.log(error);
          } else {
            res.redirect("/auth/login");
          }
        });
      }
    } else {
      req.flash("msg", "Mật khẩu nhập lại không khớp");
      req.flash("name", name);
      req.flash("email", email);
      req.flash("password", password);
      req.flash("retype", retype);
      res.redirect("/auth/signup");
    }
  },

  active: async (req, res) => {
    const { token } = req.params;
    const data = jwt.verify(token, secret);
    const user = await User.findOne({
      where: { email: data.email, password: md5(data.password) },
    });
    console.log(user);
    user.dataValues.status = 1;
    console.log(user);
    User.update(user.dataValues, {
      where: {
        id: user.dataValues.id,
      },
    });
    req.session.login = true;
    req.session.userLogin = user.dataValues;
    res.redirect("/auth/login");
  },
};
