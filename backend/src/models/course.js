'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {
      Course.hasMany(models.Module, { foreignKey: 'courseId' });
      Course.hasMany(models.Quiz, { foreignKey: 'courseId' });
    }
  }
  Course.init(
    {
      name: DataTypes.STRING(50),
    },
    {
      sequelize,
      modelName: 'Course',
    },
  );
  return Course;
};
