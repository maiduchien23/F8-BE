var express = require("express");
var router = express.Router();

const HomeController = require("../controllers/HomeController");
const AboutController = require("../controllers/AboutController");
const GalleryController = require("../controllers/GalleryController");
const ServicesController = require("../controllers/ServicesController");
const ContactController = require("../controllers/ContactController");

/* GET home page. */
router.get("/", HomeController.index);
router.get("/about", AboutController.index);
router.get("/gallery", GalleryController.index);
router.get("/services", ServicesController.index);
router.get("/contact", ContactController.index);

module.exports = router;
