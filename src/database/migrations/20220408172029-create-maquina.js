"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Maquinas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      datahora: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      rotacao: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      avanco: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      temperatura: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Maquinas");
  },
};
