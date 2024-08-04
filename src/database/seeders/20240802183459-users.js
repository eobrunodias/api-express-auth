"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert("users", [
      {
        name: "John Doe",
        email: "johndoe@email.com",
        password: "123456",
        rule: "admin",
      },
      {
        name: "Jane Doe",
        email: "janedoe@email.com",
        password: "1234",
        rule: "user",
      },
      {
        name: "Mario Doe",
        email: "mariodoe@email.com",
        password: "12345",
        rule: "user",
      },
      {
        name: "Luis Doe",
        email: "luisdoe@email.com",
        password: "1234567",
        rule: "user",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete("users", null, {});
  },
};
