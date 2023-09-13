'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipo_producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 1:M
      tipo_producto.hasMany(models.accesorio,{
        foreignKey:'tipo_productoId'
      })
      // 1:M
      tipo_producto.hasMany(models.medicamento,{
        foreignKey:'tipo_productoId'
      })
    
    }
  }
  tipo_producto.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tipo_producto',
  });
  return tipo_producto;
};