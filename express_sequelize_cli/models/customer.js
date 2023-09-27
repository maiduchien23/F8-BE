"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Customer.init(
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

      status: {
        type: DataTypes.BOOLEAN,
      },

      phone: {
        type: DataTypes.STRING(15),
      },
    },
    {
      sequelize,
      modelName: "Customer",
    },
  );
  return Customer;
};
