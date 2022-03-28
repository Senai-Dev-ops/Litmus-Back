"use strict";
module.exports = {
  up: async (queryInterface, DataTypes) => {
    
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cpf: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      adm:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
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

    await queryInterface.createTable("Maquina", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      datahora: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      rotacao: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      avanco: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      temperatura: {
        type: DataTypes.FLOAT,
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
    })
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("Users");
    await queryInterface.dropTable("Maquina")
  },
};
