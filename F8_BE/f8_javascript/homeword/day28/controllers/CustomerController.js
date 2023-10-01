const moment = require("moment");
const { Op } = require("sequelize");
const { PER_PAGE } = process.env;
const { validationResult } = require("express-validator");
const md5 = require("md5");
const createError = require("http-errors");

const models = require("../models");
const { getPaginateUrl } = require("../utils/url");
const validate = require("../utils/validate");
const Customer = models.Customer;

module.exports = {
  index: async (req, res) => {
    const { userLogin } = req.session;
    const { keyword, status } = req.query;
    const filters = {};
    if (status === "active" || status === "inactive") {
      filters.status = status === "active" ? 1 : 0;
    }
    if (userLogin) {
      if (userLogin.role !== 1) {
        filters.user_id = userLogin.id;
      }
    }

    if (keyword) {
      filters[Op.or] = [
        {
          name: {
            [Op.like]: `%${keyword}%`,
          },
        },
        {
          email: {
            [Op.like]: `%${keyword}%`,
          },
        },
      ];
    }

    // Lấy tổng số bản ghi
    const totalCountObj = await Customer.findAndCountAll({
      where: filters,
    });

    const totalCount = totalCountObj.count;

    // Lấy tổng số trang
    const totalPage = Math.ceil(totalCount / PER_PAGE);
    // Lấy trang hiện tại
    let { page } = req.query;
    if (!page || page < 1 || page > totalPage) {
      page = 1;
    }
    // Tính offset
    const offset = (page - 1) * PER_PAGE;
    const customerList = await Customer.findAll({
      // attributes: ["id", "name", "email", "status"],
      order: [["name", "ASC"]],
      where: filters,
      limit: +PER_PAGE,
      offset: offset,
    });
    let customer_id = [];
    customerList.forEach((customer) => {
      customer_id.push(customer.id);
    });
    let user_name = {};
    if (customer_id) {
      console.log("Hello");
      for (let i = 0; i < customer_id.length; i++) {
        const customer = await Customer.findOne({
          where: {
            id: customer_id[i],
          },
        });
        const user = await customer.getUser();
        user_name[customer_id[i]] = user.name;
      }
    }
    const msg = req.flash("msg");
    const success = req.flash("success");

    res.render("customers/index", {
      customerList,
      moment,
      req,
      totalPage,
      page,
      getPaginateUrl,
      msg,
      success,
      userLogin,
      user_name,
    });
  },
  // Get form
  create: async (req, res) => {
    const msg = req.flash("msg");
    const errors = req.flash("errors");
    const name = req.flash("name");
    const email = req.flash("email");
    const password = req.flash("password");
    res.render("customers/create", {
      msg,
      errors,
      validate,
      name,
      email,
      password,
    });
  },

  // Post Create
  store: async (req, res) => {
    const { userLogin } = req.session;
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      // Không có lỗi
      // console.log("Không có lỗi");
      req.body.password = md5(req.body.password);
      req.body.user_id = userLogin.id;
      Customer.create(req.body);
      req.flash("success", "Thêm khách hàng thành công");
      res.redirect("/customers");
    } else {
      req.flash("name", req.body.name);
      req.flash("email", req.body.email);
      req.flash("password", req.body.password);
      req.flash("errors", errors.array());
      req.flash("msg", "Vui lòng nhập đầy đủ thông tin");
      res.redirect("/customers/create");
    }
  },

  edit: async (req, res, next) => {
    console.log(req.query);
    const { id } = req.params;
    const customerDetail = await Customer.findByPk(id);
    if (!customerDetail) {
      next(createError(404));
      return;
    }
    const msg = req.flash("msg");
    const errors = req.flash("errors");
    const success = req.flash("success");
    res.render("customers/edit", {
      customerDetail,
      msg,
      errors,
      validate,
      success,
    });
  },

  update: async (req, res) => {
    const { id } = req.params;
    const customerDetail = await Customer.findByPk(id);
    if (!customerDetail) {
      // Xử lý lỗi
      next(createError(404));
      return;
    }

    // Xử lý update
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const customerData = req.body;
      if (customerData.password) {
        customerData.password = md5(customerData.password);
      } else {
        delete customerData.password;
      }
      console.log(customerData);
      Customer.update(customerData, {
        where: {
          id: id,
        },
      });
      req.flash("success", "Cập nhập thành công");
    } else {
      req.flash("errors", errors.array());
      req.flash("msg", "Vui lòng nhập đầy đủ thông tin");
    }
    res.redirect("/customers/edit/" + id);
  },

  destroy: async (req, res) => {
    const { id } = req.params;
    console.log(id);
    Customer.destroy({
      where: {
        id: id,
      },
      force: true, // Xóa vĩnh viễn
    });
    req.flash("success", "Xóa thành công");
    res.redirect("/customers");
  },

  destroyMultiple: async (req, res) => {
    const { checkDelete } = req.body;
    if (checkDelete) {
      const checkList = Array(checkDelete);
      for (let i = 0; i < checkList.length; i++) {
        Customer.destroy({
          where: {
            id: checkList[i],
          },
          force: true,
        });
      }
      req.flash("success", "Xóa thành công");
      res.redirect("/customers");
    } else {
      req.flash("msg", "Bạn hãy chọn tích vào ô muốn xóa");
      res.redirect("/customers");
    }
  },
};
