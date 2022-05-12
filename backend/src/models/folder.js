'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Folder extends Model {
    static associate(models) {
      Folder.belongsTo(models.Module, { foreignKey: 'moduleId' });
    }
  }
  Folder.init(
    {
      name: DataTypes.STRING,
      moduleId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Folder',
    },
  );
  return Folder;
};
