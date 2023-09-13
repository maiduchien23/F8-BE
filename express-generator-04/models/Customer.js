const { DataTypes } = require("sequelize");

const Customer = async () => {
  const sequelize = await require("../utils/database");

  return sequelize.define(
    "Customer",
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
      status: {
        type: DataTypes.NUMBER,
      },
    },
    {
      timestamps: false,
    }
  );
};

module.exports = Customer();
