'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class accesorio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // M:1
      accesorio.belongsTo(models.tipo_accesorio,{
        foreignKey:'tipo_accesorioId'
      })
      // 1:1
      accesorio.hasOne(models.producto,{
        foreignKey:'accesorioId'
      })
      // 1:M
      accesorio.hasMany(models.venta_producto,{
        foreignKey:'accesorioId'
      })
    }
  }
  accesorio.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    tipo_accesorioId: DataTypes.INTEGER,
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'accesorio',
  });
  return accesorio;
};