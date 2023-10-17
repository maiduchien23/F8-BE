const passport = require("passport");

module.exports = {
  login: async (req, res) => {
    const error = req.flash("error");

    if (error[0] === "Missing credentials") {
      error[0] = "Vui lòng điền đầy đủ thông tin";
    }

    res.render("login/index", { error });
  },

  handleLogin: async (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        return res.render("login/index", { error: err.message });
      }

      if (!user) {
        return res.render("login/index", {
          error: "Đăng nhập không thành công",
        });
      }

      req.login(user, (err) => {
        if (err) {
          return next(err);
        }

        return res.redirect("/roles");
      });
    })(req, res, next);
  },
};
