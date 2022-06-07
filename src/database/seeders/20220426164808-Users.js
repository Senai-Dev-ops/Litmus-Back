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
          nome: "Administrador",
          email: "admin@senai.com",
          senha: hash,
          CPF: "000.000.000-00",
          ADM: true,
          DATANASC: "2000-01-01"
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