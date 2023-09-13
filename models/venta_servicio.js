'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class venta_servicio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 1:M
      venta_servicio.belongsTo(models.servicio,{
        foreignKey:'servicioId'
      })
      // M:1
      venta_servicio.belongsTo(models.cliente,{
        foreignKey:'clienteId'
      })
    }
  }
  venta_servicio.init({
    clienteId: DataTypes.INTEGER,
    servicioId: DataTypes.INTEGER,
    valor_total: DataTypes.INTEGER,
    cantidad:DataTypes.INTEGER,
    
  }, {
    sequelize,
    modelName: 'venta_servicio',
  });
  return venta_servicio;
};