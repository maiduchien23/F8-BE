const Cache = require("file-system-cache").default;
var express = require("express");
var router = express.Router();
const cache = Cache({
  basePath: "./.cache",
  ns: "f8",
  hash: "sha1",
  ttl: 86400,
});

const cacheStore = async (key, value, ttl) => {
  let data = await cache.get(key);
  if (!data) {
    cache.setSync(key, value, ttl);
    data = value;
  }
  return data;
};
/* GET home page. */
router.get("/", async function (req, res, next) {
  const products = ["Item 1", "Item 2 ", "Item 3 "];
  const data = await cacheStore("products", products, 5);
  console.log(data);
  let posts = ["Post 1", "Post 2 ", "Post 3 "];
  const postData = await cacheStore("posts", posts, 5);
  console.log(postData);
  res.render("index", { title: "Express" });
});

module.exports = router;
