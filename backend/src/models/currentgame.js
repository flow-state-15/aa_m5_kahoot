'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class currentGame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  currentGame.init({
    hostId: DataTypes.NUMBER,
    quizId: DataTypes.STRING,
    currentQuestion: DataTypes.STRING,
    pin: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'currentGame',
  });
  return currentGame;
};