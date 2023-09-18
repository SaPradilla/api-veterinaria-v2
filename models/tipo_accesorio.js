'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipo_accesorio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 1:M
      tipo_accesorio.hasMany(models.accesorio,{
        foreignKey:'tipo_accesorioId'
      })
      
    }
  }
  tipo_accesorio.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tipo_accesorio',
  });
  return tipo_accesorio;
};