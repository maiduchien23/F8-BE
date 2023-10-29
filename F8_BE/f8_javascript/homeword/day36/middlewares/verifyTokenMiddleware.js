const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const authorization = req.headers["authorization"];
  const token = authorization.replace("Bearer", "").trim();
  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    if (decoded) {
      req.user = decoded.data;
      next();
    } else {
      res.status(401).json({
        status: "error",
        message: "Unauthorized",
      });
    }
  } catch (e) {
    res.status(401).json({
      status: "error",
      message: "Unauthorized",
    });
  }
};
