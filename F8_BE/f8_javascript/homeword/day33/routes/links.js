var express = require("express");
var router = express.Router();

const LinkController = require("../controllers/LinkController");

const isLogout = (req, res, next) => {
  if (!req.user) {
    res.redirect("/auth/login");
  }
  next();
};

/* GET home page. */
router.get("/", isLogout, LinkController.index);
router.post("/", LinkController.create);

router.get("/manager", LinkController.manager);

router.get("/update/:id", LinkController.edit);
router.post("/update/:id", LinkController.update);

router.post("/delete/:id", LinkController.delete);

router.get("/:id", LinkController.getLink);

module.exports = router;
