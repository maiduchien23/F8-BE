module.exports = {
  index: (req, res) => {
    const { keyword, category } = req.query;
    console.log(`keyword = ${keyword}`);
    console.log(`category = ${category}`);
    return res.send("San Pham");
  },

  get: (req, res) => {
    const { slug } = req.params;
    return res.send(`<h1>Thong tin san pham: ${slug}</h1>`);
  },

  add: (req, res) => {
    //console.log(req.session);
    const { msg } = req.session;

    delete req.session.msg;
    return res.render("products/add", { msg });
  },

  handleAdd: (req, res) => {
    const { name, price } = req.body;
    //console.log(name, price);
    // console.log(req.headers["user-agent"]);
    // res.set("F8", "Hoang An");
    // res.send("success");

    req.session.msg = "Vui long nhap day du thong tin";

    res.redirect("/san-pham/them");
  },
};
