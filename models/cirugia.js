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
     cirugia.belongsTo(models.mascota,{
      foreignKey:'mascotaId'
     })
      // 1:1 - tiene
      cirugia.belongsTo(models.empleado,{
        foreignKey:'medicoId'
      })
    }
  }
  cirugia.init({
    procedimiento: DataTypes.STRING,
    mascotaId: DataTypes.INTEGER,
    medicoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cirugia',
  });
  return cirugia;
};