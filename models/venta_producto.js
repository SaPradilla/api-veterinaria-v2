'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class venta_medicamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 1:M - tiene
      venta_medicamento.belongsTo(models.medicamento,{
        foreignKey:'medicamentoId'
      })
      // 1-1 - tiene
      venta_medicamento.belongsTo(models.cliente,{
        foreignKey:'clienteId'
      })
    }
  }
  venta_medicamento.init({
    clienteId: DataTypes.STRING,
    medicamentoId: DataTypes.INTEGER,
    valor_total: DataTypes.INTEGER,
    cantidad:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'venta_medicamento',
  });
  return venta_medicamento;
};