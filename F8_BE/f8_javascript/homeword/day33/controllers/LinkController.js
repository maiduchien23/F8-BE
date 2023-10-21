const { nanoid } = require("nanoid");
const model = require("../models/index");
const Link = model.Link;

// Hàm tạo short URL
const generateShortUrl = () => {
  return nanoid(6);
};

module.exports = {
  index: async (req, res) => {
    const links = await Link.findAll();
    const short_url = req.flash("short_url");
    const url = req.flash("url");
    res.render("links/index", { links, short_url, url });
  },

  create: async (req, res) => {
    const { url } = req.body;
    const short_url = generateShortUrl();
    await Link.create({
      name: url,
      short_url,
    });
    req.flash("url", url);
    req.flash("short_url", short_url);
    res.redirect("/links");
  },

  getLink: async (req, res) => {
    const { id } = req.params;
    const link = await Link.findOne({
      where: {
        short_url: id,
      },
    });
    if (!link) {
      return res.status(404).send("Link not found.");
    }
    const url = link.dataValues.name;
    if (url.includes("http")) {
      res.redirect(url);
    } else {
      res.redirect(`http://${url}`);
    }
  },

  manager: async (req, res) => {
    const links = await Link.findAll();
    res.render("links/link", { links });
  },

  edit: async (req, res) => {
    const { id } = req.params;
    const link = await Link.findOne({
      where: { id },
    });
    res.render("links/edit", { link });
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { url, short_url } = req.body;
    const link = await Link.findByPk(id);
    if (!link) {
      return res.status(404).send("Link not found.");
    }
    link.name = url;
    link.short_url = short_url;
    await link.save();
    res.redirect(`/links/edit/${id}`);
  },

  // Xóa liên kết
  delete: async (req, res) => {
    const { id } = req.params;
    const link = await Link.findByPk(id);
    if (!link) {
      return res.status(404).send("Link not found.");
    }
    await link.destroy();
    res.redirect("/links/link");
  },
};
