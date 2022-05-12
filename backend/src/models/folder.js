'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class folder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  folder.init({
    name: DataTypes.STRING,
    moduleId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'folder',
  });
  return folder;
};