'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 1:1
      usuario.hasOne(models.cirugia,{
      foreignKey:'medicoId'
      })
    }
  }
  usuario.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    numero_celular: DataTypes.STRING,
    email: DataTypes.STRING,
    direccion: DataTypes.STRING,
    fecha_nacimiento: DataTypes.DATE,
    rol: DataTypes.ENUM('Recepcionista','Médico','Auxiliar'),
    isAdmin:DataTypes.BOOLEAN,
    isActive:DataTypes.BOOLEAN,
    contraseña: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'usuario',
  });
  return usuario;
};