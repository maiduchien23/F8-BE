const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { TwoFactorStrategy } = require("passport-2fa-totp");
const bcrypt = require("bcrypt");
const userModel = require("../models/user");

passport.use(
  "local",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (username, password, done) => {
      const user = await userModel.findByEmail(username);
      if (!user) {
        return done(null, false, { message: "Người dùng không tồn tại." });
      }

      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return done(null, false, { message: "Mật khẩu không chính xác." });
      }

      return done(null, user);
    }
  )
);

const twoFactorStrategy = new TwoFactorStrategy({
  issuer: "f8",
  secretLength: 6,
  digits: 6,
  period: 30,

  sendVerifyCode: async (user, method, options) => {
    const secret = user.mfaSecret;
    if (!secret) {
      throw new Error("Xác minh 2 bước chưa được kích hoạt.");
    }

    const verificationCode = generateSecret(secret);
    await sendEmail(user.email, "Mã xác minh 2 bước", verificationCode);
    return verificationCode;
  },
  verifyCode: async (user, code, done) => {
    const secret = user.mfaSecret;
    if (!secret) {
      throw new Error("Xác minh 2 bước chưa được kích hoạt.");
    }

    const isValidCode = generateSecret(secret) === code;
    if (!isValidCode) {
      return done(null, false, { message: "Mã xác minh không chính xác." });
    }

    return done(null, user);
  },
});

module.exports = passport;
