const servicesModel = require("../models/servicesModel");

module.exports = {
  index: (req, res) => {
    const listServices = servicesModel.getList();
    const servicesInfo = servicesModel.getInfo();
    res.render("home/services", { listServices, servicesInfo });
  },
};
