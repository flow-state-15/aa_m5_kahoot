'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Module extends Model {
    static associate(models) {
      Module.hasMany(models.Folder, { foreignKey: 'folderId' });
      Module.belongsTo(models.Course, { foreignKey: 'courseId' });
    }
  }
  Module.init(
    {
      name: DataTypes.STRING,
      courseId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Module',
    },
  );
  return Module;
};
