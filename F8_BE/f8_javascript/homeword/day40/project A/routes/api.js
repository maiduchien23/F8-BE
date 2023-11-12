const express = require("express");
const session = require("express-session");
const authz = require("express-authz");
const router = express.Router();
const userModel = require("../models/user");

const sessionConfig = {
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
};
router.use(session(sessionConfig));
const authzConfig = {
  users: userModel,
  properties: ["id", "name", "email", "currentDevice"],
};
router.use(authz(authzConfig));

router.get("/users", (req, res) => {
  if (!req.isAuthenticated()) {
    res.status(401).send("Bạn cần đăng nhập để truy cập.");
    return;
  }
  const currentDeviceId = req.session.currentDevice;

  if (req.user.currentDevice !== currentDeviceId) {
    res.status(401).send("Bạn đã đăng nhập trên thiết bị khác.");
    return;
  }
  const users = userModel.findAll();
  res.json(users);
});
router.post("/auth/status", (req, res) => {
  if (!req.isAuthenticated()) {
    res.status(401).send("Bạn cần đăng nhập để truy cập.");
    return;
  }
  res.json({
    status: "success",
    user: req.user,
  });
});

router.get("/auth/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
