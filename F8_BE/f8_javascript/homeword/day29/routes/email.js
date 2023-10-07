var express = require("express");
var router = express.Router();

const EmailController = require("../controllers/EmailController");

/* GET home page. */
router.get("/", EmailController.index);
router.post("/", EmailController.handleEmail);
router.get("/history", EmailController.history);
router.get("/content/:id", EmailController.content);
router.get("/track/this/image/:id", EmailController.openEmail);

module.exports = router;
