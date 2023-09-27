const { check } = require("express-validator");
const Customer = require("../models/Customer");
const { Op } = require("sequelize");

module.exports = () => {
  return [
    check("name", "Tên bắt buộc phải nhập").notEmpty(),
    check("name", "Tên phải từ 5 ký tự trở lên").isLength({ min: 5 }),
    check("email", "Email bắt buộc phải nhập").notEmpty(),
    check("email", "Email không đúng định dạng").isEmail(),
    check("email").custom(async (emailVal, { req }) => {
      const { id } = req.params;
      //Truy vấn database
      const customer = await Customer;
      const customerData = await customer.findOne({
        where: {
          email: emailVal,
          id: {
            [Op.not]: id,
          },
        },
      });
      if (customerData) {
        throw new Error("Email đã có người sử dụng");
      }
    }),
    check("password").custom(async (value, { req }) => {
      const { id } = req.params;
      if (!id && !value) {
        throw new Error("Mật khẩu bắt buộc phải nhập");
      }
    }),
  ];
};
