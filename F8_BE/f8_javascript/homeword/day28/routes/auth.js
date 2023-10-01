var express = require("express");
var router = express.Router();

const AuthController = require("../controllers/AuthController");

router.get("/login", AuthController.index);
router.post("/login", AuthController.handleLogin);
router.get("/logout", AuthController.logout);
router.get("/signup", AuthController.signup);
router.post("/signup", AuthController.handleSignup);
router.get("/active/:token", AuthController.active);
module.exports = router;
