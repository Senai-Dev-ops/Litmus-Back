"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    cpf: DataTypes.STRING,
    adm: DataTypes.BOOLEAN,
    data_nasc: DataTypes.DATE
  });

  return User;
};
