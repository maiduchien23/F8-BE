const http = require("http");
const fs = require("fs");
//const url = require("url");
const home = require("./modules/home");

//console.log(home.index());

const hostname = "localhost";
const port = 3001;

const router = {
  "/": "home",
  "/about": "about",
  "/product": "products",
};

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  let pathView = "home";

  const path = req.url;

  if (path === "/") {
    home.index(req, res);
  }

  // if (router[path] !== undefined) {
  //   pathView = router[path];
  // } else {
  //   pathView = "404";
  // }

  //   fs.readFile(`views/${pathView}.html`, "utf8", (err, data) => {
  //     res.end(data);
  //   });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
