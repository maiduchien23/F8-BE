var express = require("express");
var router = express.Router();

const fakeUser = {
  email: "admin@gmail.com",
  password: "123456",
};

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/login", function (req, res, next) {
  res.render("login", { error: req.query.error });
});

router.post("/login", function (req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    res.redirect("/login?error=empty");
  } else if (email === fakeUser.email && password === fakeUser.password) {
    req.session.isAuthenticated = true;
    res.redirect("/home");
  } else {
    res.redirect("/login?error=invalid");
  }
});

router.get("/home", function (req, res, next) {
  if (req.session.isAuthenticated) {
    res.render("home");
  } else {
    res.redirect("/login");
  }
});

router.get("/logout", function (req, res, next) {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

module.exports = router;
