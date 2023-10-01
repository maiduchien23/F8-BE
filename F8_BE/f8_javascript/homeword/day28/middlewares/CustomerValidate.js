const { check, query } = require("express-validator");
const { Op } = require("sequelize");

const models = require("../models/index");
const Customer = models.Customer;

module.exports = () => {
  return [
    check("name", "Tên bắt buộc phải nhập").notEmpty(),
    check("name", "Tên phải từ 5 ký tự trở lên").isLength({ min: 5 }),
    check("email", "Email bắt buộc phải nhập").notEmpty(),
    check("email", "Email không đúng định dạng").isEmail(),
    check("email").custom(async (emailValue, { req }) => {
      const { id } = req.params;

      const customerData = await Customer.findOne({
        where: {
          email: emailValue,
        },
      });
      if (customerData) {
        throw new Error("Email đã tồn tại");
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
