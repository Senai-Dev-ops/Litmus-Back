'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Maquina extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Maquina.init({
    datahora: DataTypes.TIME,
    rotacao: DataTypes.INTEGER,
    avanco: DataTypes.FLOAT,
    temperatura: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Maquina',
  });
  return Maquina;
};