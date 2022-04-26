"use strict";
require("dotenv").config();
const bcrypt = require("bcrypt");

const hash = bcrypt.hashSync(process.env.DEFAULT_USER_PASS, 10);
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example: */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "adm",
          email: "adm",
          password: hash,
          cpf: "00000000000",
          adm: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:*/
    await queryInterface.bulkDelete("users", null, {});
  },
};
