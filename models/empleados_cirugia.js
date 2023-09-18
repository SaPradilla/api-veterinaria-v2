'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class empleados_cirugia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      empleados_cirugia.belongsTo(models.empleado,{
        foreignKey:'empleadoId'
      })
      empleados_cirugia.belongsTo(models.cirugia,{
        foreignKey:'cirugiaId'
      })
    }
  }
  empleados_cirugia.init({
    empleadoId: DataTypes.INTEGER,
    cirugiaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'empleados_cirugia',
  });
  return empleados_cirugia;
};