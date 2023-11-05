const { v4: uuid } = require("uuid");
const NodeCache = require("node-cache");
const cache = new NodeCache();
const model = require("../models/index");
const User = model.User;

module.exports = {
  getUsersFromDB: async () => {
    return await User.findAll({});
  },

  getUsers: async (req, res) => {
    const cookieName = "users";
    const cookieValue = req.cookies[cookieName];

    if (cookieValue && cache.has(cookieValue)) {
      const cachedUsers = cache.get(cookieValue);
      res.json(cachedUsers);
    } else {
      const users = await this.getUsersFromDB();
      const newCacheKey = uuid();
      cache.set(newCacheKey, users, 900);
      res.cookie(cookieName, newCacheKey, { maxAge: 900000, httpOnly: true });
      res.json(users);
    }
  },
};
