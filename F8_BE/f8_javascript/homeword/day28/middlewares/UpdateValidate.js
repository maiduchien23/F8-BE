const { check } = require("express-validator");

const models = require("../models/index");
const Customer = models.Customer;
module.exports = () => {
  return [
    check("name", "Tên bắt buộc phải nhập").notEmpty(),
    check("name", "Tên phải từ 5 ký tự trở lên").isLength({ min: 5 }),

    check("province_id").custom(async (provinceValue) => {
      if (Number(provinceValue) === 0) {
        throw new Error("Vui lòng chọn tỉnh thành");
      }
    }),
  ];
};
