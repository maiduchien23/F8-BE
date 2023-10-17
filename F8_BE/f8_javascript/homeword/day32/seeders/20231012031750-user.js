"use strict";
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const saltRounds = 10;
    const hash = bcrypt.hash("123456", saltRounds);
    const passwordHash = await hash;
    return queryInterface.bulkInsert("Users", [
      {
        name: "Hien",
        email: "mdhien2302@gmail.com",
        password: passwordHash,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("users", null, {});
  },
};
