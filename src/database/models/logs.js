"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Logs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Logs.belongsTo(models.User, {
        constraints: true,
        foreignKey: "userId",
      });
    }
  }
  Logs.init(
    {
      userName: DataTypes.STRING,
      userEmail: DataTypes.STRING,
      createdBy: DataTypes.STRING,
      updatedBy: DataTypes.STRING,
      deletedBy: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Logs",
    }
  );
  return Logs;
};
