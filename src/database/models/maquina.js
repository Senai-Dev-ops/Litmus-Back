'use strict';
module.exports = (sequelize, DataTypes) => {
  const Maquina = sequelize.define("Maquina", {
    rotacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    temperatura: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    avanco: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    datahora: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    timestamps: false,
  });

  return Maquina;
};
