const Base = require("../core/Base");

const fs = require("fs");

class Home extends Base {
  index = (req, res) => {
    this.render("abc");

    fs.readFile(`./views/home.html`, "utf8", (err, data) => {
      res.end(data);
    });
  };
}

module.exports = new Home();
