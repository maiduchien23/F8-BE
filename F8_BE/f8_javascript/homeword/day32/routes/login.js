const express = require("express");
const router = express.Router();
const LoginController = require("../controllers/LoginController");

const isLogin = (req, res, next) => {
  if (req.user) {
    res.redirect("/roles");
    return;
  }
  next();
};

router.get("/", isLogin, LoginController.login);

router.post("/", LoginController.handleLogin);

module.exports = router;
