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
      carnet.belongsTo(models.mascota,{
        foreignKey:'mascotaId'
      })
    }
  }
  carnet.init({
    nombre: DataTypes.STRING,
    celular_contacto: DataTypes.STRING,
    mascotaId: DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'carnet',
  });
  return carnet;
};