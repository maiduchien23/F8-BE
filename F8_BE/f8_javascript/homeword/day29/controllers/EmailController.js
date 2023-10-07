const nodemailer = require("nodemailer");
const moment = require("moment");

const model = require("../models/index");
const { PER_PAGE } = process.env;
const { getPaginateUrl } = require("../utils/url");
const Email = model.Email;

module.exports = {
  index: (req, res) => {
    const msg = req.flash("msg");
    console.log(msg);
    res.render("email/form", { msg });
  },

  handleEmail: async (req, res) => {
    const { email, title, content } = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: process.env.MAIL_SECURE,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: `${process.env.MAIL_FROM_NAME} <${process.env.MAIL_FROM}>`,
      to: email,
      subject: title,
      html: content,
    });
    await Email.create(req.body);

    req.flash("msg", "Gửi email thành công");
    req.flash("info", info);
    res.redirect("/email");
  },

  history: async (req, res) => {
    const filters = {};
    console.log(Email);
    const totalCountObj = await Email.findAndCountAll({
      where: filters,
    });

    const totalCount = totalCountObj.count;
    console.log(totalCount);

    const totalPage = Math.ceil(totalCount / PER_PAGE);

    let { page } = req.query;
    if (!page || page < 1 || page > totalPage) {
      page = 1;
    }

    const offset = (page - 1) * PER_PAGE;
    console.log(offset);
    const emailList = await Email.findAll({
      order: [["email", "ASC"]],
      where: filters,
      limit: +PER_PAGE,
      offset: offset,
    });
    res.render("email/history", {
      emailList,
      moment,
      totalPage,
      page,
      getPaginateUrl,
      req,
    });
  },

  content: async (req, res) => {
    const { id } = req.params;
    const msg = req.flash("msg");
    if (!id) {
      return res.render("email/form", { msg });
    }
    const emailUser = await Email.findOne({
      where: {
        id: id,
      },
    });
    if (!emailUser) {
      return res.render("email/form", { msg });
    }
    const { email, title, content } = emailUser;
    res.render("email/content", { email, title, content });
  },

  openEmail: async (req, res) => {
    let id = req.params.id;
    const info = req.flash("info");
    console.log(info);
    console.log(id);
    res.sendFile(
      "C:/WorldSpaceF8/F8-BE/F8_BE/f8_javascript/homeword/day29/public/images/img.png"
    );
  },
};
