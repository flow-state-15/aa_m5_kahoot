export default (sequelize, DataTypes) => {
  const Module = sequelize.define(
    'Module',
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
