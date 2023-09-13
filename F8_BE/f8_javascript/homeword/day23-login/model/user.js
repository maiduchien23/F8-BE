const { DataTypes } = require("sequelize");

const User = async () => {
  const sequelize = await require("../utils/db");

  return sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
};

module.exports = User();
