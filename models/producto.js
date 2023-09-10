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
      // 1:M
      producto.hasMany(models.venta_producto,{
        foreignKey:'productoId'
      })
      // 1:M
      producto.hasMany(models.venta_servicio,{
        foreignKey:'servicioId'
      })
    }
  }
  producto.init({
    tipo_producto: DataTypes.ENUM('Antibióticos','Antiinflamatorios','Antiparasitario','Nutriente','Juguete','Alimentos','Asesorios','Higiene','Collares'),
    precio: DataTypes.INTEGER,
    unidades: DataTypes.INTEGER,
    volumen: DataTypes.STRING,
    isActive:DataTypes.BOOLEAN
    
  }, {
    sequelize,
    modelName: 'producto',
  });
  return producto;
};