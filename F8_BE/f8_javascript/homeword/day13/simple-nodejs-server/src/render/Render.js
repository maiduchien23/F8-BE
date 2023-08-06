const fs = require("fs");
const data = require("../data/data");

class Render {
  async renderIndex(res) {
    try {
      const view = await this.readFileAsync("index.html", "utf8");
      const updatedView = this.replacePlaceholders(view);

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(updatedView);
    } catch (error) {
      console.error("Error:", error);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    }
  }

  replacePlaceholders(view) {
    const result = view.match(/{.+?}/g);

    if (!result) {
      return view;
    }

    let updatedView = view;

    for (const item of result) {
      const itemKey = item.replaceAll("{", "").replaceAll("}", "");

      if (data.hasOwnProperty(itemKey)) {
        let replacement = data[itemKey];

        if (
          typeof replacement === "object" &&
          !Array.isArray(replacement) &&
          replacement !== null
        ) {
          const listItems = Object.values(replacement)
            .map((value) => `<li>${value}</li>`)
            .join("");
          replacement = listItems;
        }

        updatedView = updatedView.split(item).join(replacement);
      }
    }

    return updatedView;
  }

  readFileAsync(path, encoding) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, encoding, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
}

module.exports = new Render();
