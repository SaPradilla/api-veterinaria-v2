'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class historias_clinica extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 1:1
      historias_clinica.belongsTo(models.mascota,{
        foreignKey:'mascotaId'
      })
    }
  }
  historias_clinica.init({
    mascotaId: DataTypes.INTEGER,
    clienteId:DataTypes.INTEGER,
    antecedentes_medicos: DataTypes.STRING,
    lesiones: DataTypes.STRING,
    patologias_vigentes: DataTypes.STRING,
    patologias_superadas: DataTypes.STRING,
    estado_nutricional: DataTypes.STRING,
    historial_comportamiento: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    // Cliente
    // Diagnostico - tabla aparte
    // fecha
  }, {
    sequelize,
    modelName: 'historias_clinica',
  });
  return historias_clinica;
};