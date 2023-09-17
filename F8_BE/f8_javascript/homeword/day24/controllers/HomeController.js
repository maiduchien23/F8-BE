const User = require("../models/User");

module.exports = {
  index: (req, res) => {
    const { userLogin } = req.session;

    res.render("index", { userLogin });
  },
};
