const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const model = require("../models/index");
const User = model.User;

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      res.status(400).json({
        status: "error",
        message: "Authentication Failed",
      });
      return;
    }

    const { password: hash } = user;
    const status = bcrypt.compareSync(password, hash);
    if (!status) {
      res.status(400).json({
        status: "error",
        message: "Authentication Failed",
      });
      return;
    }

    const token = jwt.createToken();
    const refreshToken = jwt.refreshToken();

    res.json({
      status: "success",
      accessToken: token,
      refreshToken,
    });
  },

  profile: async (req, res) => {
    const { JWT_SECRET } = process.env;
    const authorization = req.headers["authorization"];
    const token = authorization.replace("Bearer", "").trim();
    try {
      const decoded = jwt.verify(token, JWT_SECRET);

      if (decoded) {
        const { userId } = decoded.data;
        const user = await User.findByPk(userId);
        if (!user) {
          res.json({
            status: "error",
            message: "User not exist",
          });
          return;
        }
        res.json({ status: "success", data: user });
      }
    } catch (e) {
      res.status(401).json({
        status: "error",
        message: "Unauthorize",
      });
    }
  },
  refreshToken: async (req, res) => {},
};
