'use strict';
module.exports = (sequelize, DataTypes) => {
  const dadosMaquina = sequelize.define("dadosMaquina", {
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
  }, {
    timestamps: false,
  });

  return dadosMaquina;
};
