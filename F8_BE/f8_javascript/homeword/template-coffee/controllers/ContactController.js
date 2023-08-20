const contactModel = require("../models/contactModel");

module.exports = {
  index: (req, res) => {
    const contactInfo = contactModel.getInfo();
    return res.render("home/contact", { contactInfo });
  },
};
