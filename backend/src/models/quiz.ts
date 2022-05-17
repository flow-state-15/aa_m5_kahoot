export default (sequelize, DataTypes) => {
  const Quiz = sequelize.define(
    'Quiz',
    {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Please enter a quiz name',
          },
          len: {
            args: [3, 50],
            msg: 'Quiz name must be between 3 and 50 characters',
          },
        },
      },
      folderId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      moduleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'This quiz must belong to a module',
          },
        },
      },
      courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'This quiz must belong to a course',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Quiz',
    },
  );
  return Quiz;
};
