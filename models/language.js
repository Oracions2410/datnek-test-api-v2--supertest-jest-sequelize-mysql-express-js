'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Language extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Language.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'userId'
      })
    }
  };
  Language.init({
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    speak: DataTypes.FLOAT,
    understand: DataTypes.FLOAT,
    write: DataTypes.FLOAT,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Language',
  });
  return Language;
};