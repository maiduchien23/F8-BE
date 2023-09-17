const AuthController = require("../controllers/AuthController");

var express = require("express");
var router = express.Router();

router.get("/login", AuthController.index);
router.post("/login", AuthController.handleLogin);
router.get("/logout", AuthController.logout);
router.get("/signup", AuthController.signup);
router.post("/signup", AuthController.handleSignup);

module.exports = router;
