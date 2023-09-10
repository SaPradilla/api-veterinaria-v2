'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class citas_medica extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // M:1 pertenece
      citas_medica.belongsTo(models.cliente,{
        foreignKey:'clienteId'
      })
      // M:1 pertenece
      citas_medica.belongsTo(models.perfil_mascota,{
        foreignKey:'perfil_mascotaId'
      })
      // 1:1
      citas_medica.belongsTo(models.servicio,{
        foreignKey:'tipo_cita'
      })
    }
  }
  citas_medica.init({
    clienteId: DataTypes.INTEGER,
    tipo_cita: DataTypes.INTEGER,
    perfil_mascotaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'citas_medica',
  });
  return citas_medica;
};