export default (sequelize, DataTypes) => {
  const Current_Game = sequelize.define(
    'Current_Game',
    {
      hostId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Host is required to start a game',
          },
        },
      },
      quizId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Quiz is required to start a game',
          },
        },
      },
      currentQuestion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Current question is required to play a game',
          },
        },
      },
      pin: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: {
          args: true,
          msg: 'Game PIN must be unique. Please try a new one.',
        },
        validate: {
          notNull: {
            args: true,
            msg: 'This game needs a PIN so users can join.',
          },
          len: {
            args: [5, 10],
            msg: 'Game PIN must be between 5 and 10 characters.',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Current_Game',
    },
  );
  return Current_Game;
};
