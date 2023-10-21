var express = require("express");
var router = express.Router();

const RoleController = require("../controllers/RoleController");
const PermissionMiddleware = require("../middlewares/PermissionMiddleware");

function checkPermission(requiredPermission) {
  return async (req, res, next) => {
    if (!(await PermissionMiddleware(req, requiredPermission))) {
      req.flash("err", "Không có quyền");
      return res.redirect("/");
    }
    next();
  };
}

router.get("/", checkPermission("users.read"), RoleController.index);

router.get("/add", checkPermission("users.add"), RoleController.add);
router.post("/add", RoleController.handleAdd);

router.get("/edit/:id", checkPermission("users.update"), RoleController.edit);
router.post("/edit/:id", RoleController.handleEdit);

router.post(
  "/delete/:id",
  checkPermission("users.delete"),
  RoleController.delete
);

module.exports = router;
