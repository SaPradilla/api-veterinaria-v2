'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  producto.init({
    medicamentoId: DataTypes.INTEGER,
    accesorioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'producto',
  });
  return producto;
};