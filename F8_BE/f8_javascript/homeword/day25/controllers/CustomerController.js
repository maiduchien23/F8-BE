const Customer = require("../models/Customer");
const Province = require("../models/Province");
const moment = require("moment");
const { Op } = require("sequelize");
const { PER_PAGE } = process.env;
const { getPaginateUrl } = require("../utils/url");
const { validationResult } = require("express-validator");
const validate = require("../utils/validate");
const md5 = require("md5");
module.exports = {
  //Get lists
  index: async (req, res) => {
    const { keyword, status } = req.query;

    const customer = await Customer;

    const filters = {};
    if (status === "active" || status === "inactive") {
      filters.status = status === "active" ? 1 : 0;
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

    //Lấy tổng số bản ghi
    const totalCountObj = await customer.findAndCountAll({
      where: filters,
    });

    const totalCount = totalCountObj.count;

    //Tính tổng số trang
    const totalPage = Math.ceil(totalCount / PER_PAGE);

    //Lấy trang hiện tại
    let { page } = req.query;
    if (!page || page < 1 || page > totalPage) {
      page = 1;
    }

    //Tính offset
    const offset = (page - 1) * PER_PAGE;

    const customerList = await customer.findAll({
      // attributes: ["id", "name", "email", "status"],
      order: [
        ["created_at", "DESC"],
        ["name", "ASC"],
      ],
      where: filters,
      limit: +PER_PAGE,
      offset: offset,
    });

    const msg = req.flash("msg");

    res.render("customers/index", {
      customerList,
      moment,
      req,
      totalPage,
      page,
      getPaginateUrl,
      msg,
    });
  },

  //Get Form
  create: async (req, res) => {
    const province = await Province;
    const provinceList = await province.findAll();
    const msg = req.flash("msg");
    const errors = req.flash("errors");
    // console.log(validate.getError(errors, "name"));
    res.render("customers/create", { provinceList, msg, errors, validate });
  },

  //Post Create
  store: async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      //Thêm dữ liệu
      const customer = await Customer;
      req.body.password = md5(req.body.password);
      customer.create(req.body);
      req.flash("msg", "Thêm khách hàng thành công");
      res.redirect("/customers");
    } else {
      req.flash("errors", errors.array());
      req.flash("msg", "Vui lòng nhập đầy đủ thông tin");
      res.redirect("/customers/create");
    }
  },

  update: async (req, res) => {
    try {
      const customerId = req.params.id;
      const customers = await Customer;
      const customer = await customers.findOne({ where: { id: customerId } });
      const msgEdit = req.flash("msgEdit");
      const msg = req.flash("msg");
      const errors = req.flash("errors");

      res.render("customers/update", {
        customer,
        msgEdit,
        msg,
        errors,
        validate,
      });
    } catch (error) {
      console.error(error);
    }
  },

  handleUpdate: async (req, res) => {
    const errors = validationResult(req);
    const customer = await Customer;
    if (errors.isEmpty()) {
      try {
        const customerId = req.params.id;
        const updatedData = {
          name: req.body.name,
          email: req.body.email,
          status: req.body.status,
        };

        await customer.update(updatedData, {
          where: {
            id: +customerId,
          },
        });

        req.flash("msgEdit", "Sửa thành công");
        res.redirect(`/customers`);
      } catch (error) {
        console.error(error);
      }
    } else {
      req.flash("errors", errors.array());
      req.flash("msg", "Vui lòng nhập đầy đủ thông tin");
      res.redirect(`/customers/update/${req.params.id}`);
    }
  },
  delete: async (req, res) => {
    const customer = await Customer;
    const customerDelete = await customer.destroy({
      where: {
        id: +req.params.id,
      },
    });
    req.flash("msgDelete", "Xóa thành công");
    res.redirect("/customers");
  },
};
