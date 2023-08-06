// src/server.js
const http = require("http");
const Render = require("./src/render/Render");

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    await Render.renderIndex(res);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
