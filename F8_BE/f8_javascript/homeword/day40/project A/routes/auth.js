const express = require("express");
const passport = require("passport");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const guestMiddleware = require("../middlewares/guest.middleware");
const jwt = require("jsonwebtoken");
const mail = require("../utils/mail");

router.get("/login", guestMiddleware, authController.login);

router.post("/login", (req, res, next) => {
  passport.authenticate("local-mfa", (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      if (info.message === "Người dùng không tồn tại.") {
        return res.status(400).send(info.message);
      }
      return res.status(401).send("Email hoặc mật khẩu không chính xác.");
    }

    if (user.mfaSecret) {
      const secret = req.body.secret;
      if (secret !== user.mfaSecret) {
        return res.status(401).send("Mã xác minh 2 bước không chính xác.");
      }
    }

    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }

      if (req.query.redirect) {
        res.redirect("/auth/redirect?url=" + req.query.redirect);
        return;
      }

      res.redirect("/");
    });
  })(req, res, next);
});

router.get("/redirect", (req, res) => {
  const cookie = req.cookies["connect.sid"];
  res.redirect(req.query.url + "?cookie=" + cookie);
});

router.post("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      next();
    }
    res.redirect("/auth/login");
  });
});

module.exports = router;
