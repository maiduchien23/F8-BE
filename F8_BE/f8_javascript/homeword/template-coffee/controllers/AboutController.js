const aboutModel = require("../models/aboutModel");

module.exports = {
  index: (req, res) => {
    const aboutInfo = aboutModel.getInfo();
    return res.render("home/about", { aboutInfo });
  },
};
