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
      historias_clinica.belongsTo(models.mascotas,{
        foreignKey:'mascotaId'
      })
      // 
      historias_clinica.belongsTo(models.diagnostico,{
        foreignKey:'diagnosticoId'
      })
    }
  }
  historias_clinica.init({
    mascotaId: DataTypes.INTEGER,
    antecedentes_medicos: DataTypes.STRING,
    lesiones: DataTypes.STRING,
    patologias_vigentes: DataTypes.STRING,
    patologias_superadas: DataTypes.STRING,
    estado_nutricional: DataTypes.STRING,
    historial_comportamiento: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'historias_clinica',
  });
  return historias_clinica;
};