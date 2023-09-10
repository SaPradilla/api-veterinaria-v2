'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pqr extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     // 1:M - pertenece
     pqr.belongsTo(models.cliente,{
        foreignKey:'clienteId'
     })

    }
  }
  pqr.init({
    clienteId: DataTypes.INTEGER,
    pqr_descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pqr',
  });
  return pqr;
};