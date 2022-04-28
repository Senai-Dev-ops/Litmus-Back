"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("USUARIOS", {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    cpf: DataTypes.STRING,
    tipo_de_conta: DataTypes.BOOLEAN,
    data_nasc: DataTypes.DATE,
    cargo: DataTypes.STRING
  });

  return USUARIOS;
};
