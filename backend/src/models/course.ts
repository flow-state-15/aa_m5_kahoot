// import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
  // class Course extends Model {}
  // Course.init(
  const Course = sequelize.define(
    'Course',
    {
      name: {
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
    {
      sequelize,
      modelName: 'Course',
    },
  );
  Course.associate = function (models) {
    // Course.hasMany(models.Module, { foreignKey: 'courseId' });
    // Course.hasMany(models.Quiz, { foreignKey: 'courseId' });
  };
  return Course;
};
