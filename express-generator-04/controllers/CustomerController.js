const Customer = require("../models/Customer");

module.exports = {
  index: async (req, res) => {
    const customer = await Customer;
    const customerList = await customer.findAll();
    console.log(customerList);
    res.render("customers/index", {
      customerList,
    });
  },
};
