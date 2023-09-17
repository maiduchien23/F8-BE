const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING(50),
    },
    email: {
      type: DataTypes.STRING(100),
      unique: true,
    },

    password: {
      type: DataTypes.STRING(100),
    },
  },
  {
    timestamps: false,
  },
);

module.exports = User;
