'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Module extends Model {
    static associate(models) {
      Module.hasMany(models.Folder, { foreignKey: 'moduleId' });
      Module.belongsTo(models.Course, { foreignKey: 'courseId' });
      Module.hasMany(models.Quiz, { foreignKey: 'moduleId' });
    }
  }
  Module.init(
    {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Please enter a module name',
          },
          len: {
            args: [3, 50],
            msg: 'Module name length must be between 3 and 50 characters',
          },
        },
      },
      courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'This module must belong to a course',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Module',
    },
  );
  return Module;
};
