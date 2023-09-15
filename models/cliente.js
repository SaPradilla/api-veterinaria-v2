'use strict';
const cli = require('nodemon/lib/cli');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 1:M 
      cliente.hasMany(models.mascotas,{
        foreignKey:'clienteId'
      })
      // 1:M
      cliente.hasMany(models.citas_medica,{
        foreignKey:'clienteId'
      })
      // 1:M
      cliente.hasMany(models.pqr,{
        foreignKey:'clienteId'
      })
      // 1-M 
      cliente.hasMany(models.venta_producto,{
        foreignKey:'clienteId'
      })
      // 1-M
      cliente.hasMany(models.venta_servicio,{
        foreignKey:'clienteId'
      })

    }
  }
  cliente.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    numero_celular: DataTypes.STRING,
    email: DataTypes.STRING,
    direccion: DataTypes.STRING,
    contrasena:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cliente',
  });
  return cliente;
};