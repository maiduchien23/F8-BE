const galleryModel = require("../models/galleryModel");

module.exports = {
  index: (req, res) => {
    const galleryInfo = galleryModel.getInfo();
    return res.render("home/gallery", { galleryInfo });
  },
};
