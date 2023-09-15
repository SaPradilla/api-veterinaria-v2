'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cirugia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     // 1:M - tiene
      cirugia.belongsTo(models.mascotas,{
        foreignKey:'mascotaId'
      })
      // RELACION DE MUCHOS A MUCHOS CREAR PIVOTE
      // M:1 - tiene
      cirugia.belongsTo(models.empleado,{
        foreignKey:'empleadoId'
      })
    }
  }
  cirugia.init({
    procedimiento: DataTypes.STRING,
    mascotaId: DataTypes.INTEGER,
    empleadoId: DataTypes.INTEGER,
    costo:DataTypes.INTEGER,
    cita_medicaId:DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'cirugia',
  });
  return cirugia;
};