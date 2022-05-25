"use strict";
module.exports = (sequelize, DataTypes) => {
  const usuarios = sequelize.define("usuarios", {
    idUsuario: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
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
  }, {
    timestamps: false,
  });

  return usuarios;
};