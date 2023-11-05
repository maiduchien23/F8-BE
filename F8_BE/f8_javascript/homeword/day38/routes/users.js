const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.get("/", async (req, res) => {
  UserController.getUsers(req, res);
});

module.exports = router;
