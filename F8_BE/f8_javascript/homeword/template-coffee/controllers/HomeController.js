const servicesModel = require("../models/servicesModel");
const aboutModel = require("../models/aboutModel");
const galleryModel = require("../models/galleryModel");
const testimonialModel = require("../models/testimonialModel");
const contactModel = require("../models/contactModel");

module.exports = {
  index: (req, res) => {
    const listServices = servicesModel.getList();
    const servicesInfo = servicesModel.getInfo();
    const aboutInfo = aboutModel.getInfo();
    const galleryInfo = galleryModel.getInfo();
    const testimonialInfo = testimonialModel.getInfo();
    const listTestimonials = testimonialModel.getList();
    const contactInfo = contactModel.getInfo();
    console.log(contactInfo);
    return res.render("home/index", {
      listServices,
      servicesInfo,
      aboutInfo,
      galleryInfo,
      testimonialInfo,
      listTestimonials,
      contactInfo,
    });
  },
};
