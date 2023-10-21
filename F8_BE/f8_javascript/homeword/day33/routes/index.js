var express = require("express");
const LinkController = require("../controllers/LinkController");
var router = express.Router();

const isLogout = (req, res, next) => {
    if (!req.user) {
        res.redirect("/auth/login");
    }
    next();
};

/* GET home page. */
router.get("/", isLogout, LinkController.index);

module.exports = router;
