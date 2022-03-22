'use strict';
const {Model} = require('sequelize');

  class Users extends Model {
    static associate(models) {
      Users.init({
        name: DataTypes.STRING,
        password: DataTypes.STRING,
        role: DataTypes.STRING
      }, {
        sequelize,
        modelName: 'Users',
      });
      return Users;
    }
  };

module.exports = {sequelize, DataTypes}