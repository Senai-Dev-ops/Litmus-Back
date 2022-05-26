"use strict";
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("usuarios", {
      idUsuario: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nome: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      senha: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      CPF: {
        type: DataTypes.CHAR(14),
        unique: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
      },
      ADM: {
        type: DataTypes.TINYINT(1),
        defaultValue: false,
      },
      DATANASC: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("usuarios");
  },
};
