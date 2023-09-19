var express = require("express");
var router = express.Router();

const CustomerValidate = require("../middlewares/CustomerValidate");
const CustomerController = require("../controllers/CustomerController");
const UpdateValidate = require("../middlewares/UpdateValidate");

router.get("/", CustomerController.index);
router.get("/create", CustomerController.create);
router.post("/create", CustomerValidate(), CustomerController.store);
router.get("/create", CustomerController.create);
router.get("/update/:id", CustomerController.update);
router.post("/update/:id", UpdateValidate(), CustomerController.handleUpdate);
router.post("/delete/:id", CustomerController.delete);
module.exports = router;
