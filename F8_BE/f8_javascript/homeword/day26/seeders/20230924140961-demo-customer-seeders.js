"use strict";

const md5 = require("md5");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Customers", [
      {
        name: "Hien",
        email: "hien@gmail.com",
        password: md5("123456@Aab"),
        status: 1,
        province_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: new Date(),
      },
      {
        name: "Hoang An",
        email: "hoangan@gmail.com",
        password: md5("123456@Aab"),
        status: 1,
        province_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Customers", null, {});
  },
};
