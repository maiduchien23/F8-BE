module.exports = {
  index: (req, res) => {
    // return res.send("<h1>Trang chu F8</h1>")
    const title = "trang chu f8";
    const products = ["San pham 1", "San pham 2", "San pham 3"];
    return res.render("home/index", { title, products });
  },
};
