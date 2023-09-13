var express = require("express");
const loginController = require("../controller/loginController");
var router = express.Router();

/* GET home page. */
router.get("/", loginController.login);
router.post("/", loginController.handleLogin);

module.exports = router;
