'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class empleado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 1:1
      empleado.hasOne(models.cirugia,{
      foreignKey:'medicoId'
      })
    }
  }
  empleado.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    numero_celular: DataTypes.STRING,
    email: DataTypes.STRING,
    direccion: DataTypes.STRING,
    fecha_nacimiento: DataTypes.DATE,
    rol: DataTypes.ENUM('Recepcionista','Médico','Auxiliar'),
    isAdmin:DataTypes.BOOLEAN,
    isActive:DataTypes.BOOLEAN,
    contrasena: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'empleado',
  });
  return empleado;
};