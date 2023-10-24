var express = require("express");
var router = express.Router();
const UserController = require("../controllers/UserController");

const authMiddleware = require("../middlewares/authMiddleware");
const accessMiddleware = require("../middlewares/accessMiddleware");
const rateLimit = require("../middlewares/rateLimit");

/* GET users listing. */
router.get("/", UserController.index);
router.get("/:id", UserController.view);
router.post("/", UserController.store);
router.put("/:id", rateLimit, UserController.update);
router.patch("/:id", rateLimit, UserController.update);
router.delete("/:id", rateLimit, UserController.destroy);

router.get(
  "/api/secure-endpoint",
  authMiddleware.authenticateSession,
  accessMiddleware.checkAccess,
  (req, res) => {
    res.json({ message: "Authorized" });
  }
);
module.exports = router;
