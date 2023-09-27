"use strict";

const md5 = require("md5");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("users", [
      {
        name: "Admin",
        email: "admin@gmail.com",
        password: md5("Admin@123456"),
        role: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Đức Hiền",
        email: "hien@gmail.com",
        password: md5("Hien@0123456"),
        role: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nguyễn Văn A",
        email: "nguyena@gmail.com",
        password: md5("Aa@0123456"),
        role: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nguyễn B",
        email: "nguyenb@gmail.com",
        password: md5("Bb@0123456"),
        role: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
