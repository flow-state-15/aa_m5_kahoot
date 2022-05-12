'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Current_Game extends Model {
    static associate(models) {
      Current_Game.belongsTo(models.Internal_User, { foreignKey: 'hostId' });
      Current_Game.belongsTo(models.Quiz, { foreignKey: 'quizId' });
    }
  }
  Current_Game.init(
    {
      hostId: DataTypes.INTEGER,
      quizId: DataTypes.INTEGER,
      currentQuestion: DataTypes.STRING,
      pin: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Current_Game',
    },
  );
  return Current_Game;
};
