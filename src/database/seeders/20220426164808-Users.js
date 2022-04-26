"use strict";
require("dotenv").config();
const { hash } = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example: */
    var hashedPassword = "";
    const bcryptHash = async () =>
      await hash(process.env.DEFAULT_USER_PASS, 10).then((hash) => {
        hashedPassword = hash;
      });
    await bcryptHash();
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "adm",
          email: "adm",
          password: hashedPassword,
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
