export default (sequelize, DataTypes) => {
  const Internal_User = sequelize.define(
    'Internal_User',
    {
      // Still not sure what this table will look like
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      oauth: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Internal_User',
    },
  );
  return Internal_User;
};
