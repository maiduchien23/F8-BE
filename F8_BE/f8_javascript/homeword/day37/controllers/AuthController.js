const bcrypt = require("bcrypt");
const model = require("../models/index");
const jwtUtils = require("../utils/jwt");
module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({
        status: "Error",
        message: "Invalid input",
      });
      return;
    }

    const user = await model.User.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      res.status(400).json({
        status: "Error",
        message: "Kiểm tra lại email hoặc mật khẩu",
      });
      return;
    }
    if (!bcrypt.compareSync(password, user.password)) {
      res.status(400).json({
        status: "Error",
        message: "Kiểm tra lại email hoặc mật khẩu",
      });
      return;
    }

    const accessToken = jwtUtils.createToken(user.id);
    const refreshToken = jwtUtils.createRefresh();
    const updateStatus = await user.update({
      refresh_token: refreshToken,
    });

    if (!updateStatus) {
      res.status(500).json({
        status: "Error",
        message: "Server Error",
      });
      return;
    }

    res.json({
      status: "success",
      accessToken,
      refreshToken,
    });
  },

  profile: async (req, res) => {
    const authorization = req.header("Authorization");
    const token = authorization.replace("Bearer", "").trim();

    try {
      const decoded = jwtUtils.decode(token);
      if (decoded) {
        const blackToken = await model.BlackToken.findOne({
          where: { token: token },
        });

        if (blackToken) {
          res.status(401).json({
            status: "Error",
            message: "Unauthorize",
          });
          return;
        }

        const user = await model.User.findOne({
          where: {
            id: decoded.data,
          },
          attributes: ["id", "name", "email", "createdAt", "updatedAt"],
        });
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
      console.log(e);
      res.status(401).json({
        status: "error",
        message: "Unauthorize",
      });
    }
  },

  logout: async (req, res) => {
    const authorization = req.header("Authorization");
    const token = authorization.replace("Bearer", "").trim();
    try {
      const decoded = jwtUtils.decode(token);
      console.log(decoded.iat);
      if (decoded) {
        const oldBlackToken = await model.BlackToken.findOne({
          where: { token: token },
        });
        if (oldBlackToken) {
          res.status(400).json({
            status: "error",
            message: "Bạn đã đăng xuất rồi",
          });
          return;
        }

        const newBlackToken = await model.BlackToken.create({
          token: token,
          issuedAt: decoded.iat,
        });

        if (!newBlackToken) {
          res.status(500).json({
            status: "Error",
            message: "Server Error",
          });
          return;
        }

        const user = await model.User.findByPk(decoded.data);
        if (!user) {
          res.status(400).json({
            status: "error",
            message: "User not exist",
          });
          return;
        }

        const updateStatus = await user.update({
          refresh_token: null,
        });

        if (!updateStatus) {
          res.status(500).json({
            status: "Error",
            message: "Server Error",
          });
          return;
        }

        res.json({ status: "success", message: "Đăng xuất thành công" });
      }
    } catch (e) {
      res.status(401).json({
        status: "error",
        message: "Unauthorize",
        error: e,
      });
      return;
    }
  },
};
