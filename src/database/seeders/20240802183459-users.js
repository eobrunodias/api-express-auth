"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert("users", [
      {
        name: "John Doe",
        email: "johndoe@email.com",
        password: "123456",
      },
      {
        name: "Jane Doe",
        email: "janedoe@email.com",
        password: "1234",
      },
      {
        name: "Mario Doe",
        email: "mariodoe@email.com",
        password: "12345",
      },
      {
        name: "Luis Doe",
        email: "luisdoe@email.com",
        password: "1234567",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete("users", null, {});
  },
};
