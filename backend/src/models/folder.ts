export default (sequelize, DataTypes) => {
  const Folder = sequelize.define(
    'Folder',
    {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Please enter a folder name',
          },
          len: {
            args: [3, 50],
            msg: 'Folder name length must be between 3 and 50 characters',
          },
        },
      },
      moduleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'This folder must belong to a module',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Folder',
    },
  );
  return Folder;
};
