const md5 = require("md5");

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
                req.session.login = true;
                req.session.userLogin = user.dataValues;
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
                req.flash("success", "Đăng ký thành công");
                User.create({
                    name: name,
                    email: email,
                    password: md5(password),
                });
                res.redirect("/auth/login");
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
};
