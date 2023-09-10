'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class venta_producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 1:M - tiene
      venta_producto.belongsTo(models.producto,{
        foreignKey:'productoId'
      })
      // 1-1 - tiene
      venta_producto.belongsTo(models.cliente,{
        foreignKey:'clienteId'
      })
    }
  }
  venta_producto.init({
    clienteId: DataTypes.STRING,
    productoId: DataTypes.INTEGER,
    valor_total: DataTypes.INTEGER,
    cantidad:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'venta_producto',
  });
  return venta_producto;
};