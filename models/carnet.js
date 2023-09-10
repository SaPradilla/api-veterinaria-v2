'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class carnet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 1:1
      carnet.belongsTo(models.perfil_mascota,{
        foreignKey:'perfil_mascotaId'
      })
    }
  }
  carnet.init({
    nombre: DataTypes.STRING,
    celular_contacto: DataTypes.STRING,
    perfil_mascotaId: DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'carnet',
  });
  return carnet;
};