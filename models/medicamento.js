'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class medicamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 1:M
      medicamento.hasMany(models.venta_medicamento,{
        foreignKey:'medicamentoId'
      })
      // 1:M
      medicamento.hasMany(models.venta_servicio,{
        foreignKey:'servicioId'
      })
    }
  }
  medicamento.init({
    // tipo_medicamento: DataTypes.ENUM('Antibióticos','Antiinflamatorios','Antiparasitario','Nutriente','Juguete','Alimentos','Asesorios','Higiene','Collares'),
    tipo_productoId:DataTypes.INTEGER,
    precio: DataTypes.INTEGER,
    unidades: DataTypes.INTEGER,
    volumen: DataTypes.STRING,
    fecha_venciminento: DataTypes.DATE,
    isActive:DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'medicamento',
  });
  return medicamento;
};