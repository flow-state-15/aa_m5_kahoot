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
      name: {
        type: {
          type: DataTypes.STRING(50),
          unique: {
            args: true,
            msg: 'This course already exists. Please enter a new one.',
          },
          allowNull: false,
          validate: {
            notNull: {
              ags: true,
              msg: 'Enter a course name',
            },
            len: {
              args: [1, 50],
              msg: 'Please enter a course name between 1 and 50 characters',
            },
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Course',
    },
  );
  return Course;
};
