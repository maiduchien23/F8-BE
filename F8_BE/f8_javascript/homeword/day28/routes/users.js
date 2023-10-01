var express = require("express");
var router = express.Router();

const models = require("../models/index");

/* GET users listing. */
router.get("/lay-user", async (req, res) => {
    const user = await User;
});

module.exports = router;
