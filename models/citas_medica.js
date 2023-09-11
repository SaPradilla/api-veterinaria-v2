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
      citas_medica.belongsTo(models.mascota,{
        foreignKey:'mascotaId'
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
    mascotaId: DataTypes.INTEGER
    // Fecha de la cita
    // Consultorio
    // Estado
    // Descripcion
  }, {
    sequelize,
    modelName: 'citas_medica',
  });
  return citas_medica;
};