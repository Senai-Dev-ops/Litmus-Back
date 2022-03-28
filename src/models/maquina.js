'use strict';
module.exports = (sequelize, DataTypes) => {
  const Maquina = sequelize.define('Maquina', {
    datahora: DataTypes.DATE,
    rotacao: DataTypes.INTEGER,
    avanco: DataTypes.FLOAT,
    temperatura: DataTypes.FLOAT,
  });
  return Maquina;
}