"use strict";

import { password } from "../../helpers/password-generate";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert("users", [
      {
        name: "John Doe",
        email: "johndoe@email.com",
        password: password,
        rule: "ADMIN",
      },
      {
        name: "Jane Doe",
        email: "janedoe@email.com",
        password: password,
        rule: "ADMIN",
      },
      {
        name: "Mario Doe",
        email: "mariodoe@email.com",
        password: password,
        rule: "USER",
      },
      {
        name: "Luis Doe",
        email: "luisdoe@email.com",
        password: password,
        rule: "USER",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete("users", null, {});
  },
};
