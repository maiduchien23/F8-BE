var express = require("express");
var router = express.Router();

const CustomerController = require("../controllers/CustomerController");
const CustomerValidate = require("../middlewares/CustomerValidate");
const UpdateValidate = require("../middlewares/UpdateValidate");
/* GET users listing. */
router.get("/", CustomerController.index);
router.get("/create", CustomerController.create);
router.post("/create", CustomerValidate(), CustomerController.store);

router.get("/edit/:id", CustomerController.edit);
router.post("/edit/:id", UpdateValidate(), CustomerController.update);

router.get("/destroy/:id", CustomerController.destroy);

router.post("/destroymulti", CustomerController.destroyMultiple);

module.exports = router;
