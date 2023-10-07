"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Email extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Email.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            email: DataTypes.STRING,
            title: DataTypes.STRING,
            content: DataTypes.STRING,
            status: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Email",
        }
    );
    return Email;
};
