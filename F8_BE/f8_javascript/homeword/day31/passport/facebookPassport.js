const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;

const model = require("../models/index");
const Provider = model.Provider;
const User = model.User;

module.exports = new FacebookStrategy(
  {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    profileFields: ["id", "displayName", "email"],
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      const { id, displayName, emails } = profile;
      const [{ value: email }] = emails;
      const provider = "facebook";
      let providerDetail = await Provider.findOne({
        where: {
          name: provider,
        },
      });
      let providerId;
      if (!providerDetail) {
        providerDetail = await Provider.create({
          name: provider,
        });
      }
      providerId = providerDetail.id;
      let user = await User.findOne({
        where: {
          email,
          provider_id: providerId,
        },
      });
      if (!user) {
        user = await User.create({
          name: displayName,
          email,
          provider_id: providerId,
        });
      }
      return done(null, user);
    } catch (error) {
      return done(error, null);
    }
  }
);
