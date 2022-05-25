"use strict";
require("dotenv").config();
const bcrypt = require("bcrypt");
const pass = process.env.DEFAULT_USER_PASS;

const hash = bcrypt.hashSync(pass, 10);
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example: */
    await queryInterface.bulkInsert(
      "usuarios",
      [
        {
          nome: "adm",
          email: "adm@gmail.com",
          senha: hash,
          CPF: "111.222.333-32",
          ADM: true,
          DATANASC: "2002-11-25"
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
    await queryInterface.bulkDelete("usuarios", null, {});
  },
};